import { DataSource } from "typeorm";

function createDataSource() {
  const dataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "books_db",
    synchronize: true,
    entities: ["src/entity/*.ts"],
  });

  return dataSource.initialize();
}

export default createDataSource;
