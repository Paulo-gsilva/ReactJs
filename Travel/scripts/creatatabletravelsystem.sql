use travelsystem;
create table TouristSpot(
	TouristSpotId BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    TouristSpotName VARCHAR(200) NOT NULL,
    TouristSpotCountry VARCHAR(200)NOT NULL,
    TouristSpotCity VARCHAR(200) NOT NULL,
    TouristSpotImage VARCHAR(200)NOT NULL,
    TouristSpotAddData DATE NOT NULL
);