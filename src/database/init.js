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
          id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
          name VARCHAR(80) NOT NULL,
          company CHAR(30) NOT NULL,
          createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
      `,
    technician: `
      CREATE TABLE IF NOT EXISTS technician(
          id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
          name VARCHAR(80) NOT NULL,
          field CHAR(30) NOT NULL,
          createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          idManager INT DEFAULT NULL,
          CONSTRAINT technician_manager FOREIGN KEY(idManager) REFERENCES manager(id)
      );
      `,
    task: `
      CREATE TABLE IF NOT EXISTS task(
          id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
          summary VARCHAR(2500) NOT NULL,
          performed DATE NOT NULL,
          createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          idTechnician INT DEFAULT NULL,
          CONSTRAINT task_technician FOREIGN KEY(idTechnician) REFERENCES technician(id)
      );
      `,
  },
};
