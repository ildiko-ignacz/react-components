import React from 'react';
import './styles/main.scss'
import './styles/style-reset.scss'

import Stats from "./components/Stats";
import StatsSmall from "./components/StatsSmall";
import Button from "./components/Button";


function App() {

  return (
    <div className="card">

      <h1>All time received</h1>
      <Stats/>
      <div className="h-line"/>
      <StatsSmall/>
      <Button/>

    </div>
  );

}

export default App;
