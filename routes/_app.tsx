import { Head } from "$fresh/runtime.ts";
import type { JSX } from "preact/jsx-runtime";

export default function App(
    { Component }: { Component: () => JSX.Element },
): JSX.Element {
    return (
        <>
            <Head>
                <link rel="stylesheet" href="/styles.css" />

                <link
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
                    rel="stylesheet"
                    type="text/css"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <Component />
        </>
    );
}
