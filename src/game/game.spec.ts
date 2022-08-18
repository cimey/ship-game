/**
 * @jest-environment jsdom
 */

import { Fleet } from '@/fleet';
import { Game } from '@/game'
import { Grid } from '@/grid';

describe('>>> Game', () => {
  let game: Game;

  beforeEach(() => {
    game = new Game();

    window.requestAnimationFrame = jest.fn().mockImplementationOnce((cb) => cb());
  })


  it('should start update loop next frame after awake', () => {
    const spy = jest.spyOn(game, 'Update')
    game.Awake()
    expect(spy).toHaveBeenCalledTimes(1)
  })

  it('should awake all Components', () => {
    const spy1 = jest.spyOn(Grid.prototype, 'Awake')
    const spy2 = jest.spyOn(Fleet.prototype, 'Awake');

    expect(spy1).not.toBeCalled();
    expect(spy2).not.toBeCalled();


    game.Awake();

    expect(spy1).toBeCalled();
    expect(spy2).toBeCalled();
   })

  it('should update all Components', () => {
    const spy1 = jest.spyOn(Grid.prototype, 'Update')
    const spy2 = jest.spyOn(Fleet.prototype, 'Update');

    expect(spy1).not.toBeCalled()
    expect(spy2).not.toBeCalled();

    game.Awake();
    game.Update()

    expect(spy1).toBeCalled()
    expect(spy2).toBeCalled()
  })

  it('should awake all children', () => {
    const spy1 = jest.spyOn(Grid.prototype, 'Awake')

    expect(spy1).not.toBeCalled()

    game.Awake()

    expect(spy1).toBeCalled()
  })

  it('should update all children', () => {
    const spy1 = jest.spyOn(Grid.prototype, 'Update')

    expect(spy1).not.toBeCalled()

    game.Awake();
    game.Update()

    expect(spy1).toBeCalled()
  })
})