import { Fleet } from "@/fleet";
import { Entity } from "@/utils";


export class Ship extends Entity{

    constructor(public readonly fleet: Fleet){
        super();
    }

    
}