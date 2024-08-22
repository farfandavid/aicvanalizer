export const verifyRecaptcha = async (recaptchaResponse: string): Promise<boolean> => {
    const recaptchaURL = 'https://www.google.com/recaptcha/api/siteverify';
    const requestHeaders = {
        'Content-Type': 'application/x-www-form-urlencoded'
    };
    const requestBody = new URLSearchParams({
        secret: import.meta.env.RECAPTCHA_SECRET_KEY,
        response: recaptchaResponse
    });
    const response = await fetch(recaptchaURL, {
        method: "POST",
        headers: requestHeaders,
        body: requestBody.toString()
    });
    const responseData = await response.json()
        .catch((err) => {
            console.error(err);
            return { success: false }
        });
    return responseData.success;
}