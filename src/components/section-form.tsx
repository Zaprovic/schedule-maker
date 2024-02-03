"use client";

import { formStore } from "@/context/form-context";
import FormShadCn from "./form-shadcn";

const SectionForm = () => {
    const { isSubmitted } = formStore((state) => state);
    return (
        <section>
            <section className="mx-auto my-6 max-w-[1200px] rounded-lg bg-neutral-800 px-10 py-20 shadow-xl shadow-neutral-900">
                <FormShadCn />
            </section>

            {isSubmitted && (
                <div className="text-xl font-bold -tracking-wider">
                    Submitted succesfully! &nbsp;
                </div>
            )}
        </section>
    );
};

export default SectionForm;
