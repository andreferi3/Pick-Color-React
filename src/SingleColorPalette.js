import React, { Component } from 'react'
import ColorBox from './ColorBox'

export default class SingleColorPalette extends Component {
    constructor(props) {
        super(props)

        this._shades = this.gatherShades(this.props.palette, this.props.colorId)
        console.log(this._shades)
    }

    gatherShades(palette, colorToFilterBy) {
        let shades = []
        let allColors = palette.colors
        
        for(let key in allColors) {
            shades = shades.concat(
                allColors[key].filter(color => color.id === colorToFilterBy)
            )
        }

        return shades.slice(1)
    }
    render() {
        const colorBoxes = this._shades.map(color => (
            <ColorBox key={color.id} name={color.name} background={color.hex} showLink={false} />
        ))
        return (
            <div className='Pallete'>
                <h1>Single Color Page</h1>
                <div className='Pallete-colors'>{colorBoxes}</div>
            </div>
        )
    }
}
