const database = require("../../database.js").database;
const axios = require("axios");

function getTravelList(req, res) {
  const query = "SELECT * FROM travelsystem.TouristSpot order by 1 desc";

  database.query(query, (error, success) => {
    if (error) return res.json(error);

    return res.status(200).json(success);
  });
}

function createTravel(req, res) {
  const dateNow = new Date().toISOString().split("T")[0];
  const queryPost =
    "INSERT INTO travelsystem.touristspot (`TouristSpotName`,`TouristSpotCountry`, `TouristSpotImage`, `TouristSpotAddData`, `TouristSpotCity`) VALUES (?)";

  const values = [
    req.body.TouristSpotName,
    req.body.TouristSpotCountry,
    req.body.TouristSpotImage,
    (req.body.TouristSpotAddData = dateNow),
    req.body.TouristSpotCity,
  ];

  database.query(queryPost, [values], (error) => {
    if (error) {
      console.log(error);
      return res.json(error);
    }
    return res.status(200).json("Viagem adicionada com sucesso");
  });
}

function deleteTravel(req, res) {
  const queryDelete =
    "DELETE FROM travelsystem.touristspot WHERE `TouristSpotId` = ?";

  database.query(queryDelete, [req.params.id], (error, success) => {
    if (error) return res.json(error);

    return res.status(200).json("Viagem excluída com sucesso");
  });
}

module.exports = { getTravelList, createTravel, deleteTravel };
