import {AgeUnit} from "../Enums/AgeUnit";
import {Enclosure} from "../models/Enclosure";
import {WeightUnit} from "../Enums/WeightUnit";
import {AnimalLocation} from "../models/AnimalLocation";
import {Animal} from "../models/Animal";
import * as Sex from "../Enums/Sex";

// export function formatAnimalsAsList(animals: Animal[]) {
//     let output:string = '<div><table>';
//     for (let animal of animals){
//         output += '<tr><td><b>Name:</b> ' + animal.name + '</td><td><b>Age:</b> ' + animal.age + ' ';
//         if(animal.ageUnit){
//             output += AgeUnit.getValue(animal.ageUnit.toString()).toString().toLowerCase();
//         }
//         output += '</td><td><b>Species:</b> ' + animal.species + '</td>';
//         if(animal.sex){
//             output += '<td><b>Sex:</b> ' + Sex.getValue(animal.sex.toString()).toString() + '</td>';
//         }
//         output += '</tr>';
//     }
//     return output + '</table></div>';
// }


export function formatLocationsAsSelectOptions(locations: AnimalLocation[]) {
    let options:string = '';
    for (let location of locations) {
        options += '<option name="' + location._id + '">' + location.name + '</option>';
    }

    return options;
}



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

export function formatEnclosuresAsTable(enclosures:Enclosure[]):string{
    let tableOutput = '<table>';
    for (let enclosure of enclosures){
        let table:string = '<tr><td><input type="button" id="' + enclosure._id + '_edit" onclick="editEnclosure(\'' + enclosure._id + '\')" value="Edit Enclosure">' +
            '<br><input type="hidden" id="' + enclosure._id + '_cancel" onclick="cancelEdit(\'' + enclosure._id + '\')"> </td><td><table>';
        table += '<tr><td>Enclosure number: </td><td id="' + enclosure._id + '_number">' + enclosure.number + '</td></tr>';
        table += '<tr><td>Enclosure name: </td><td id="' + enclosure._id + '_name">' + enclosure.name + '</td></tr>';
        table += '<tr><td>Dimensions: </td><td id="' + enclosure._id + '_dimensions">' + enclosure.dimensions + '</td></tr>';
        table += '<tr><td>Last Cleaned: </td><td id="' + enclosure._id + '_lastCleaned">';
        if(enclosure.lastCleaned){
            table += new Date(enclosure.lastCleaned).toLocaleString();
        }
        table += '</td></tr>';
        table += '<tr><td>Notes: </td><td id="' + enclosure._id + '_notes">' + enclosure.notes +'</td></tr>';
        tableOutput += table + '</td></tr></table></div>';
    }

    return tableOutput + '</table>';
}

export const standardImports = '<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>\n' +
    '<!-- Latest compiled and minified CSS -->\n' +
    '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css">\n' +
    '\n' +
    '<!-- Popper JS -->\n' +
    '<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js"></script>\n' +
    '\n' +
    '<!-- Latest compiled JavaScript -->\n' +
    '<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js"></script>\n' +
    '\n' +
    '\n' +
    '<script\n' +
    '        src="https://code.jquery.com/jquery-3.3.1.min.js"\n' +
    '        integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="\n' +
    '        crossorigin="anonymous"></script>\n' +
    '<style>\n' +
    '    body {\n' +
    '        padding-left: 20px;\n' +
    '        padding-top: 10px;\n' +
    '    }\n' +
    '</style>';