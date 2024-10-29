import type { JSX } from "preact";
import type { AspectRatioMode } from "../utils/types/tablet.ts";

interface TabletResolutionSelectProps {
    value: string;
    mode: AspectRatioMode;
    onChange: (resolution: string) => void;
}

function getResolutions(mode: AspectRatioMode): string[] {
    return mode === "standard"
        ? [
            "640x480",
            "800x600",
            "1024x768",
            "1152x864",
            "1280x960",
            "1400x1050",
            "1440x1080",
            "1600x1200",
            "1920x1440",
            "2048x1536",
        ]
        : [
            "1024x576",
            "1280x720",
            "1366x768",
            "1600x900",
            "1920x1080",
            "2560x1440",
            "3840x2160",
        ];
}

export function TabletResolutionSelect(
    { value, mode, onChange }: TabletResolutionSelectProps,
): JSX.Element {
    const selectClassName =
        "mt-1 block w-full rounded-lg border-gray-300 bg-gray-50 dark:bg-gray-700 shadow-sm transition-colors duration-200 ease-in-out focus:border-blue-500 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:text-gray-200 dark:focus:border-blue-400 dark:focus:ring-blue-400 py-2.5 px-3";

    return (
        <fieldset className="relative rounded-lg border border-gray-200 dark:border-gray-600 px-4 pb-4 pt-2">
            <legend className="text-xs font-medium text-gray-500 dark:text-gray-400 px-1">
                RESOLUTION
            </legend>
            <select
                value={value}
                onChange={(event): void => {
                    const target = event.target as HTMLSelectElement;
                    onChange(target.value);
                }}
                className={selectClassName}
            >
                <option value="" disabled>-</option>
                {getResolutions(mode).map((resolution) => (
                    <option key={resolution} value={resolution}>
                        {resolution}
                    </option>
                ))}
            </select>
        </fieldset>
    );
}
