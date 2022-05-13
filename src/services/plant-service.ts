import {InfluxServiceBase} from "./influx-service-base";
import {PlantRepository} from "../repositories/plant-repository";

/**
 * A class for communicating with InfluxDB to retrieve data about a plant.
 */
export class PlantService extends InfluxServiceBase {
    /**
     * Initializes a PlantService.
     */
    public constructor(repository: PlantRepository = new PlantRepository()) {
        super(repository)
    }
}
