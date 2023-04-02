exports.sql = {
  manager: {
    getTechnicianTasks(id) {
      const query = `
      SELECT DISTINCT ta.summary, ta.performed, te.name, te.field, ma.company from task ta
      JOIN technician te ON ta.idTechnician = te.id
      JOIN manager ma ON te.idManager = ma.id
      WHERE ma.id = ${id}
      ORDER BY ta.performed DESC
      `;
      return query;
    },
    deleteTechnician(id) {
      const query = `
      DELETE FROM technician
      WHERE id = ${id}
      `;
      return query;
    },
  },

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
