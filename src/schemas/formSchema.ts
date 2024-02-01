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
