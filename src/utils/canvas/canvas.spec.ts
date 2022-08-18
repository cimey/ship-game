import { Canvas } from "./canvas";
import { Color, Vector2D } from "@/utils";

describe(">>> Canvas", () => {
  const size = new Vector2D(100, 100);
  let canvas: Canvas;

  beforeEach(() => {
    canvas = new Canvas(size);
  });

  it("should create and attach canvas to the DOM when awakens", () => {
    const createElmSpy = jest.spyOn(document, "createElement");
    const appendChildSpy = jest.spyOn(document.body, "appendChild");

    expect(createElmSpy).not.toBeCalled();
    expect(appendChildSpy).not.toBeCalled();

    canvas.Awake();

    expect(createElmSpy).toBeCalled();
    expect(appendChildSpy).toBeCalled();
  });

  describe(">> API", () => {
    beforeEach(() => {
      canvas.Awake();
    });

    it("should draw and fill circle", () => {
      const arcSpy = jest.spyOn(canvas.Context, "arc");
      const fillSpy = jest.spyOn(canvas.Context, "fill");
      const beginPathSpy = jest.spyOn(canvas.Context, "beginPath");

      const center = new Vector2D(0, 0);
      const radius = 1;
      const color = new Color(255, 255, 255, 1);
      canvas.FillCircle(center, radius, color);

      expect(beginPathSpy).toBeCalled();
      expect(arcSpy).toBeCalledWith(center.x, center.y, 1, 0, Math.PI * 2);
      expect(fillSpy).toBeCalled();
      expect(canvas.Context.fillStyle).toBe("#ffffff");
    });

    it("should draw and fill the rect", () => {
      const start = new Vector2D(0, 0);
      const size = new Vector2D(10, 10);
      const color = new Color(255, 255, 255, 1);

      const beginPathSpy = jest.spyOn(canvas.Context, "beginPath");
      const rectSpy = jest.spyOn(canvas.Context, "rect");
      const fillSpy = jest.spyOn(canvas.Context, "fill");

      canvas.FillRect(start, size, color);

      expect(beginPathSpy).toBeCalled();
      expect(rectSpy).toBeCalledWith(start.x, start.y, size.x, size.y);
      expect(fillSpy).toBeCalled();
      expect(canvas.Context.fillStyle).toBe("#ffffff");
    });

    it("should clear the rect", () => {
      const start = new Vector2D(0, 0);
      const size = new Vector2D(10, 10);

      const spy = jest.spyOn(canvas.Context, "clearRect");
      expect(spy).not.toBeCalled();

      canvas.ClearRect(start, size);

      expect(spy).toBeCalledWith(start.x, start.y, size.x, size.y);
    });

    it('should set canvas style', ()=> {

      const zIndex = '1';

      canvas.SetStyle({ zIndex });

      expect(canvas.Element.style.zIndex).toBe<string>(zIndex);
    }); 
    
  });
});
