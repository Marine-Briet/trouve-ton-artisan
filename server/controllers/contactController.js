const nodemailer = require('nodemailer');
const { Artisan } = require('../models/index.js');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
    },
});

const envoyerMessage = async (req, res) => {
    const { idArtisan, nom, email, objet, message } = req.body;

    try {
        const artisan = await Artisan.findByPk(idArtisan);

        if (!artisan) {
            return res.status(404).json({ error: 'Artisan non trouvé.' });
        }

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: artisan.email,
            replyTo: email,
            subject: `[Trouve ton artisan] ${objet}`,
            text: `Message de : ${nom} (${email})\n\n${message}`,
        });

        return res.status(200).json({ success: 'Message envoyé avec succès.' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Une erreur est survenue lors de l\'envoi du message.' });
    }
};

module.exports = { envoyerMessage };