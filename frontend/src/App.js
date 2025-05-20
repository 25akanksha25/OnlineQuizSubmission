// // import logo from './logo.svg';
// import './App.css';
// import React, { useState } from 'react';

// function App() {

//     const [formData, setFormData] = useState({
//       userId: '',
//       questionId: '',
//       submittedAnswer: ''
//     });
  
//     const handleChange = (e) => {
//       setFormData({ ...formData, [e.target.name]: e.target.value });
//     };
  
//     const handleSubmit = async (e) => {
//       e.preventDefault();
//       const res = await fetch('http://localhost:5000/api/quiz', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData)
//       });
  
//       if (res.ok) {
//         alert('Answer submitted successfully');
//         setFormData({ ...formData, submittedAnswer: '' });
//       } else {
//         alert('Failed to submit answer');
//       }
//     };
    

//     return(
//       // <div className="App">
//       //   <header className="App-header">
//       //     <img src={logo} className="App-logo" alt="logo" />
//       //     <p>
//       //       Edit <code>src/App.js</code> and save to reload.
//       //     </p>
//       //     <a
//       //       className="App-link"
//       //       href="https://reactjs.org"
//       //       target="_blank"
//       //       rel="noopener noreferrer"
//       //     >
//       //       Learn React
//       //     </a>
//       //   </header>
//       // </div>
//       <div>
//       <h2>Question: What is your Birthday Month?</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="userId"
//           placeholder="Enter your User ID"
//           value={formData.userId}
//           onChange={handleChange}
//           required
//         />
//         <br/>
//         <input
//           type="text"
//           name="submittedAnswer"
//           placeholder="Your Answer"
//           value={formData.submittedAnswer}
//           onChange={handleChange}
//           required
//         />
//         <br/>
//         <button type="submit">Submit Answer</button>
//       </form>
//     </div>
//   );
// };

// export default App;


import React from 'react';
import QuizForm from './components/quizform';

const App = () => {
  return (
    <div>
      <h1>Online Quiz Submission</h1>
      <QuizForm />
    </div>
  );
};

export default App;
