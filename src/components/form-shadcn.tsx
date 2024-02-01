"use client";
import {
    careersData,
    facultiesData,
    levelData,
    typologyData,
} from "@/mocks/data";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Selector from "./selector";
import { Button } from "./ui/button";
import { Form, FormField } from "./ui/form";

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

export type formType = z.infer<typeof formSchema>;

const FormShadCn = () => {
    const form = useForm<formType>({
        resolver: zodResolver(formSchema),
    });

    const nivel = form.watch("nivel");
    const facultad = form.watch("facultad");
    const carrera = form.watch("carerra");

    const onSubmit = (data: formType) => {
        console.log(data);
    };

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="mx-auto flex max-w-[800px] flex-col gap-4 px-4"
            >
                <FormField
                    control={form.control}
                    name="nivel"
                    render={({ field }) => (
                        <Selector
                            placeholder="Estudios"
                            title="Selecciona tu nivel de estudios"
                            fieldValues={field.value}
                            onValueChange={field.onChange}
                            info={levelData}
                        />
                    )}
                />

                <FormField
                    control={form.control}
                    name="facultad"
                    render={({ field }) => (
                        <Selector
                            placeholder="Facultad"
                            title="Selecciona tu facultad"
                            fieldValues={field.value}
                            onValueChange={field.onChange}
                            info={facultiesData}
                            disabled={!nivel}
                        />
                    )}
                />

                <FormField
                    control={form.control}
                    name="carerra"
                    render={({ field }) => (
                        <Selector
                            placeholder="Carrera"
                            title="Selecciona tu carrera"
                            fieldValues={field.value}
                            onValueChange={field.onChange}
                            info={
                                careersData.find(
                                    (career) => career.label === facultad,
                                )?.careers
                            }
                            disabled={!facultad}
                        />
                    )}
                />

                <FormField
                    control={form.control}
                    name="tipologia"
                    render={({ field }) => (
                        <Selector
                            placeholder="Tipología"
                            title="¿Qué tipología estás buscando?"
                            fieldValues={field.value}
                            onValueChange={field.onChange}
                            info={typologyData}
                            disabled={!carrera}
                        />
                    )}
                />
                <Button
                    variant="default"
                    type="submit"
                    className="bg-sky-600 transition-transform hover:scale-[1.01]"
                >
                    Mostar resultados
                </Button>
            </form>
        </Form>
    );
};

export default FormShadCn;
