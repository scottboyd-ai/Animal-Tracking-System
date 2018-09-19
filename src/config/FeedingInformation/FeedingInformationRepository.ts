import {BaseRepository} from "../BaseRepository";
import {FeedingInformation} from "../../models/FeedingInformation";

export class FeedingInformationRepository extends BaseRepository<FeedingInformation> {
    constructor(){
        super('feedinginformations');
    }

}