import { useSignal } from "@preact/signals";
import type { JSX } from "preact";
import { useEffect } from "preact/hooks";
import { TabletForm } from "../components/TabletForm.tsx";
import { TabletModeSelect } from "../components/TabletModeSelect.tsx";
import { TabletResolutionSelect } from "../components/TabletResolutionSelect.tsx";
import { TabletResultDisplay } from "../components/TabletResultDisplay.tsx";
import TabletSlider from "../components/TabletSlider.tsx";
import { calculateOptimalArea } from "../utils/calculations.ts";
import { TABLETS } from "../utils/constants/tablets.ts";
import type {
    AspectRatioMode,
    ScreenResolution,
} from "../utils/types/tablet.ts";

export default function TabletCalculator(): JSX.Element {
    const selectedBrand = useSignal("");
    const selectedModel = useSignal("");
    const areaPercentage = useSignal(50);
    const selectedMode = useSignal<AspectRatioMode>("standard");
    const selectedResolution = useSignal("");
    const calculationResult = useSignal("");

    const handleBrandChange = (event: Event): void => {
        const target = event.target as HTMLSelectElement;
        selectedBrand.value = target.value;
        selectedModel.value = "";
    };

    const handleCalculate = (): void => {
        if (
            !selectedBrand.value || !selectedModel.value ||
            !selectedResolution.value
        ) {
            return;
        }

        const [screenWidth, screenHeight] = selectedResolution.value.split("x")
            .map(Number);
        const screenRes: ScreenResolution = {
            width: screenWidth ?? 640,
            height: screenHeight ?? 480,
        };
        const tablet = TABLETS[selectedBrand.value]?.[selectedModel.value];
        if (!tablet) {
            calculationResult.value = "Invalid tablet selection.";
            return;
        }

        const result = calculateOptimalArea(
            tablet,
            screenRes,
            areaPercentage.value,
        );
        const currentRatio = (result.area.width / result.area.height).toFixed(
            2,
        );
        const recommendedWidth = (result.area.height * 4 / 3).toFixed(1);

        calculationResult.value = `${
            Math.abs(Number(currentRatio) - 4 / 3) > 0.1
                ? `${currentRatio}:3 is not optimal for osu!\n` +
                    `${result.area.width.toFixed(1)} x ${
                        result.area.height.toFixed(1)
                    } mm\n` +
                    `${recommendedWidth} mm for 4:3\n`
                : `${result.area.width.toFixed(1)} x ${
                    result.area.height.toFixed(1)
                } mm\n`
        }px/mm: ${result.scaling.horizontalPixelsPerMM.toFixed(1)} (H), ${
            result.scaling.verticalPixelsPerMM.toFixed(1)
        } (V)`;
    };

    useEffect(() => {
        if (
            selectedBrand.value && selectedModel.value &&
            selectedResolution.value
        ) {
            handleCalculate();
        }
    }, [
        selectedBrand.value,
        selectedModel.value,
        selectedResolution.value,
        areaPercentage.value,
    ]);

    return (
        <div class="space-y-6">
            <div class="grid grid-cols-2 gap-4">
                <TabletForm
                    selectedBrand={selectedBrand.value}
                    selectedModel={selectedModel.value}
                    onBrandChange={handleBrandChange}
                    onModelChange={(model: string): void => {
                        selectedModel.value = model;
                    }}
                />
            </div>

            <TabletSlider
                value={areaPercentage.value}
                onChange={(value: number): void => {
                    areaPercentage.value = value;
                }}
            />

            <div class="grid grid-cols-2 gap-4">
                <TabletModeSelect
                    value={selectedMode.value}
                    onChange={(mode: AspectRatioMode): void => {
                        selectedMode.value = mode;
                        selectedResolution.value = "";
                    }}
                />

                <TabletResolutionSelect
                    value={selectedResolution.value}
                    mode={selectedMode.value}
                    onChange={(resolution: string): void => {
                        selectedResolution.value = resolution;
                    }}
                />
            </div>

            <TabletResultDisplay result={calculationResult.value} />
        </div>
    );
}
