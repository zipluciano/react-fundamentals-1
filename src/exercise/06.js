// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react';

// Ex 6
//
// function UsernameForm({ onSubmitUsername }) {
//   function handleSubmit(event) {
//     event.preventDefault();
//     onSubmitUsername(event.target.elements[0].value);
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="username">Username:</label>
//         <input type="text" id="username" />
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// Ex 6 - extra 1

// function UsernameForm({ onSubmitUsername }) {
//   const inputRef = React.useRef();

//   function handleSubmit(event) {
//     event.preventDefault();
//     onSubmitUsername(inputRef.current.value);
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="username">Username:</label>
//         <input type="text" id="username" ref={inputRef} />
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// Ex 6 - extra 2

// function UsernameForm({ onSubmitUsername }) {
//   const inputRef = React.useRef();
//   const [error, setError] = React.useState(null);

//   function handleSubmit(event) {
//     event.preventDefault();
//     onSubmitUsername(inputRef.current.value);
//   }

//   function handleChange(event) {
//     const value = event.target.value;
//     const isValid = value === value.toLowerCase();
//     setError(isValid ? null : 'Username must be lower case');
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="username">Username:</label>
//         <input
//           type="text"
//           id="username"
//           ref={inputRef}
//           onChange={handleChange}
//         />
//         <div style={{ color: 'red' }} role="alert">
//           {error}
//         </div>
//       </div>
//       <button disabled={Boolean(error)} type="submit">
//         Submit
//       </button>
//     </form>
//   );
// }

// Ex 6 - extra 3

function UsernameForm({ onSubmitUsername }) {
  const [username, setUsername] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    onSubmitUsername(username);
  }

  function handleChange(event) {
    setUsername(event.target.value.toLowerCase());
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          onChange={handleChange}
          value={username}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`);
  return <UsernameForm onSubmitUsername={onSubmitUsername} />;
}

export default App;
