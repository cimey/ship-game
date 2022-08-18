import { IComponent } from "./component.h";
import { Entity } from "./entity";
import { C1, C2, C3, E } from "./models.h";

describe(">>>> Entity <<<<", () => {
  let e: E;
  const c1 = new C1();
  const c2 = new C2();
  const c3 = new C3();

  beforeEach(() => {
    e = new E();
  });

  it("hascomponent should return false", () => {
    expect(e.HasComponent(C1)).toEqual(false);
    expect(e.HasComponent(C2)).toEqual(false);
    expect(e.HasComponent(C3)).toEqual(false);
  });

  it("has component should return false if component added to entity", () => {
    e.AddComponent(c1);
    e.AddComponent(c2);
    e.AddComponent(c3);

    expect(e.HasComponent(C1)).toEqual(true);
    expect(e.HasComponent(C2)).toEqual(true);
    expect(e.HasComponent(C3)).toEqual(true);
  });

  it("get component should throw exception when there is no component on entity", () => {
    expect(e.HasComponent(C1)).toEqual(false);
    expect(() => e.GetComponent(C1)).toThrow();
  });

  it("should add, remove, get, and check components", () => {
    // --- ADD --- //
    expect(e.Components.length).toBe(0);
    e.AddComponent(c1);
    e.AddComponent(c2);
    e.AddComponent(c3);

    expect(e.Components.length).toBe(3);
    expect(e.Components[0]).toBe(c1);
    expect(e.Components[1]).toBe(c2);
    expect(e.Components[2]).toBe(c3);

    e.RemoveComponent(C2);
    expect(e.Components.length).toBe(2);
    expect(e.Components[0]).toBe(c1);
    expect(e.Components[1]).toBe(c3);

    expect(e.GetComponent(C1)).toBe(c1);
    expect(e.GetComponent(C3)).toBe(c3);

    expect(e.HasComponent(C1)).toBeTruthy();
    expect(e.HasComponent(C3)).toBeTruthy();
    // --- ADD --- //
  });

  it('should update all components', ()=> {

    const c1Update = jest.spyOn(c1, 'Update');
    const c2Update = jest.spyOn(c2, 'Update');
    const c3Update = jest.spyOn(c3, 'Update');

    expect(c1Update).not.toBeCalled()
    expect(c2Update).not.toBeCalled()
    expect(c3Update).not.toBeCalled()

    e.AddComponent(c1)
    e.AddComponent(c2)
    e.AddComponent(c3)

    const delta = 1;
    e.Update(delta);
    expect(c1Update).toBeCalledWith(delta)
    expect(c2Update).toBeCalledWith(delta)
    expect(c3Update).toBeCalledWith(delta)

  });

  it('should awake all Components', () => {
    const spy1 = jest.spyOn(c1, 'Awake')
    const spy2 = jest.spyOn(c2, 'Awake')
    const spy3 = jest.spyOn(c3, 'Awake')

    expect(spy1).not.toBeCalled()
    expect(spy2).not.toBeCalled()
    expect(spy3).not.toBeCalled()

    e.AddComponent(c1)
    e.AddComponent(c2)
    e.AddComponent(c3)

    e.Awake()

    expect(spy1).toBeCalled()
    expect(spy2).toBeCalled()
    expect(spy3).toBeCalled()
  })
});
