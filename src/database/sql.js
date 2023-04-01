exports.sql = {
  admin: {
    selectAllManagers: `
    SELECT * FROM manager ORDER BY createdAt;
  `,
    createManager(name, company) {
      const query = `
      INSERT INTO manager(name, company) VALUES ("${name}", "${company}");
    `;
      return query;
    },
    selectAllTechnicians: `
      SELECT * FROM technician ORDER BY createdAt;
    `,
    createTechnician(name, field, idManager) {
      const query = `
      INSERT INTO technician(name, field, idManager) VALUES ("${name}", "${field}", "${idManager}");
    `;
      return query;
    },
    selectAllTasks: `
      SELECT * FROM task ORDER BY createdAt;
    `,
    createTask(summary, performed = Date.now(), idTechnician) {
      const query = `
      INSERT INTO task(summary, performed, idTechnician) VALUES ("${summary}", "${performed}", "${idTechnician}");
    `;
      return query;
    },
  },
};
