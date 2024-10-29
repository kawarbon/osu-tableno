import type { JSX } from "preact";
import type { AspectRatioMode } from "../utils/types/tablet.ts";

interface TabletModeSelectProps {
    value: AspectRatioMode;
    onChange: (mode: AspectRatioMode) => void;
}

export function TabletModeSelect(
    { value, onChange }: TabletModeSelectProps,
): JSX.Element {
    const selectClassName =
        "mt-1 block w-full rounded-lg border-gray-300 bg-gray-50 dark:bg-gray-700 shadow-sm transition-colors duration-200 ease-in-out focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:text-gray-200 dark:focus:border-blue-400 dark:focus:ring-blue-400 py-2.5 px-3";

    return (
        <fieldset className="relative rounded-lg border border-gray-200 dark:border-gray-600 px-4 pb-4 pt-2">
            <legend className="text-xs font-medium text-gray-500 dark:text-gray-400 px-1">
                MODE
            </legend>
            <select
                value={value}
                onChange={(event): void => {
                    const target = event.target as HTMLSelectElement;
                    onChange(target.value as AspectRatioMode);
                }}
                className={selectClassName}
            >
                <option value="standard">Standard (4:3)</option>
                <option value="widescreen">Widescreen (16:9)</option>
            </select>
        </fieldset>
    );
}
