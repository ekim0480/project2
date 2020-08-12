DROP DATABASE IF EXISTS beer_db;
    
    CREATE DATABASE beer_db;
    
    USE beer_db;
    
    CREATE TABLE `beers` (
    `id` INT AUTO_INCREMENT NOT NULL,
    `beer_name` VARCHAR(#) NOT NULL,
    `#` BOOLEAN NOT NULL,
    PRIMARY KEY ( `id` )
    );