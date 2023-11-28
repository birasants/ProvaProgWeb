create database restaurante;

create table prato(
	id serial primary key,
  nome varchar(255),
  ingredientes text,
  tipo_de_prato varchar(255)
)

create table pedido(
	id serial primary key,
	data_order date,
  prato int references prato(id)
)

alter table pedido
rename column prato to prato_id