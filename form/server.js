const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 3002;

mongoose.connect('mongodb://localhost:27017/form-bdd', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erreur de connexion à MongoDB :'));
db.once('open', () => console.log('Connecté à MongoDB'));

const pageSchema = new mongoose.Schema({
    htmlContent: String,
});

const Page = mongoose.model('Page', pageSchema);

app.get('/api/getPages', async (req, res) => {
    try {
        const pages = await Page.find();
        res.json({ pages });
    } catch (error) {
        console.error('Erreur lors de la récupération des pages', error);
        res.status(500).json({ error: 'Erreur lors de la récupération des pages', details: error.message });
    }
});

app.delete('/api/deletePage/:id', async (req, res) => {
    try {
        const deletedPage = await Page.findByIdAndDelete(req.params.id);
        if (!deletedPage) {
            return res.status(404).json({ message: 'Page non trouvée' });
        }
        res.json({ message: 'Page supprimée avec succès' });
    } catch (error) {
        console.error('Erreur lors de la suppression de la page', error);
        res.status(500).json({ error: 'Erreur lors de la suppression de la page', details: error.message });
    }
});

const fs = require('fs');
const path = require('path');


app.post('/api/publishForm', async (req, res) => {
    try {
        const htmlContent = req.body.htmlContent;

        const fileName = `published-form-${Date.now()}.html`; 
        const filePath = path.join(__dirname, 'published-forms', fileName); 
        fs.writeFileSync(filePath, htmlContent);

        const publishedLink = `http://yourdomain.com/published-forms/${fileName}`; 
        res.json({ message: 'Form published successfully', link: publishedLink });
    } catch (error) {
        console.error('Error publishing form', error);
        res.status(500).json({ error: 'Error publishing form', details: error.message });
    }
});
app.get('/api/getPublishedForm/:id', async (req, res) => {
    try {
        const formId = req.params.id;

        const filePath = path.join(__dirname, 'published-forms', formId); 


        const fetchedHtmlContent = fs.readFileSync(filePath, 'utf-8');

        res.json({ htmlContent: fetchedHtmlContent });
    } catch (error) {
        console.error('Error fetching published form', error);
        res.status(500).json({ error: 'Error fetching published form', details: error.message });
    }
});

app.use(cors());
app.use(bodyParser.json());

app.options('/api/savePage', cors()); 

app.post('/api/savePage', async (req, res) => {
    try {
        const htmlContent = req.body.htmlContent;
        const nouvellePage = new Page({
            htmlContent: htmlContent,
        });
        await nouvellePage.save();
        res.json({ message: 'Page enregistrée avec succès' });
    } catch (error) {
        console.error('Erreur lors de l\'enregistrement de la page', error);
        res.status(500).json({ error: 'Erreur lors de l\'enregistrement de la page', details: error.message });
    }
});


app.listen(port, () => console.log(`Serveur écoutant sur le port ${port}`));
