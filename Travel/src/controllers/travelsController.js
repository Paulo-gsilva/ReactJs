const database = require("../../database.js").database;

function getTravelList(req, res) {
  const query = "SELECT * FROM travelsystem.TouristSpot";

  database.query(query, (error, success) => {
    if (error) return res.json(error);

    return res.status(200).json(success);
  });
}

module.exports = { getTravelList };
