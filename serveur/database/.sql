-- Drop des tables si elles existent déjà (pour éviter les erreurs lors de la création)
DROP TABLE IF EXISTS artisan;
DROP TABLE IF EXISTS specialite;
DROP TABLE IF EXISTS categorie;

-- Création des tables
CREATE TABLE categorie (
    id_categorie INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(50) NOT NULL
);

CREATE TABLE specialite (
    id_specialite INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(50) NOT NULL,
    id_categorie INT NOT NULL,
    FOREIGN KEY (id_categorie) REFERENCES categorie(id_categorie) ON DELETE RESTRICT
);

CREATE TABLE artisan (
    id_artisan INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(50) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    ville VARCHAR(150) NOT NULL,
    note DECIMAL(2,1) NOT NULL,
    a_propos TEXT NOT NULL,
    site_web VARCHAR(255),
    img_URL VARCHAR(255),
    id_specialite INT NOT NULL,
    FOREIGN KEY (id_specialite) REFERENCES specialite(id_specialite) ON DELETE RESTRICT
);
