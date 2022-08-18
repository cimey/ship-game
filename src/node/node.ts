import { Entity, Vector2D } from "@/utils";
import { NodeDrawComponent } from ".";

export class Node extends Entity {

  constructor(
    public Start: Vector2D,
    public End: Vector2D,
    public Index: Vector2D
  ) {
    super();
  }

  Awake() {
    this.AddComponent(new NodeDrawComponent(this));
    super.Awake();
  }

  public get Size(): Vector2D {
    return new Vector2D(
      this.End.x - this.Start.x,
      this.End.y - this.Start.y
    );
  }
}
