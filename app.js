import express from 'express';

const app = express();

const PORT = 3002;

const submissions = [];

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('form');
});
    
app.post('/submit', (req, res) => {
    const submission = req.body;
    submission.timestamp = new Date();

    console.log(submission);
    submissions.push(submission);
    console.log(submissions);

    res.render('confirm');
});

app.get('/confirm', (req, res) => {
    res.render('confirm');
});

app.get('/admin', (req, res) => {
    res.render('admin', { submissions });
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});