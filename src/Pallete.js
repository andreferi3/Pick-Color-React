import React, { Component } from 'react'
import ColorBox from './ColorBox'
import Navbar from './Navbar'
import './Pallete.css'

export default class Pallete extends Component {
    constructor(props) {
        super(props)

        this.state = {
            level: 500,
            format: 'hex'
        }

        this.changeLevel = this.changeLevel.bind(this)
        this.changeFormat = this.changeFormat.bind(this)
    }

    changeLevel(level) {
        this.setState({ level })
    }

    changeFormat(value) {
        this.setState({
            format: value
        })
    }

    render() {
        const {level, format} = this.state
        const {colors, paletteName, emoji, id} = this.props.palette
        const colorBoxes = colors[level].map(color => (
            <ColorBox background={color[format]} name={color.name} key={color.id} moreUrl={`/palette/${id}/${color.id}`} showLink={true} />
        ))
        return (
            <div className='Pallete'>
                <Navbar level={level} changeLevel={this.changeLevel} handleChange={this.changeFormat} />

                <div className='Pallete-colors'>
                    {colorBoxes}
                </div>

                <footer className='Pallete-footer'>
                    {paletteName}
                    <span className='emoji'>{emoji}</span>
                </footer>
            </div>
        )
    }
}
