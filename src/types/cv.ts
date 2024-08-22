export interface CV {
    [key: string]: any;
    ats_compilance: Details;
    clarity_conciseness_writing: Details;
    clarity_format: Details;
    education: Details;
    experience: Details;
    grammar_spelling: Details;
    links_contact: Details;
    professional_tone: Details;
    soft_skills: Details;
    technical_language_usage: Details;
    technical_skills: Details;
}

export interface Details {
    feedback: string;
    score: number;
}
export const fieldsToCapitalizeEN = {
    ats_compilance: 'ATS Compilance',
    clarity_conciseness_writing: 'Clarity, Conciseness, Writing',
    clarity_format: 'Clarity, Format',
    education: 'Education',
    experience: 'Experience',
    grammar_spelling: 'Grammar, Spelling',
    links_contact: 'Links, Contact',
    professional_tone: 'Professional Tone',
    soft_skills: 'Soft Skills',
    technical_language_usage: 'Technical Language Usage',
    technical_skills: 'Technical Skills',
}
export const fieldsToCapitalizeES = {
    ats_compilance: 'Cumplimiento ATS',
    clarity_conciseness_writing: 'Claridad, Concisión, Escritura',
    clarity_format: 'Claridad, Formato',
    education: 'Educación',
    experience: 'Experiencia',
    grammar_spelling: 'Gramática, Ortografía',
    links_contact: 'Enlaces, Contacto',
    professional_tone: 'Tono Profesional',
    soft_skills: 'Habilidades Blandas',
    technical_language_usage: 'Uso de Lenguaje Técnico',
    technical_skills: 'Habilidades Técnicas',
}
