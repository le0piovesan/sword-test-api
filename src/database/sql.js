exports.sql = {
  selectManagers: `
    SELECT * FROM manager ORDER BY createdAt;
  `,
  createManager(name, company) {
    const query = `
      INSERT INTO manager(name, company) VALUES ("${name}", "${company}");
    `;

    return query;
  },
};
