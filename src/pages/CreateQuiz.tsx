import React, { useState } from 'react';

const CreateQuiz = () => {
  const [isAdmin, setIsAdmin] = useState(
    localStorage.getItem('adminAuthenticated') === 'true'
  );
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [questions, setQuestions] = useState([
    { question: '', options: ['', '', '', ''], correctAnswer: '' },
  ]);
  const [error, setError] = useState('');

  const handleAddQuestion = () => {
    setQuestions([
      ...questions,
      { question: '', options: ['', '', '', ''], correctAnswer: '' },
    ]);
  };

  const handleQuestionChange = (index, field, value) => {
    const updatedQuestions = [...questions];
    if (field === 'question') {
      updatedQuestions[index].question = value;
    } else if (field.startsWith('option')) {
      const optionIndex = parseInt(field.replace('option', ''), 10);
      updatedQuestions[index].options[optionIndex] = value;
    } else if (field === 'correctAnswer') {
      updatedQuestions[index].correctAnswer = value;
    }
    setQuestions(updatedQuestions);
  };

  const handleSubmit = () => {
    if (!title || !description) {
      setError('Title and description are required.');
      return;
    }

    if (
      questions.some(
        (q) =>
          !q.question ||
          q.options.some((opt) => !opt) ||
          !q.correctAnswer ||
          !q.options.includes(q.correctAnswer)
      )
    ) {
      setError(
        'Each question must have text, four options, and a valid correct answer.'
      );
      return;
    }

    setError('');
    const quizData = { title, description, questions };

    console.log('Quiz Data:', quizData);
    // Submit quizData to your backend or process it further
  };

  if (!isAdmin) {
    return <h1 className="text-center text-red-500">Admin access required.</h1>;
  }

  return (
    <div className="min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Create a Quiz</h1>

      <div className="mb-4">
        <label className="block font-semibold">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-4 py-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block font-semibold">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-4 py-2 border rounded"
        />
      </div>

      <h2 className="text-xl font-semibold mt-4 mb-2">Questions</h2>
      {questions.map((question, index) => (
        <div key={index} className="mb-4 border p-4 rounded">
          <label className="block font-semibold">Question {index + 1}</label>
          <input
            type="text"
            value={question.question}
            onChange={(e) =>
              handleQuestionChange(index, 'question', e.target.value)
            }
            className="w-full px-4 py-2 border rounded mb-2"
            required
          />

          {question.options.map((option, optIndex) => (
            <div key={optIndex} className="mb-2">
              <label className="block font-semibold">
                Option {optIndex + 1}
              </label>
              <input
                type="text"
                value={option}
                onChange={(e) =>
                  handleQuestionChange(index, `option${optIndex}`, e.target.value)
                }
                className="w-full px-4 py-2 border rounded"
                required
              />
            </div>
          ))}

          <label className="block font-semibold mt-2">
            Correct Answer (must match one of the options)
          </label>
          <input
            type="text"
            value={question.correctAnswer}
            onChange={(e) =>
              handleQuestionChange(index, 'correctAnswer', e.target.value)
            }
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>
      ))}

      <button
        onClick={handleAddQuestion}
        className="px-4 py-2 bg-blue-500 text-white rounded mt-2"
      >
        Add Question
      </button>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      <button
        onClick={handleSubmit}
        className="w-full px-4 py-2 bg-green-500 text-white rounded mt-4"
      >
        Create Quiz
      </button>
    </div>
  );
};

export default CreateQuiz;
