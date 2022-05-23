// src/Foo.ts
import { Color } from "three";
import pixelFont from "three-pixel-font";
var Foo = class extends pixelFont.PixelTextMesh {
  constructor() {
    super("test", {
      align: 0,
      vAlign: 0,
      fontFace: new pixelFont.PixelFontFace("pixelFonts/good_neighbors", 11, 16),
      color: new Color(1, 1, 1),
      letterSpacing: -1,
      strokeColor: new Color(0, 0, 0),
      scaleDownToPhysicalSize: true,
      screenSpace: false,
      constantSizeOnScreen: false,
      prescale: 1
    });
  }
};

// src/index.ts
var src_default = {
  Foo
};
export {
  src_default as default
};
//# sourceMappingURL=index.js.map
