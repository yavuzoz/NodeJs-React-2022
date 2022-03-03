import React from 'react';
import NavComp from './components/NavComp';
import ClockComp from './components/ClockComp';

function App() {
  return (
    <>
    <div className="App">
      <div class=" d-flex flex-column m-3">
      <NavComp/>
      <ClockComp/>
     </div>
    </div>
    </>
  );
}

export default App;
