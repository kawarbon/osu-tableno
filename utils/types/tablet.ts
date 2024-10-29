export interface TabletDimensions {
    width: number;
    height: number;
}

export interface TabletBrands {
    [key: string]: {
        [key: string]: TabletDimensions;
    };
}

export interface ScreenResolution {
    width: number;
    height: number;
}

export interface CalculatedArea {
    area: TabletDimensions;
    scaling: {
        screen: number;
        playfield: {
            width: number;
            height: number;
        };
        effectiveWidth: number;
        horizontalPixelsPerMM: number;
        verticalPixelsPerMM: number;
    };
}

export type AspectRatioMode = "standard" | "widescreen";
