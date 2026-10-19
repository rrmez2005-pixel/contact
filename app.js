import express from 'express';

const app = express();

const PORT = 3002;

app.use(express.static(`${import.meta.dirname}`));

app.get('/', (req, res) => {
    res.sendFile(`${import.meta.dirname}/form.html`);
});

app.listen(PORT, () => {
    console.log(`Server is running at 
        http://localhost:${PORT}`);
});