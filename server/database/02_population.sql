USE trouve_ton_artisan;

INSERT INTO categorie (id_categorie, nom)
VALUES
(1, 'Alimentation'),
(2, 'Bâtiment'),
(3, 'Fabrication'),
(4, 'Services');

INSERT INTO specialite (id_specialite, nom, id_categorie)
VALUES
(1, 'Traiteur', 1),
(2, 'Boucher', 1),
(3, 'Boulanger', 1),
(4, 'Chocolatier', 1),
(5, 'Plombier', 2),
(6, 'Electricien', 2),
(7, 'Menuisier', 2),
(8, 'Chauffagiste', 2),
(9, 'Bijoutier', 3),
(10, 'Couturier', 3),
(11, 'Ferronier', 3),
(12, 'Coiffeur', 4),
(13, 'Webdesigner', 4),
(14, 'Toiletteur', 4),
(15, 'Fleuriste', 4);

INSERT INTO artisan (id_artisan, nom, email, ville, note, a_propos, site_web, img_URL, top_artisan, id_specialite)
VALUES
(1, 'Traiteur Truchon','contact@truchon-traiteur.fr','Lyon', 4.1,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.','https://truchon-traiteur.fr', NULL,FALSE, 1),
(2, 'Boucherie Dumont','boucherie.dumond@gmail.com','Lyon', 4.5,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', NULL, NULL,FALSE, 2),
(3, 'Au pain chaud','aupainchaud@hotmail.com','Montélimar', 4.8,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', NUll, NULL,TRUE, 3),
(4, 'Chocolaterie Labbé','chocolaterie-labbe@gmail.com','Lyon', 4.9,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.','https://chocolaterie-labbe.fr', NULL,TRUE, 4),
(5, 'Vallis Bellemare','v.bellemare@gmail.com','Vienne', 4.0,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.','https://plomberie-bellemare.com', NULL,FALSE, 5),
(6, 'Mont Blanc Eléctricité','contact@mont-blanc-electricite.com','Chamonix', 4.5,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.','https://mont-blanc-electricite.com', NULL,FALSE, 6),
(7, 'Boutot & fils','boutot-menuiserie@gmail.com','Bourg-en-bresse', 4.7,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.','https://boutot-menuiserie.com', NULL,FALSE, 7),
(8, 'Orville Salmons','o-salmons@live.com','Evian', 5.0,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', NULL, NULL,TRUE, 8),
(9, 'Claude Quinn','claude.quinn@gmail.com','Aix-les-bains', 4.2,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', NULL, NULL,FALSE, 9),
(10, 'Amitee Lécuyer','a.amitee@hotmail.com','Annecy', 4.5,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.','https://lecuyer-couture.com', NULL,FALSE, 10),
(11, 'Ernest Carignan','e-carigan@hotmail.com','Le Puy-en-Velay', 5.0,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', NULL, NULL,FALSE, 11),
(12, 'Royden Charbonneau','r.charbonneau@gmail.com','Saint-Priest', 3.8,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', NULL, NULL,FALSE, 12),
(13, 'Leala Dennis','l.dennos@hotmail.fr','Chambéry', 3.8,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.','https://coiffure-leala-chambery.fr', NULL,FALSE, 12),
(14, 'C''est sup''hair','sup-hair@gmail.com','Romans-sur-Isère', 4.1,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.','https://sup-hair.fr', NULL,FALSE, 12),
(15, 'CM Graphisme','contact@cm-graphisme.com','Valence', 4.4,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.','https://cm-graphisme.com', NULL,FALSE, 13),
(16, 'Valérie Laderoute','v-laredoute@gmail.com','Valence', 4.5,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.','https://cm-graphisme.com', NULL,FALSE, 14),
(17, 'Le monde des fleurs','contact@le-monde-des-fleurs-annonay.fr','Annonay', 4.6,'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.','https://le-monde-des-fleurs-annonay.fr', NULL,FALSE, 15);







