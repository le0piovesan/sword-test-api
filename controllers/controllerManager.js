class ControllerManager {
  async listManager(req, res) {
    res.json("GET request to the homepage");
  }

  async createManager(req, res) {
    const { name, age, field } = req.params;
    res.json("POST request to the homepage");
  }
}

module.exports = new ControllerManager();
