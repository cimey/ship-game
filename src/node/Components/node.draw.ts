import { CanvasLayer } from "@/canvas-layer/canvas.layer";
import { Color, IComponent } from "@/utils";
import { Node } from "..";

export class NodeDrawComponent implements IComponent {
  constructor(public Entity: Node) {
  }

  Update(deltaTime: number): void {
    this.Clear() 
    this.Draw() 
  }
  Awake(): void {
    this.Clear();
  }

  private Draw(): void {
    CanvasLayer.Background.FillRect(
      this.Entity.Start,
      this.Entity.Size,
      new Color(245,0,0,1)
    );
  }

  private Clear(): void {
    CanvasLayer.Background.ClearRect(this.Entity.Start, this.Entity.Size)
  }
}
