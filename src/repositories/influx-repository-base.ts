import {InfluxDB} from "@influxdata/influxdb-client";
import influxClient from "../config/influx-client";
import {InfluxData} from "../models/influx-data";

/**
 * Base class for InfluxDB repositories.
 */
export abstract class InfluxRepositoryBase {
    protected client: InfluxDB
    protected readonly influxOrg: string

    /**
     * Initializes an InfluxRepositoryBase.
     */
    protected constructor() {
        this.client = influxClient.getDBClient()
        this.influxOrg = process.env.INFLUX_ORG!
    }

    /**
     * Gets all data from a bucket in InfluxDB.
     */
    abstract getAllData(): Promise<InfluxData[]>
}
