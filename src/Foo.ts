import { Color } from 'three'
import pixelFont from 'three-pixel-font'

export default class Foo extends pixelFont.PixelTextMesh {
  constructor(
  ) {
    super('test', {
      align: 0,
      vAlign: 0,
      // fontFace: new PixelFontFace('pixelFonts/cdogs_font_7x8', 7, 8),
      fontFace: new pixelFont.PixelFontFace('pixelFonts/good_neighbors', 11, 16),
      color: new Color(1, 1, 1),
      letterSpacing: -1,
      strokeColor: new Color(0, 0, 0),
      scaleDownToPhysicalSize: true,
      screenSpace: false,
      constantSizeOnScreen: false,
      prescale: 1
    })
  }
}
