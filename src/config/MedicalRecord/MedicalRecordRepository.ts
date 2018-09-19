import {BaseRepository} from "../BaseRepository";
import {MedicalRecord} from "../../models/MedicalRecord";

export class MedicalRecordRepository extends BaseRepository<MedicalRecord> {
    constructor(){
        super('medicalrecords');
    }

}