create database db_node;
use db_node;

create table tb_registerUser(
    id_people int auto_increment primary key,
    nm_email varchar(200) not null,
    cd_password varchar(30) not null
);