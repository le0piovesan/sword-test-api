exports.sql = {
  selectManagers: `
    SELECT * FROM manager ORDER BY createdAt;
  `,
  createManager(name, company) {
    const query = `
      INSERT INTO manager(
          name,
          company,
          createdAt,
          updatedAt
      ) VALUES (
          ${name}, ${company}, ${Date.now()}, ${Date.now()}
      )
    `;

    return query;
  },
};
