import type { JSX } from "preact/jsx-runtime";

interface TabletSliderProps {
    value: number;
    onChange: (value: number) => void;
}

export default function TabletSlider(
    { value, onChange }: TabletSliderProps,
): JSX.Element {
    return (
        <fieldset className="relative rounded-lg border border-gray-200 dark:border-gray-600 px-4 pb-4 pt-2">
            <legend className="text-xs font-medium text-gray-500 dark:text-gray-400 px-1">
                AREA PERCENTAGE
            </legend>
            <div className="relative mt-8 mb-4">
                <output
                    style={{
                        left: `calc(${value}% - 1.25rem)`,
                        transform: "translateX(0)",
                    }}
                    className="absolute -top-6 bg-blue-600 dark:bg-blue-500 text-white px-2 py-1 rounded text-sm min-w-[3rem] text-center"
                >
                    {value}%
                </output>
                <input
                    type="range"
                    min="1"
                    max="100"
                    value={value}
                    onInput={(event): void => {
                        onChange(
                            Number((event.target as HTMLInputElement).value),
                        );
                    }}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 accent-blue-600 dark:accent-blue-500"
                />
                {
                    /* <div className="mt-1 grid grid-cols-3 text-xs text-gray-500 dark:text-gray-400">
                    <span className="text-left">1%</span>
                    <span className="text-center">50%</span>
                    <span className="text-right">100%</span>
                </div> */
                }
            </div>
        </fieldset>
    );
}
