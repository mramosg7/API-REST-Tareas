create database Tareas;

USE Tareas;


CREATE TABLE Estados (
    id INT AUTO_INCREMENT PRIMARY KEY,
    descripcion VARCHAR(200) NOT NULL
);


CREATE TABLE Tarea (
    id INT AUTO_INCREMENT PRIMARY KEY,
    text VARCHAR(200) NOT NULL,
    estado INT NOT NULL,
    created_at DATE NOT NULL,
    FOREIGN KEY (estado) REFERENCES Estados(id)
);

INSERT INTO Estados(descripcion) VALUES('Pendiente')
INSERT INTO Estados(descripcion) VALUES('En proceso')
INSERT INTO Estados(descripcion) VALUES('Terminado')