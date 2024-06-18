const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

const quizzes = [
    {
        id: 1,
        title: 'Sample Quiz 1',
        questions: [
            {
                title: 'Question 1',
                options: ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5', 'Option 6', 'Option 7', 'Option 8', 'Option 9', 'Option 10'],
                correctOptions: ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5']
            },
            // More questions
        ]
    },
    // More quizzes
];

app.get('/api/quizzes', (req, res) => {
    res.json(quizzes.map(quiz => ({ id: quiz.id, title: quiz.title })));
});

app.get('/api/quiz/:id/questions', (req, res) => {
    const quiz = quizzes.find(q => q.id == req.params.id);
    if (quiz) {
        res.json(quiz.questions);
    } else {
        res.status(404).send('Quiz not found');
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
