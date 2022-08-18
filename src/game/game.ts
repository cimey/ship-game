import { Fleet } from "@/fleet";
import { Grid } from "@/grid";
import { Settings } from "@/settings";
import { Team } from "@/team";
import { Entity } from "@/utils";

export class Game extends Entity {
  private _lastTimestamp = 0;
  private entities: Entity[] = [];

  public get Entitites(): Entity[] {
    return this.entities;
  }

  constructor() {
    super();
  }

  public Awake(): void {
    super.Awake();

    this.entities.push(new Grid(), new Fleet(Team.A), new Fleet(Team.B));

    for (const entity of this.entities) {
      entity.Awake();
    }

    window.requestAnimationFrame(() => {
      // set initial timestamp
      this._lastTimestamp = Date.now();

      // start update loop
      this.Update();
    });
  }
  public Update(): void {
    const deltaTime = (Date.now() - this._lastTimestamp) / 1000;

    // update all components
    super.Update(deltaTime);

    for (const entity of this.entities) {
      entity.Update(this._lastTimestamp);
    }

    // update the timestamp
    this._lastTimestamp = Date.now();

    // Invoke on next frame
    window.requestAnimationFrame(() => this.Update());
  }
}
