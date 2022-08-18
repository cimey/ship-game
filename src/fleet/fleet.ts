import { Settings } from "@/settings";
import { Ship } from "@/ship";
import { Team } from "@/team";
import { Entity } from "@/utils";

export class Fleet extends Entity {
  fleetSize = Settings.grid.ships.fleetSize;
  
  private _ships: Ship[] = [];
  constructor(public readonly team: Team) {
    super();
  }

  Awake(): void {
    super.Awake();
    this.InitShips();
  }

  Update(deltaTime: number): void {
    super.Update(deltaTime);

    this._ships.map((ship) => ship.Update(deltaTime));
  }

  private InitShips() {
    for (let index = 0; index < this.fleetSize; index++) {
      const ship = new Ship(this);
      this._ships.push(ship);
      ship.Awake();
    }
  }
}
