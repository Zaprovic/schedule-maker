import { z } from "zod";

export const formSchema = z.object({
    nivel: z.string({
        required_error: "Por favor selecciona un nivel de estudios",
    }),
    facultad: z.string({
        required_error: "Por favor selecciona una facultad",
    }),
    carerra: z.string({
        required_error: "Por favor selecciona una carrera",
    }),
    tipologia: z.string().optional(),
});

export const subjectSchema = z.object({
    codigo: z.string(),
    asignatura: z.string(),
    creditos: z.number().min(1).max(15),
    tipologia: z.enum([
        "Fundamental Obligatoria",
        "Fundamental Optativa",
        "Disciplinar Obligatoria",
        "Disciplinar Optativa",
        "Trabajo de grado",
        "Nivelacion",
    ]),
});
