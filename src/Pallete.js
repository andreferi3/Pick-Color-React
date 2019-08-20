import React, { Component } from 'react'
import ColorBox from './ColorBox'
import Navbar from './Navbar'
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
                <Navbar level={level} changeLevel={this.changeLevel} />

                <div className='Pallete-colors'>
                    {colorBoxes}
                </div>
            </div>
        )
    }
}
