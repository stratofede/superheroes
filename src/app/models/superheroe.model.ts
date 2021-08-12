import { GenderConstants } from "../constants/gender.constants";
import { RaceConstants } from "../constants/race.constants";

export class SuperHeroe {
    'id'          : string;
    'name'        : string;
    'intelligence': number;
    'strength'    : number;
    'speed'       : number;
    'gender'      : string;
    'race'        : string;
    'height'      : number;
    'weight'      : number;

    constructor(
            id          : string, 
            name        : string,
            gender      : string = GenderConstants.UNKNOWN,
            race        : string = RaceConstants.HUMAN,
            strength    : number = 0,
            height      : number = 0,
            weight      : number = 0,
            intelligence: number = 0,
            speed       : number = 0
    ) {
        this.id           = id;
        this.name         = name;
        this.intelligence = intelligence;
        this.strength     = strength;
        this.speed        = speed;
        this.gender       = gender;
        this.race         = race;
        this.height       = height;
        this.weight       = weight;
    }
}