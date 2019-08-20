import React from 'react'
import { Route, Switch } from 'react-router-dom' 
import Palette from './Pallete'
import seedColors from './seedColors'
import { generatePalette } from './ColorHelper'

class App extends React.Component {

  findPalette(id) {
    return seedColors.find(function(palette) {
      return palette.id === id
    })
  }

  render() {
    return (
      <Switch>
        <Route exact path='/' render={() => <h1>Pallete List Goes Here!</h1>} />
        <Route exact path='/palette/:id' render={(routeProps) => <Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))} />} />
      </Switch>
    )
  }
}

export default App;
