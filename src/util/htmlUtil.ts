import {AgeUnit} from "../Enums/AgeUnit";
import {Enclosure} from "../models/Enclosure";
import {WeightUnit} from "../Enums/WeightUnit";

export function formatAgeUnitsAsSelectOptions():string {
    let options:string = '';
    for(let unit of Object.keys(AgeUnit)){
        if (isNaN(Number(unit))) {
            options += '<option name="' + unit + '">' + unit.toLowerCase() + '</option>';
        }
    }
    return options;
}

export function formatWeightUnitsAsSelectOptions():string{
    let options:string = '';
    for(let unit of Object.keys(WeightUnit)){
        if (isNaN(Number(unit))) {
            options += '<option name="' + unit + '">' + unit.toLowerCase() + '</option>';
        }
    }
    return options;
}

export function formatEnclosuresAsSelectOptions(enclosures:Enclosure[]):string {
    let options:string = '';
    for (let enclosure of enclosures) {
        options += '<option name="' + enclosure._id + '">' + enclosure.name + '</option>';
    }

    return options;
}