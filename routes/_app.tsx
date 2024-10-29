import { Head } from "$fresh/runtime.ts";
import type { JSX } from "preact/jsx-runtime";

export default function App(
    { Component }: { Component: () => JSX.Element },
): JSX.Element {
    return (
        <>
            <Head>
                <link rel="stylesheet" href="/styles.css" />

                {/* https://fa.hung1001.com/ */}
                <link
                    href="https://cdn.jsdelivr.net/gh/hung1001/font-awesome-pro@4cac1a6/css/all.css"
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
