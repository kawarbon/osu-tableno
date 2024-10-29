import type { JSX } from "preact";
import { TABLETS } from "../utils/constants/tablets.ts";

interface TabletFormProps {
    selectedBrand: string;
    selectedModel: string;
    onBrandChange: (event: Event) => void;
    onModelChange: (model: string) => void;
}

export function TabletForm(
    { selectedBrand, selectedModel, onBrandChange, onModelChange }:
        TabletFormProps,
): JSX.Element {
    const selectClassName =
        "mt-1 block w-full rounded-lg border-gray-300 bg-gray-50 dark:bg-gray-700 shadow-sm transition-colors duration-200 ease-in-out focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:text-gray-200 dark:focus:border-blue-400 dark:focus:ring-blue-400 py-2.5 px-3";

    return (
        <>
            <fieldset className="relative rounded-lg border border-gray-200 dark:border-gray-600 px-4 pb-4 pt-2">
                <legend className="text-xs font-medium text-gray-500 dark:text-gray-400 px-1">
                    BRAND
                </legend>
                <select
                    value={selectedBrand}
                    onChange={onBrandChange}
                    className={selectClassName}
                >
                    <option value="" disabled>-</option>
                    {Object.keys(TABLETS).map((brand) => (
                        <option key={brand} value={brand}>
                            {brand.toUpperCase()}
                        </option>
                    ))}
                </select>
            </fieldset>

            <fieldset className="relative rounded-lg border border-gray-200 dark:border-gray-600 px-4 pb-4 pt-2">
                <legend className="text-xs font-medium text-gray-500 dark:text-gray-400 px-1">
                    MODEL
                </legend>
                <select
                    value={selectedModel}
                    onChange={(event): void => {
                        onModelChange(
                            (event.target as HTMLSelectElement).value,
                        );
                    }}
                    disabled={!selectedBrand}
                    className={`${selectClassName} disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                    <option value="" disabled>-</option>
                    {selectedBrand &&
                        Object.keys(TABLETS[selectedBrand] || {}).map((
                            model,
                        ) => (
                            <option key={model} value={model}>
                                {model}
                            </option>
                        ))}
                </select>
            </fieldset>
        </>
    );
}
