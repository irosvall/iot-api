import {InfluxRepositoryBase} from "../repositories/influx-repository-base";

/**
 * A base class for services communicating with InfluxDB.
 */
export abstract class InfluxServiceBase {
    private repository: InfluxRepositoryBase

    /**
     * Initializes a InfluxServiceBase.
     */
    protected constructor(repository: InfluxRepositoryBase) {
        this.repository = repository
    }

    /**
     * Gets all data from InfluxDB.
     */
    public getAllData() {
        return this.repository.getAllData()
    }
}
