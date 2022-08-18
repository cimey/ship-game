import { Entity, IComponent } from "@/utils";



export class ShipDrawComponent implements IComponent{
    Entity: Entity | null;
    Update(deltaTime: number): void {
        throw new Error("Method not implemented.");
    }
    
    Awake(): void {
        throw new Error("Method not implemented.");
    }

}