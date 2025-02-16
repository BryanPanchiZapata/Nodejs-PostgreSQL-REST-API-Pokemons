create table pokemons (
    id serial not null primary key,
    nombre varchar(100) not null unique,
    tipo varchar(50) not null,
    poder integer not null
)

select * from pokemons

insert into
    pokemons (nombre, tipo, poder)
values ('Pikachu', 'Eléctrico', 90),
    ('Charmander', 'Fuego', 85),
    ('Squirtle', 'Agua', 80),
    ('Bulbasaur', 'Planta', 78);