import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import './ColorBox.css'

export default class ColorBox extends Component {

    constructor(props) {
        super(props)

        this.state = {
            copied: false
        }

        this.handleCopy = this.handleCopy.bind(this)
    }

    handleCopy() {
        this.setState({
                copied: true
            },
            () => {
                setTimeout(() => this.setState({
                    copied: false
                }), 1500)
            })
    }

    render() {
        const { background, name, moreUrl } = this.props
        const { copied } = this.state
        return (
            <CopyToClipboard text={background} onCopy={this.handleCopy}>
                <div className='ColorBox' style={{background}}>
                    <div style={{background}} className={`copy-overlay ${copied && 'show'}`} />
                    <div className={`copy-msg ${copied && 'show'}`}>
                        <h1>copied!</h1>
                        <p>{background}</p>
                    </div>
                    <div className='copy-container'>
                        <div className='box-content'>
                            <span>{name}</span>
                        </div>
                        <button className='copy-button'>Copy</button>
                    </div>
                    <Link to={moreUrl} onClick={e => e.stopPropagation()}>
                        <span className='see-more'>MORE</span>
                    </Link>
                </div>
            </CopyToClipboard>
        )
    }
}
