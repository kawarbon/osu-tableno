import type { CalculatedArea, TabletDimensions } from "./types/tablet.ts";

const PLAYFIELD = { width: 512, height: 384 };

export function calculateOptimalArea(
    dimensions: TabletDimensions,
    percentage: number,
): CalculatedArea {
    const tabletArea = {
        width: dimensions.width * (percentage / 100),
        height: dimensions.height * (percentage / 100),
    };

    tabletArea.width = tabletArea.height * (4 / 3);
    tabletArea.width = Math.min(tabletArea.width, dimensions.width);

    const targetRatio = 4 / 3;
    const currentRatio = tabletArea.width / tabletArea.height;

    if (Math.abs(currentRatio - targetRatio) > 0.1) {
        tabletArea.width = tabletArea.height * targetRatio;
    }

    tabletArea.width = Math.min(tabletArea.width, dimensions.width);
    tabletArea.height = Math.min(tabletArea.height, dimensions.height);

    return {
        area: tabletArea,
        scaling: {
            screen: 1,
            playfield: {
                width: PLAYFIELD.width,
                height: PLAYFIELD.height,
            },
            effectiveWidth: PLAYFIELD.width,
            horizontalPixelsPerMM: (PLAYFIELD.width / tabletArea.width),
            verticalPixelsPerMM: (PLAYFIELD.height / tabletArea.height),
        },
    };
}
