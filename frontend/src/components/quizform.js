import React, { useState } from 'react';

const QuizForm = () => {
  const [formData, setFormData] = useState({
    userId: '',
    questionId: 'Q1',
    submittedAnswer: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:5000/api/quiz/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    if (res.ok) {
      alert('Answer submitted successfully');
      setFormData({ ...formData, userId :'' , submittedAnswer: '' });
    } else {
      alert('Failed to submit answer');
    }
  };

  return (
    <div>
      <h2>Question: What is your Birthday Month?</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="userId"
          placeholder="Enter your User ID"
          value={formData.userId}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="submittedAnswer"
          placeholder="Your Answer"
          value={formData.submittedAnswer}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit Answer</button>
      </form>
    </div>
  );
};

export default QuizForm;
