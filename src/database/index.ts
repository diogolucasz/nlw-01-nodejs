import { DataSource } from "typeorm"
import { Point } from "../Entities/Point"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "nlw_01_nodejs",
    migrations: ["src/database/migrations/*.ts"],
    entities: [Point],

})

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })