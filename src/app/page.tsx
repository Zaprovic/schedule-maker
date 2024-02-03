import SectionForm from "@/components/section-form";
import { Payment } from "@/types";

async function getData(): Promise<Payment[]> {
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

            <SectionForm />

            {/* <div className="container mx-auto max-w-[1200px] py-10">
                <DataTable cols={columns} data={paymentData} />
            </div> */}
        </div>
    );
}
