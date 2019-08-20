import React, { Component } from 'react'
import ColorBox from './ColorBox'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import './Pallete.css'

export default class Pallete extends Component {
    constructor(props) {
        super(props)

        this.state = {
            level: 500
        }

        this.changeLevel = this.changeLevel.bind(this)
    }

    changeLevel(level) {
        this.setState({ level })
    }

    render() {
        const {level} = this.state
        const {colors} = this.props.pallette
        const colorBoxes = colors[level].map(color => (
            <ColorBox background={color.hex} name={color.name} />
        ))
        return (
            <div className='Pallete'>
            <div className='slider'>
                <Slider 
                    defaultValue={level} 
                    min={100} 
                    max={900} 
                    onAfterChange={this.changeLevel} 
                    step={100} 
                />
            </div>
                <div className='Pallete-colors'>
                    {colorBoxes}
                </div>
            </div>
        )
    }
}
