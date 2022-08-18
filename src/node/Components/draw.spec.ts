import { NodeDrawComponent } from "./node.draw";
import { Node } from "../index";
import { Vector2D } from "@/utils";
import { CanvasLayer } from "@/canvas-layer/canvas.layer";

describe(">>> Node Draw Component", () => {
  let comp: NodeDrawComponent;
  beforeEach(() => {
    comp = new NodeDrawComponent(
      new Node(new Vector2D(0, 0), new Vector2D(1, 1), new Vector2D(0, 0))
    );
  });

  it('should cleanup and draw rect every frame', () => {
    const spyClearRect = jest.spyOn(CanvasLayer.Background, 'ClearRect')
    const spyFillRect = jest.spyOn(CanvasLayer.Background, 'FillRect')

    expect(spyClearRect).not.toBeCalled()
    expect(spyFillRect).not.toBeCalled()

    comp.Update(0)

    expect(spyClearRect).toBeCalled()
    expect(spyFillRect).toBeCalled()
  })
});
