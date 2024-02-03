import { z } from "zod";
import { formSchema } from "./schemas/formSchema";

export type formType = z.infer<typeof formSchema>;

type Payment = {
    id: string;
    amount: number;
    status: "pending" | "processing" | "success" | "failed";
    email: string;
};
