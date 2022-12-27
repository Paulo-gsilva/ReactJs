import { database } from "../database.js";
import axios from "axios";

export function getTravelList(req, res) {
  const query = "SELECT * FROM travelsystem.TouristSpot order by 1 desc";

  database.query(query, (error, success) => {
    if (error) return res.json(error);

    return res.status(200).json(success);
  });
}

export function getTravelByTouristSpotId(req, res) {
  const queryGetById =
    "SELECT * FROM travelsystem.touristspot WHERE `TouristSpotId` = ?";

  database.query(queryGetById, [req.params.id], (error, success) => {
    if (error) return res.json(error);

    return res.status(200).json("Viagem encontrada! 😃");
  });
}

export function createTravel(req, res) {
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
    return res.status(200).json("Viagem adicionada com sucesso! 😃");
  });
}

export function deleteTravel(req, res) {
  const queryDelete =
    "DELETE FROM travelsystem.touristspot WHERE `TouristSpotId` = ?";

  database.query(queryDelete, [req.params.id], (error, success) => {
    if (error) return res.json(error);

    return res.status(200).json("Viagem excluída com sucesso! 😃");
  });
}

export function updateTravel(req, res) {
  const dateNow = new Date().toISOString().split("T")[0];
  const queryUpdate =
    "UPDATE travelsystem.touristspot SET `TouristSpotName` = ?, `TouristSpotCountry` = ?, `TouristSpotImage` = ?, `TouristSpotAddData` = ?, `TouristSpotCity` = ? WHERE `TouristSpotId` = ?";

  const values = [
    req.body.TouristSpotName,
    req.body.TouristSpotCountry,
    req.body.TouristSpotImage,
    (req.body.TouristSpotAddData = dateNow),
    req.body.TouristSpotCity,
  ];

  database.query(queryUpdate, [...values, req.params.id], (error, success) => {
    if (error) return res.json(error);

    return res.status(200).json("Viagem editada com sucesso! 😃 ");
  });
}
