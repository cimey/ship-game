import { IAwake, IUpdate } from "..";
import { Entity } from "./entity";

export interface IComponent extends IUpdate, IAwake {
  Entity: Entity | null;
}
