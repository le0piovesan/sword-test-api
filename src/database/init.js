exports.init = {
  dropDb: `
    DROP DATABASE tasksdb;
    `,
  createDb: `
    CREATE DATABASE IF NOT EXISTS tasksdb;
    `,
  useDb: `
    USE tasksdb;
    `,
  createTables: {
    manager: `
      CREATE TABLE IF NOT EXISTS manager(
          idManager INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
          name VARCHAR(80) NOT NULL,
          company CHAR(30) NOT NULL,
          createdAt TIMESTAMP NOT NULL,
          updatedAt TIMESTAMP NOT NULL,
      );
      `,
    technician: `
      CREATE TABLE IF NOT EXISTS technician(
          idTechnician INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
          name VARCHAR(80) NOT NULL,
          field CHAR(30) NOT NULL,
          createdAt TIMESTAMP NOT NULL,
          updatedAt TIMESTAMP NOT NULL,
          idManager INT NOT NULL,
          CONSTRAINT technician_manager FOREIGN KEY(idManager) REFERENCES manager(idManager)
      );
      `,
    task: `
      CREATE TABLE IF NOT EXISTS task(
          idTask INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
          summary VARCHAR(2500) NOT NULL,
          performed DATE NOT NULL,
          createdAt TIMESTAMP NOT NULL,
          updatedAt TIMESTAMP NOT NULL,
          idTechnician INT NOT NULL,
          CONSTRAINT manager_technician FOREIGN KEY(idTechnician) REFERENCES technician(idTechnician)
      );
      `,
  },
};
