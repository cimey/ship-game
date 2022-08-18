import { Settings } from "@/settings";
import { Canvas, Vector2D } from "@/utils";

export class CanvasLayer {
  private constructor() {}

  private static _background: Canvas;
  private static _foreground: Canvas;

  public static get Background(): Canvas {
    if (!this._background) {
      this._background = this.InitCanvas({ zIndex : '0'});
    }

    return this._background;
  }

  public static get Foreground(): Canvas {
    if (!this._foreground) {
      this._foreground = this.InitCanvas({ zIndex : '1'});
    }

    return this._foreground;
  }

  private static InitCanvas(style: Partial<CSSStyleDeclaration>): Canvas {
    const size =
      (Settings.grid.nodeSize + Settings.grid.nodeOffset) *
      Settings.grid.dimension;
    var vector = new Vector2D(size, size);
    const canvas = new Canvas(vector);

    canvas.SetStyle(style);
    canvas.Awake();

    return canvas;
  }
}
