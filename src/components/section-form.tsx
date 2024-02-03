"use client";

import { formStore } from "@/context/form-context";
import { subjectData } from "@/mocks/data";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import FormShadCn from "./form-shadcn";

const SectionForm = () => {
    const { isSubmitted } = formStore((state) => state);
    return (
        <section className="mx-auto max-w-[1280px] px-10">
            <section className=" my-6  rounded-lg bg-neutral-800 px-10 py-20 shadow-xl shadow-neutral-900">
                <FormShadCn />
            </section>

            {true && <DataTable data={subjectData} cols={columns} />}
        </section>
    );
};

export default SectionForm;
