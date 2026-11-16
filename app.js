import express from 'express';

const app = express();

const PORT = 3002;

const submissions = [];

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('home');
});
    
app.post('/submit', (req, res) => {
    const submission = req.body;
    submission.timestamp = new Date();

    console.log(submission);
    submissions.push(submission);
    console.log(submissions);

    res.render('confirm', { submission: req.body });
});

// 2. Create a new route for your contact form
app.get('/form', (req, res) => {
    // This looks for your contact form file (e.g., contact.ejs)
    res.render('form'); 
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