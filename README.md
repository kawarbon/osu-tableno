# osu!tableno

A simple website that calculates a close-enough 4:3 tablet area mapped to your screen resolution.

See also:

- [Research on perfect Tablet Area Ratio](https://osu.ppy.sh/community/forums/topics/1246260?n=1)

## Usage

1. Select your tablet brand and model
2. Adjust percentage slider to find your optimal tablet area

Additionally, you can click `(i)` icon to understand logic behind calculations

## Testing

I have tested this using [OpenTabletDriver](https://github.com/OpenTabletDriver/OpenTabletDriver) and the following configuration, and those configurations worked for me, but they may not work for you:

- 🖥️ 1920x1080 (16:9)

- 🎮🪟 1440x1080 (4:3)

- 🎨 One by Wacom (CTL-472)

- ✅ Fullscreen mode

- ✅ Render at native resolution

- ✅ Map absolute raw input to the osu! window

> [!WARNING]
> If you have a multi-monitor setup, disable "Map absolute raw input to the osu! window". as @jamesbt365 pointed out, causes breaking. Don't know how, don't know why.

## Contributions

@jamesbt365 for telling me about osu!'s weird quirk regarding multi-monitor setup, various suggestions, and additions of MAAAAAAAANY Wacom tablets.
