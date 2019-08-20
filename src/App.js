import React from 'react'
import { Route, Switch } from 'react-router-dom' 
import Pallete from './Pallete'
import seedColors from './seedColors'
import { generatePallete } from './ColorHelper'

function App() {
  return (
    <Switch>
      <Route exact path='/' render={() => <h1>Pallete List Goes Here!</h1>} />
      <Route exact path='/pallete/:id' render={() => <h1>Individual Pallete</h1>} />
      {/* <div>
        <Pallete pallette={generatePallete(seedColors[4])} />
      </div> */}
    </Switch>
  );
}

export default App;
