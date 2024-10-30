import { useSignal } from "@preact/signals";
import type { JSX } from "preact";
import { useEffect } from "preact/hooks";
import { TabletForm } from "../components/TabletForm.tsx";
import { TabletResultDisplay } from "../components/TabletResultDisplay.tsx";
import TabletSlider from "../components/TabletSlider.tsx";
import { calculateOptimalArea } from "../utils/calculations.ts";
import { TABLETS } from "../utils/constants/tablets.ts";

export default function TabletCalculator(): JSX.Element {
    const selectedBrand = useSignal("");
    const selectedModel = useSignal("");
    const areaPercentage = useSignal(50);
    const calculationResult = useSignal("");

    const handleBrandChange = (event: Event): void => {
        const target = event.target as HTMLSelectElement;
        selectedBrand.value = target.value;
        selectedModel.value = "";
    };

    const handleCalculate = (): void => {
        if (!selectedBrand.value || !selectedModel.value) {
            return;
        }

        const tablet = TABLETS[selectedBrand.value]?.[selectedModel.value];
        if (!tablet) {
            calculationResult.value = "Invalid tablet selection.";
            return;
        }

        const result = calculateOptimalArea(
            tablet,
            areaPercentage.value,
        );

        calculationResult.value =
            `${result.area.width.toFixed(1)} x ${
                result.area.height.toFixed(1)
            } mm\n` +
            `px/mm: ${result.scaling.horizontalPixelsPerMM.toFixed(1)} (H), ${
                result.scaling.verticalPixelsPerMM.toFixed(1)
            } (V)`;
    };

    useEffect(() => {
        if (selectedBrand.value && selectedModel.value) {
            handleCalculate();
        }
    }, [selectedBrand.value, selectedModel.value, areaPercentage.value]);

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

            <TabletResultDisplay result={calculationResult.value} />
        </div>
    );
}
