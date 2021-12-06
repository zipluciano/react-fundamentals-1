// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react';
import '../box-styles.css';

// Without Box component
//
// const styleSmall = { fontStyle: 'italic', backgroundColor: 'lightblue' };
// const styleMedium = { fontStyle: 'italic', backgroundColor: 'pink' };
// const styleLarge = { fontStyle: 'italic', backgroundColor: 'orange' };

// const smallBox = (
//   <div className="box box--small" style={styleSmall}>
//     small lightblue box
//   </div>
// );
// const mediumBox = (
//   <div className="box box--medium" style={styleMedium}>
//     medium pink box
//   </div>
// );
// const largeBox = (
//   <div className="box box--large" style={styleLarge}>
//     large orange box
//   </div>
// );

// function App() {
//   return (
//     <div>
//       {smallBox}
//       {mediumBox}
//       {largeBox}
//     </div>
//   );
// }

function Box(props) {
  const { size, children, style } = props;

  return (
    <div
      className={`box box--${size}`}
      style={{ fontStyle: 'italic', ...style }}
    >
      {children}
    </div>
  );
}

function App() {
  return (
    <div>
      <Box size="small" style={{ backgroundColor: 'lightblue' }}>
        small lightblue box
      </Box>
      <Box size="medium" style={{ backgroundColor: 'pink' }}>
        medium pink box
      </Box>
      <Box size="large" style={{ backgroundColor: 'orange' }}>
        large orange box
      </Box>
    </div>
  );
}

export default App;
