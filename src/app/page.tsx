import FormShadCn from "@/components/form-shadcn";
import { Asignatura } from "@/types";

async function getData(): Promise<Asignatura[]> {
    // Fetch data from your API here.
    return [
        {
            id: "728ed52f",
            amount: 100,
            status: "pending",
            email: "m@example.com",
        },
        // ...
    ];
}

export default async function Home() {
    const data = await getData();

    return (
        <div id="app">
            <h1 className="py-5 text-center text-4xl font-bold -tracking-wider md:text-5xl">
                Schedule Maker
            </h1>

            <main className="mx-auto mb-16 max-w-[1280px] px-10">
                <FormShadCn />
            </main>
        </div>
    );
}
