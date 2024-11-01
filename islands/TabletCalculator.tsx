import { useSignal } from "@preact/signals";
import type { JSX } from "preact";
import { useEffect } from "preact/hooks";
import TabletAreaVisualiser from "../components/TabletAreaVisualiser.tsx";
import { TabletForm } from "../components/TabletForm.tsx";
import { TabletResultDisplay } from "../components/TabletResultDisplay.tsx";
import TabletSlider from "../components/TabletSlider.tsx";
import { TABLETS } from "../utils/constants/tablets.ts";

export default function TabletCalculator(): JSX.Element {
    const selectedBrand = useSignal("");
    const selectedModel = useSignal("");
    const areaPercentage = useSignal(50);
    const calculationResult = useSignal("");
    const displaySize = useSignal({ width: 0, height: 0 });
    const currentArea = useSignal({ width: 0, height: 0 });

    useEffect(() => {
        displaySize.value = {
            width: globalThis.screen.width,
            height: globalThis.screen.height,
        };
    }, []);

    const handleBrandChange = (event: Event): void => {
        const target = event.target as HTMLSelectElement;
        selectedBrand.value = target.value;
        selectedModel.value = "";
    };

    const isSliderEnabled = (): boolean => {
        return selectedBrand.value !== "" && selectedModel.value !== "";
    };

    const handleCalculate = (): void => {
        if (!selectedBrand.value || !selectedModel.value) {
            return;
        }

        const tablet = TABLETS[selectedBrand.value]?.[selectedModel.value];
        if (!tablet) {
            calculationResult.value = "invalid tablet selection";
            return;
        }

        // full area if 100%
        if (areaPercentage.value === 100) {
            currentArea.value = {
                width: tablet.width,
                height: tablet.height,
            };

            calculationResult.value =
                `${tablet.width.toFixed(1)} x ${
                    tablet.height.toFixed(1)
                } mm\n` +
                `px/mm: ${
                    (displaySize.value.width / tablet.width).toFixed(1)
                } (H), ${
                    (displaySize.value.height / tablet.height).toFixed(1)
                } (V)`;
            return;
        }

        const scale = areaPercentage.value / 100;
        const baseWidth = tablet.width;
        const targetHeight = baseWidth * (3 / 4); // 4:3 aspect ratio

        currentArea.value = {
            width: baseWidth * scale,
            height: targetHeight * scale,
        };

        const scaledWidth = baseWidth * scale;
        const scaledHeight = targetHeight * scale;

        calculationResult.value =
            `${scaledWidth.toFixed(1)} x ${scaledHeight.toFixed(1)} mm\n` +
            `px/mm: ${
                (displaySize.value.width / scaledWidth).toFixed(1)
            } (H), ${(displaySize.value.height / scaledHeight).toFixed(1)} (V)`;
    };

    useEffect(() => {
        if (selectedBrand.value && selectedModel.value) {
            handleCalculate();
        }
    }, [selectedBrand.value, selectedModel.value, areaPercentage.value]);

    return (
        <div class="space-y-6">
            <TabletAreaVisualiser
                width={currentArea.value.width}
                height={currentArea.value.height}
            />

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
                disabled={!isSliderEnabled()}
            />

            <TabletResultDisplay result={calculationResult.value} />
        </div>
    );
}
