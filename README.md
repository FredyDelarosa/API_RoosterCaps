# .env
DB_HOST=localhost

DB_PORT=3306

DB_USER=root

DB_PASSWORD=125645

DB_NAME=Roostercaps

PORT=3000

# Construcción de base de datos

create database Roostercaps;

use Roostercaps;

create table user(
	user_id int primary key auto_increment,
    role_id_fk int NOT NULL,
    user_name varchar(80),
    password varchar(80),
    created_at date,
    created_by varchar(80),
    updated_at date,
    updated_by varchar(80),
    deleted boolean default false
);

create table role_user ( 
	role_id int primary key AUTO_INCREMENT, 
	title varchar(50) NOT NULL, 
	description text, 
	created_at datetime NOT NULL, 
	created_by varchar(50), 
	updated_at datetime NOT NULL, 
	updated_by varchar(50), 
	deleted boolean DEFAULT FALSE 
);

create table productos(
	id int primary key auto_increment,
    name varchar(80),
	price int,
	create_at date,
	create_by varchar(50),
	update_at date,
	update_by varchar(50),
	deleted boolean default false
);
