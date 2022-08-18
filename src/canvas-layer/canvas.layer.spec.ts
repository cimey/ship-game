import { Canvas } from "@/utils";
import { CanvasLayer } from "./canvas.layer";

describe("<<<Canvas>>>", () => {
  it("should be created one", () => {
    const awakeSpy = jest.spyOn(Canvas.prototype, "Awake");

    expect(awakeSpy).toBeCalledTimes(0);

    const bg1 = CanvasLayer.Background;
    const bg2 = CanvasLayer.Background;

    expect(bg1).toEqual(bg2);
    expect(awakeSpy).toBeCalledTimes(1);
  });

  it('should create Foreground canvas only once', () => {
    const awakeSpy = jest.spyOn(Canvas.prototype, "Awake");

    expect(awakeSpy).not.toBeCalled();
    
    const canvas1 = CanvasLayer.Foreground
    const canvas2 = CanvasLayer.Foreground

    expect(canvas1).toBe(canvas2)
    expect(awakeSpy).toBeCalledTimes(1)
  })
});
