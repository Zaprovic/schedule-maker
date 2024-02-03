import { z } from "zod";
import { formSchema, subjectSchema } from "./schemas/formSchema";

export type formType = z.infer<typeof formSchema>;

export type Asignatura = {
    id: string;
    amount: number;
    status: "pending" | "processing" | "success" | "failed";
    email: string;
};

export type Materia = z.infer<typeof subjectSchema>;
