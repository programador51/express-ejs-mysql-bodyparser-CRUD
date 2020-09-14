CREATE DATABASE portal_noticias_nodejs;

USE portal_noticias_nodejs;
CREATE TABLE noticias(
    id_noticia INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(100),
    noticias TEXT,
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DESCRIBE noticias;

INSERT INTO noticias(titulo,noticias) values('mi titulo','contenido de la nota');

SELECT * FROM noticias;