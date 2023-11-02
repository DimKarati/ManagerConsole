const express = require('express');
const app = express();
const port = 3000;

// Set up EJS as the templating engine
app.set('view engine', 'ejs');

// Static file serving 
app.use(express.static('public'));


// Sample data
const reports = [
    { title: "Report Title 1", summary: "This is a brief summary of the first report.", date: "1st Jan 2023" },
    { title: "Report Title 2", summary: "This is a brief summary of the second report.", date: "15th Jan 2023" },
    { title: "Report Title 3", summary: "This is a brief summary of the third report.", date: "2nd Oct 2023" },
    { title: "Report Title 4", summary: "This is a brief summary of the fourth report.", date: "5th Jul 2023" },
    { title: "Report Title 5", summary: "This is a brief summary of the fourth report.", date: "6th Jul 2023" }

];

const menuOptions = [
    { href: "manager_dashboard", icon: "fa-solid fa-house", text: "Home" },
    { href: "manager_dashboard", icon: "fa-solid fa-list", text: "Compare Playlists" },
    { href: "manager_reports", icon: "fa-solid fa-book-open", text: "Reports" },
    { href: "manager_feedback", icon: "fa-solid fa-comments", text: "Feedback Channel" },
    { href: "https://www.google.com", icon: "fa-solid fa-book", text: "Library" }
];



// Route to the main page (Later the main page might change)
app.get('/', (req, res) => {
    res.render('manager_dashboard');
});

// Route to the manager's dashboard page
app.get('/manager_dashboard', (req, res) => {
    res.render('manager_dashboard');
});

// Route to the feedback page
app.get('/manager_feedback', (req, res) => {
    res.render('manager_feedback', { menuOptions });
});

// Route to the reports page
app.get('/manager_reports', (req, res) => {
    res.render('manager_reports', { reports });
});


// Port that server listens to
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});
