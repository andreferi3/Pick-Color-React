import React, { Component } from 'react'
import Select from '@material-ui/core/Select'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import { MenuItem, IconButton, Slide } from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import './Navbar.css'

export default class Navbar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            format: 'hex',
            open: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.closeSnackbar = this.closeSnackbar.bind(this)
    }

    handleChange(e) {
        this.setState({ format: e.target.value, open: true })
        this.props.handleChange(e.target.value)
    }

    closeSnackbar() {
        this.setState({ open: false })
    }

    SlideTransition(props) {
        return <Slide {...props} direction='up' />
    }

    render() {
        const { level, changeLevel } = this.props
        const { format, open } = this.state

        return (
            <header className='Navbar'>
                <div className='logo'>
                    <a href='#'>reactcolor</a>
                </div>
                <div className='slider-container'>
                    <span>Level : {level}</span>
                    <div className='slider'>
                        <Slider 
                            defaultValue={level} 
                            min={100} 
                            max={900} 
                            onChange={changeLevel}
                            step={100} 
                        />
                    </div>
                </div>
                <div className='select-container'>
                    <Select onChange={this.handleChange} value={format}>
                        <MenuItem value='hex'>HEX - #ffffff</MenuItem>
                        <MenuItem value='rgb'>RGB - rgb(255,255,255)</MenuItem>
                        <MenuItem value='rgba'>RGBA = rgba(255,255,255,1)</MenuItem>
                    </Select>
                </div>
                <Snackbar 
                    anchorOrigin={{ vertical: 'bottom', horizontal:'left' }} 
                    open={open} 
                    TransitionComponent={this.SlideTransition}
                    autoHideDuration={3000} 
                    message={<span id='message-id'>Format Changed to {format.toUpperCase()}!</span>} 
                    ContentProps={{ 'aria-describedby': 'message-id' }} 
                    action={[
                        <IconButton
                            key='close'
                            aria-label='close'
                            color='inherit'
                            onClick={this.closeSnackbar}>
                            <CloseIcon />
                        </IconButton>
                    ]}
                    onClose={this.closeSnackbar}
                />
            </header>
        )
    }
}
