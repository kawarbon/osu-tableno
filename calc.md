# osu! Playfield and Tablet Area Optimisation Guide

## Playfield Overview

The playfield is the active gameplay area where hit objects appear. It uses resolution-independent units called "game pixels" or "osu! pixels", calibrated to a 640x480 base resolution.

### Key Coordinates

- **Playfield Boundaries**
  - Top left: (0, 0)
  - Bottom right: (512, 384)
  - Centre: (256, 192)

### Grid System

- Editor grid dimensions: 512x384 game pixels
- Playfield offset: 8 game pixels below window centre

### Resolution Considerations

#### 4:3 Aspect Ratio

- Interface elements partially cover playfield
- Screen coordinates: (0, 0) to (640, 480)
- Screen centre: (320, 240)
- In-bounds dimensions: 640x480

#### 16:9 Aspect Ratio

- Screen coordinates: (-107, 0) to (747, 480)
- Screen centre: (320, 240)
- In-bounds dimensions: 854x480

### Storyboard Conversion

- To convert playfield coordinates to storyboard:
  - Add offset vector (64, 56) to playfield coordinates
  - This aligns with top-left corner in storyboard space

## Tablet Area Optimisation

### Identified Problem

- Players struggle more with left-right movements than up-down
- Performance improves with 4:3 tablet area ratio

### Technical Analysis

#### Display Parameters

- Game window: 16:9 (1920x1080)
- Gameplay area: 4:3 (1440x1080)

#### Optimal Ratio Calculation

- Height ratio: 1080/1440 = 75%
- Ideal mapping ratio: 75% of 16:9 = 12:9 = 4:3

### Professional Player Settings

1. **WhiteCat**
   - Ratio: 4.23:3 (12404:8797 LPI)
   - Hardware: Wacom CTH480 (2540 LPI)
   - Area calculations:
     - Width: 15199 - 2795 = 12404
     - Height: 9324 - 527 = 8797

2. **Mrekk**
   - Ratio: 4.4:3

### Optimisation Recommendations

1. For 16:9 monitors, utilise 4:3 tablet area ratio
2. Calculate width: (Height ÷ 3) × 4
3. Maintain existing height, adjust width only
4. This preserves muscle memory while optimising movement

### Technical Reasoning

The 4:3 ratio compensates for the game's internal 4:3 playfield within the 16:9 window, providing:

- More natural cursor movement
- Improved directional consistency
- Correction for oval-shaped spinning patterns
