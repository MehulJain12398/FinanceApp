// eslint-disable-next-line
import { Palette,PaletteColor } from "@mui/material/styles/createPalette";

declare module "@mui/material/styles/createPalette" {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface (remove this line if you don't have the rule enabled)
    interface PaletteColor {
        [key:number]:string;
    }

    interface Palette {
        tertiary : PaletteColor
    }
}

