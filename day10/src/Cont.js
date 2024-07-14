import './App.css';
import React from 'react';
import Context1 from './usecontext/context1'
import Context2 from './usecontext/context2'
export const userName=React.createContext();
export const idName=React.createContext();
function App() {
  return (
    <div>
      <userName.Provider value={'SHAINY'}>
        <idName.Provider value={'101'}>
      <Context1/>
      <Context2/>
      </idName.Provider>
      </userName.Provider>   
    </div>
  );
}

export default App;
