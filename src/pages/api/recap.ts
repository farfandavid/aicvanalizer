import type { APIRoute } from "astro";
import { verifyRecaptcha } from "../../utils/recapVerify";
import { gemini } from "../../config/gemini";

async function fileToGenerativePart(file: File) {
    return {
        inlineData: {
            data: Buffer.from(await file.arrayBuffer()).toString('base64'),
            mimeType: file.type,
        }
    }
    /* return {
        inlineData: {
            data: Buffer.from(fs.readFileSync(path)).toString('base64'),
            mimeType: mimeType,
        }
    } */
}

export const POST: APIRoute = async ({ request }) => {
    const formData = await request.formData();
    const recaptchaResponse = formData.get("recaptcha") as any;
    const passed = await verifyRecaptcha(recaptchaResponse).catch((err) => {
        console.error(err);
        return false;
    });
    if (!passed) {
        console.log("Recaptcha failed");
        return new Response(JSON.stringify({ success: true }), {
            status: 403,
            headers: {
                "content-type": "application/json",
            }
        });
    }
    console.log("Recaptcha passed");
    const file = formData.get("doc") as File;
    if (file.type !== "application/pdf" || !file.type || !file || file.size === 0 || file.size > 1 * 1024 * 1024) {
        return new Response(JSON.stringify({ success: false, message: "Solo se aceptan archivos PDF de 1MB" }), {
            status: 400,
            headers: {
                "content-type": "application/json",
            }
        });
    }
    let prompt = `
Analiza el curriculum en español, se exigente, si es que detectas que no es un curriculum pon en el feedback que no se puede evaluar.
`;
    const filePart = await fileToGenerativePart(file);
    const generateContent = await gemini.generateContent([prompt, filePart]).catch((err) => {
        return null;
    });
    if (generateContent === null) {
        return new Response(JSON.stringify({ success: false, message: "Error al analizar el archivo" }), {
            status: 500,
            headers: {
                "content-type": "application/json",
            }
        });
    }
    return new Response(JSON.stringify(JSON.parse(generateContent.response.text())), {
        headers: {
            "content-type": "application/json",
        }
    });
}