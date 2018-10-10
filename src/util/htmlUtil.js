"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AgeUnit_1 = require("../Enums/AgeUnit");
const WeightUnit = require("../Enums/WeightUnit");
function formatAnimalsAsTable(animals) {
    let output = '<table>';
    for (let animal of animals) {
        let table = '<tr><td><input type="button" id="' + animal._id + '_edit" onclick="editAnimal(' + animal._id + ')" value="Edit Animal">' +
            '<br><input type="hidden" id="' + animal._id + '_cancel" onclick="cancelEdit(\'' + animal._id + '\')"></td><td><table>';
        table += '<tr><td>Animal Name:</td><td id="' + animal._id + '_name">' + animal.name + '</td></tr>';
        table += '<tr><td>Species:</td><td id="' + animal._id + '_species">' + animal.species + '</td></tr>';
        table += '<tr><td>Date of Birth:</td><td id="' + animal._id + '_dob">' + animal.dob + '</td></tr>';
        table += '<tr><td>Weight:</td><td id="' + animal._id + '_weight">' + animal.weight + '</td>';
        if (animal.weightUnit > -1) {
            table += '<td id="' + animal._id + '_weightUnit">' + WeightUnit.getValue(animal.weightUnit).toString().toLowerCase() + '</td>';
        }
        table += '</tr>';
        table += '<tr><td>Animal Location:</td><td id="' + animal._id + '_location">' + animal.location.name + '</td>';
        table += '<tr><td>Enclosure:</td><td id="' + animal._id + '_enclosure">' + animal.enclosure.name + '</td>';
        output += table + '</td></tr></table>';
    }
    return output + '</table>';
}
exports.formatAnimalsAsTable = formatAnimalsAsTable;
function formatLocationsAsSelectOptions(locations) {
    let options = '';
    for (let location of locations) {
        options += '<option name="location" value="' + location._id + '">' + location.name + '</option>';
    }
    return options;
}
exports.formatLocationsAsSelectOptions = formatLocationsAsSelectOptions;
function formatAgeUnitsAsSelectOptions() {
    let options = '';
    for (let unit of Object.keys(AgeUnit_1.AgeUnit)) {
        if (isNaN(Number(unit))) {
            options += '<option name="' + unit + '">' + unit.toLowerCase() + '</option>';
        }
    }
    return options;
}
exports.formatAgeUnitsAsSelectOptions = formatAgeUnitsAsSelectOptions;
function formatWeightUnitsAsSelectOptions() {
    let options = '';
    for (let unit of Object.keys(WeightUnit)) {
        if (isNaN(Number(unit))) {
            options += '<option name="' + unit + '">' + unit.toLowerCase() + '</option>';
        }
    }
    return options;
}
exports.formatWeightUnitsAsSelectOptions = formatWeightUnitsAsSelectOptions;
function formatEnclosuresAsSelectOptions(enclosures) {
    let options = '';
    for (let enclosure of enclosures) {
        options += '<option name="enclosure" value="' + enclosure._id + '">' + enclosure.name + '</option>';
    }
    return options;
}
exports.formatEnclosuresAsSelectOptions = formatEnclosuresAsSelectOptions;
function formatEnclosuresAsTable(enclosures) {
    let tableOutput = '<table>';
    for (let enclosure of enclosures) {
        let table = '<tr><td><input type="button" id="' + enclosure._id + '_edit" onclick="editEnclosure(\'' + enclosure._id + '\')" value="Edit Enclosure">' +
            '<br><input type="hidden" id="' + enclosure._id + '_cancel" onclick="cancelEdit(\'' + enclosure._id + '\')"></td><td><table>';
        table += '<tr><td>Enclosure number: </td><td id="' + enclosure._id + '_number">' + enclosure.number + '</td></tr>';
        table += '<tr><td>Enclosure name: </td><td id="' + enclosure._id + '_name">' + enclosure.name + '</td></tr>';
        table += '<tr><td>Dimensions: </td><td id="' + enclosure._id + '_dimensions">' + enclosure.dimensions + '</td></tr>';
        table += '<tr><td>Last Cleaned: </td><td id="' + enclosure._id + '_lastCleaned">';
        if (enclosure.lastCleaned) {
            table += new Date(enclosure.lastCleaned).toLocaleString();
        }
        table += '</td></tr>';
        table += '<tr><td>Notes: </td><td id="' + enclosure._id + '_notes">' + enclosure.notes + '</td></tr>';
        tableOutput += table + '</td></tr></table>';
    }
    return tableOutput + '</table>';
}
exports.formatEnclosuresAsTable = formatEnclosuresAsTable;
exports.standardImports = '<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>\n' +
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
//# sourceMappingURL=htmlUtil.js.map