import React from 'react';
import About from './components/About';
import Layout from './components/Layout';
import Home from './components/LandingPage';
import Team from './components/Team';


function App() {
  return (
    <div className="App">
       <p data-testid="learn react" style={{ display: "none" }}/>
       <Layout>
        <Home/>
     <About />
    
     < Team />
     </Layout >
    </div>
  );
}

export default App;




