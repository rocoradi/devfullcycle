CREATE DATABASE IF NOT EXISTS base;

use base;

CREATE TABLE IF NOT EXISTS pessoa (
    id int not null auto_increment,
    nome varchar(255) not null,
    primary key (id)
);