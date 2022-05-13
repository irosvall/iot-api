import {InfluxDB} from "@influxdata/influxdb-client"

/**
 * Sets up a connection to InfluxDB.
 */
class InfluxClient {
    private readonly token: string
    private readonly INFLUXDB_URL: string
    private readonly client: InfluxDB

    /**
     * Initializes the InfluxDB client.
     */
    public constructor() {
        this.token = process.env.INFLUX_TOKEN!
        this.INFLUXDB_URL = process.env.INFLUX_URL!
        this.client = this.createInfluxDB()
    }

    /**
     * Gets the client for the database.
     */
    public getDBClient(): InfluxDB {
        return this.client
    }

    /**
     * Creates the database connection.
     */
    private createInfluxDB(): InfluxDB {
        return new InfluxDB({url: this.INFLUXDB_URL, token: this.token})
    }
}

const influxClient: InfluxClient = new InfluxClient();
Object.freeze(influxClient)
export default influxClient
