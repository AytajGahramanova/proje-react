import React from 'react'
import Header from './components/Header';
import About from "./components/About";
import Steps from "./components/Steps";

const App = () => {
  return (
    <div>
      <Header />
      <About />
      <Steps />
      {/* |<Footer /> */}
    </div>
  )
}

export default App