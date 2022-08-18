import { IComponent } from ".";
import { IAwake,IUpdate} from "..";

type constr<T> = { new (...args: any[]): T };

export abstract class Entity implements IUpdate,IAwake {

  Awake(): void { 
      for (const component of this._components) {
          component.Awake();
      }
  }

  Update(deltaTime: number): void {
    for(const component of this._components){
        component.Update(deltaTime)
      }
  }
  protected _components: IComponent[] = [];

  public get Components(): IComponent[] {
    return this._components;
  }

  public AddComponent(component: IComponent): void {
    component.Entity = this;
    this._components.push(component);
  }

  public GetComponent<C extends IComponent>(constr: constr<C>): C {
    for (const component of this._components) {
      if (component instanceof constr) return component;
    }

    throw new Error(`the type ${typeof constr} could not found in list`);
  }

  public RemoveComponent<C extends IComponent>(constr: constr<C>): void {
    let idx: number | undefined;
    for (let index = 0; index < this._components.length; index++) {
      const element = this._components[index];

      if (element instanceof constr) {
        idx = index;
        console.log(idx)
        break;
      }
    }
    if (idx) {
      this._components[idx].Entity = null;
      this._components.splice(idx, 1);
    }
  }

  public HasComponent<C extends IComponent>(constr: constr<C>): boolean {
    for (const component of this._components) {
      if (component instanceof constr) return true;
    }

    return false;
  }
}
