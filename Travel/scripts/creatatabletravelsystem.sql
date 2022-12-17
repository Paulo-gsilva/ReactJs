CREATE TABLE `touristspot` (
  `TouristSpotId` bigint NOT NULL AUTO_INCREMENT,
  `TouristSpotName` varchar(200) NOT NULL,
  `TouristSpotCountry` varchar(200) NOT NULL,
  `TouristSpotCity` varchar(200) NOT NULL,
  `TouristSpotImage` varchar(200) NOT NULL,
  `TouristSpotAddData` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`TouristSpotId`)
)