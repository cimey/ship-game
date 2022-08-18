import { Entity, IComponent } from ".";

export class E extends Entity {}

export class C1 implements IComponent {
  public Entity: E = new E();
  Awake(): void {}
  public Update(deltaTime: number): void {}
}

export class C2 implements IComponent {
  public Entity: E = new E();
  Awake(): void {}
  public Update(deltaTime: number): void {}
}

export class C3 implements IComponent {
  public Entity: E = new E();
  Awake(): void {}
  public Update(deltaTime: number): void {}
}
