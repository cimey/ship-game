import { Settings } from "@/settings";
import { Ship } from "@/ship";
import { Team } from "@/team";
import { C1 } from "@/utils/ecs/models.h";
import { Fleet } from ".";


describe('<<<Fleet>>>', ()=>{

    let fleet: Fleet;
    beforeEach(()=>{

        fleet =  new Fleet(Team.A);

    });

    it('should not call component awake before calling awake', ()=>{

        const spyComponentAwake = jest.spyOn(C1.prototype, 'Awake');
        const spyShipAwake = jest.spyOn(Ship.prototype, 'Awake');
        const spyComponentUpdate = jest.spyOn(C1.prototype, 'Update');

        expect(spyComponentAwake).not.toBeCalled();
        expect(spyComponentUpdate).not.toBeCalled();

        fleet.AddComponent(new C1());
        fleet.Awake();

        expect(spyComponentAwake).toBeCalled();
        expect(spyShipAwake).toBeCalledTimes(Settings.grid.ships.fleetSize);

        fleet.Update(1);
        expect(spyComponentUpdate).toBeCalled();

    });
})