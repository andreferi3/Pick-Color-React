import React from 'react'
import Pallete from './Pallete'
import seedColors from './seedColors'
import { generatePallete } from './ColorHelper'

function App() {
  console.log(generatePallete(seedColors[4]))
  return (
    <div>
      <Pallete {...seedColors[4]} />
    </div>
  );
}

export default App;
