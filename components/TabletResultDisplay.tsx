import type { JSX } from "preact";

interface TabletResultDisplayProps {
    result: string;
}

export function TabletResultDisplay(
    { result }: TabletResultDisplayProps,
): JSX.Element {
    if (!result) {
        return <></>;
    }

    const lines = result.split("\n");
    const IsNotOptimal = result.includes("is not optimal");

    return (
        <div
            class={`mt-6 p-4 text-center font-medium rounded-lg ${
                IsNotOptimal
                    ? "bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400 flex items-center justify-center gap-2"
                    : "bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400"
            }`}
        >
            <i
                class={`fas ${
                    IsNotOptimal ? "fa-exclamation-triangle" : "fa-check-circle"
                } mr-2`}
            >
            </i>
            {lines.map((line, index) => <div key={index}>{line}</div>)}
        </div>
    );
}
