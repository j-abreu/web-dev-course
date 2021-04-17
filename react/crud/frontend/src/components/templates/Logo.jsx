import React from 'react'
import logo from '../../assets/imgs/logo.png'
import './Logo.css'


export default class Logo extends React.Component{

    state = {
        rotationDegrees: 0
    }

    constructor(props) {
        super(props)
        this.rotate = this.rotate.bind(this)
        this.rotate()
    }

    rotate() {
        setInterval(() => {
            const rotationDegrees = this.state.rotationDegrees + 0.2
            this.setState({rotationDegrees})
        }, 10)
    }

    

    render() {
        const rotation = this.state.rotationDegrees
        return (
            <aside className='logo'>
                <img src={logo} alt="logo" style={{transform: `rotate(${rotation}deg)`}}/>
            </aside>
        )
    }
    
}