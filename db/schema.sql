DROP DATABASE IF EXISTS beer_db;
    
    CREATE DATABASE beer_db;
    
    USE beer_db;
    
    CREATE TABLE `beers` (
    `id` INT AUTO_INCREMENT NOT NULL,
    `brewery_name` VARCHAR(60) NOT NULL,
    `tried` BOOLEAN DEFAULT FALSE NOT NULL,
    PRIMARY KEY ( `id` )
    );