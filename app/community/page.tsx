"use client"
import React, { useState, useEffect } from 'react';
import { FiEye, FiMessageSquare, FiPlus, FiThumbsUp } from 'react-icons/fi';

interface Question {
  id: number;
  title: string;
  content: string;
}

const CommunityPage: React.FC = () => {
  const [questions, setQuestions] = useState
([
{
id: 1,
title: 'What is Mango? Anyone have any idea about this?????',
content: 'Mango is a tropical fruit prized for its sweet, juicy flesh. It comes in various colors and sizes and is rich in vitamins and antioxidants, enjoyed fresh or in various dishes.',
},
{
id: 2,
title: 'What is Apple? Anyone have any idea about this?????',
content: 'Apple is a tropical fruit prized for its sweet, juicy flesh. It comes in various colors and sizes and is rich in vitamins and antioxidants, enjoyed fresh or in various dishes.',
},
]);
const [newQuestion, setNewQuestion] = useState('');

useEffect(() => {
// Load questions from localStorage on component mount
const savedQuestions = localStorage.getItem('communityQuestions');
if (savedQuestions) {
setQuestions(JSON.parse(savedQuestions));
}
}, []);

useEffect(() => {
// Save questions to localStorage whenever questions state changes
localStorage.setItem('communityQuestions', JSON.stringify(questions));
}, [questions]);

const handleAddQuestion = () => {
if (newQuestion.trim() !== '') {
const newQuestionObj: Question = {
id: questions.length + 1,
title: newQuestion,
content: 'Add your Question here...',
};
setQuestions(prevQuestions => [...prevQuestions, newQuestionObj]);
setNewQuestion('');
}
};

return (
<div>
<header className="bg-gray-800 text-white py-4">
<nav className="container mx-auto flex justify-between items-center">
<div className="flex items-center">
<div className="mr-4">
<img src="/ityo2.png" alt="Logo" className="h-8" />
</div>
</div>
<div>
<img src="/avtar.png" alt="Profile Picture" className="h-10 w-10 rounded-full" />
</div>
</nav>
</header>
<main className="container mx-auto py-8">
<div className="text-center mb-8">
<h1 className="text-3xl font-bold">Welcome to iAriv Community Support</h1>
{/* Add your custom content here */}
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="md:col-span-2">
<div className="grid grid-cols-1 gap-8">
{questions.map((question) => (
<div key={question.id} className="bg-white p-6 shadow-md rounded-lg">
<div className="text-lg">
<h2 className="text-xl font-bold mb-4">{question.title}</h2>
<p className="text-gray-600 mb-4">{question.content}</p>
<div className="flex items-center">
<button className="flex items-center text-gray-600 mr-4">
<FiEye className="mr-2" /> View
</button>
<button className="flex items-center text-gray-600 mr-4">
<FiMessageSquare className="mr-2" /> Reply
</button>
<button className="flex items-center text-gray-600">
<FiThumbsUp className="mr-2" /> Like
</button>
</div>
</div>
</div>
))}
</div>
</div>
<div className="p-6 md:block hidden">
<input
type="text"
value={newQuestion}
onChange={(e) => setNewQuestion(e.target.value)}
placeholder="Type your question here..."
className="mb-4 px-4 py-2 w-full rounded-lg shadow-md focus:outline-none focus:ring focus:ring-blue-400"
/>
<button onClick={handleAddQuestion} className="flex items-center px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition duration-300">
<FiPlus className="mr-2" /> Ask Question
</button>
</div>
</div>
</main>
</div>
);
};

export default CommunityPage;