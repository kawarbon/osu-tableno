import type {
    CalculatedArea,
    ScreenResolution,
    TabletDimensions,
} from "./types/tablet.ts";

const BASE_OSU_RESOLUTION = { width: 640, height: 480 };
const PLAYFIELD = { width: 512, height: 384 };

export function calculateOptimalArea(
    dimensions: TabletDimensions,
    resolution: ScreenResolution,
    percentage: number,
): CalculatedArea {
    const screenScaling = resolution.height / BASE_OSU_RESOLUTION.height;
    const playfield = {
        width: PLAYFIELD.width * screenScaling,
        height: PLAYFIELD.height * screenScaling,
    };

    const screenUsageRatio = resolution.height / playfield.width * 100;
    const effectivePlayfieldWidth = resolution.width *
        (screenUsageRatio / 100);

    const tabletArea = {
        width: dimensions.width * (percentage / 100),
        height: dimensions.height * (percentage / 100),
    };

    const targetRatio = 4 / 3;
    const currentRatio = tabletArea.width / tabletArea.height;

    if (Math.abs(currentRatio - targetRatio) > 0.1) {
        tabletArea.width = tabletArea.height * targetRatio;
    }

    return {
        area: tabletArea,
        scaling: {
            screen: screenScaling,
            playfield: playfield,
            effectiveWidth: effectivePlayfieldWidth,
            horizontalPixelsPerMM: (PLAYFIELD.width / tabletArea.width),
            verticalPixelsPerMM: (PLAYFIELD.height / tabletArea.height),
        },
    };
}
