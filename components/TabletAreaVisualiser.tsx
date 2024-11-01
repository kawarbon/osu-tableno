import type { JSX } from "preact";

interface TabletAreaVisualiserProps {
    width: number;
    height: number;
}

export default function TabletAreaVisualiser(
    { width, height }: TabletAreaVisualiserProps,
): JSX.Element {
    return (
        <div class="flex justify-center items-center">
            <div class="relative w-[400px] h-[225px] bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden">
                <div
                    class="absolute inset-0"
                    style={{
                        backgroundImage:
                            "linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)",
                        backgroundSize: "12.5px 12.5px", // 400/32, 225/18
                    }}
                >
                </div>

                <div
                    class="absolute bg-blue-500/50 animate-pulse rounded"
                    style={{
                        width: `${width * 2}px`,
                        height: `${height * 2}px`,
                        left: "50%",
                        top: "50%",
                        transform: "translate(-50%, -50%)",
                    }}
                >
                </div>
            </div>
        </div>
    );
}
