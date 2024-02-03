"use client";
import { formStore } from "@/context/form-context";
import {
    careersData,
    facultiesData,
    levelData,
    typologyData,
} from "@/mocks/data";
import { formSchema } from "@/schemas/formSchema";
import { formType } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Selector from "./selector";
import { Button } from "./ui/button";
import { Form, FormField } from "./ui/form";

const FormShadCn = () => {
    const { isSubmitted, setIsSubmitted } = formStore((state) => state);
    const form = useForm<formType>({
        resolver: zodResolver(formSchema),
    });

    const { isSubmitSuccessful } = form.formState;

    const nivel = form.watch("nivel");
    const facultad = form.watch("facultad");
    const carrera = form.watch("carerra");

    const onSubmit = (data: formType) => {
        setIsSubmitted(isSubmitSuccessful);

        console.log({
            data,
            isSubmitSuccessful,
        });
    };

    return (
        <>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="flex flex-col gap-8"
                >
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
                        <FormField
                            control={form.control}
                            name="nivel"
                            render={({ field, fieldState: { error } }) => (
                                <Selector
                                    placeholder="Estudios"
                                    title="Selecciona tu nivel de estudios"
                                    fieldValues={field.value}
                                    onValueChange={field.onChange}
                                    info={levelData}
                                    error={error}
                                />
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="facultad"
                            render={({ field, fieldState: { error } }) => (
                                <Selector
                                    placeholder="Facultad"
                                    title="Selecciona tu facultad"
                                    fieldValues={field.value}
                                    onValueChange={field.onChange}
                                    info={facultiesData}
                                    disabled={!nivel}
                                    error={error}
                                />
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="carerra"
                            render={({ field, fieldState: { error } }) => (
                                <Selector
                                    placeholder="Carrera"
                                    title="Selecciona tu carrera"
                                    fieldValues={field.value}
                                    onValueChange={field.onChange}
                                    info={
                                        careersData.find(
                                            (career) =>
                                                career.label === facultad,
                                        )?.careers
                                    }
                                    disabled={!facultad}
                                    error={error}
                                />
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="tipologia"
                            render={({ field, fieldState: { error } }) => (
                                <Selector
                                    placeholder="Tipología"
                                    title="¿Qué tipología estás buscando?"
                                    fieldValues={field.value}
                                    onValueChange={field.onChange}
                                    info={typologyData}
                                    disabled={!carrera}
                                    error={error}
                                />
                            )}
                        />
                    </div>

                    <Button
                        variant="default"
                        type="submit"
                        className="bg-sky-600 transition-transform hover:scale-[1.01]"
                    >
                        Mostrar resultados
                    </Button>
                </form>
            </Form>
            {/* {isSubmitSuccessful && <Component />} */}
        </>
    );
};

export default FormShadCn;
