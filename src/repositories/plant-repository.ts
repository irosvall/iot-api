import {InfluxRepositoryBase} from "./influx-repository-base";
import {InfluxData} from "../models/influx-data";

/**
 * A class for communicating with InfluxDB using the plant-data bucket.
 */
export class PlantRepository extends InfluxRepositoryBase {
    /**
     * Initializes a PlantRepository.
     */
    public constructor() {
        super()
    }

    /**
     * Gets all data from plant-data bucket in InfluxDB.
     */
    public async getAllData(): Promise<InfluxData[]> {
        const queryApi = this.client.getQueryApi(this.influxOrg)

        const query = `from(bucket: "plant-data")
        |> range(start: -30d)
        |> filter(fn: (r) => r["_measurement"] == "plant")`

        return await queryApi.collectRows(query)
    }
}
