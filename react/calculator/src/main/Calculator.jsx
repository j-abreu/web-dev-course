import React, {Component} from 'react'
import './Calculator.css'
import Button from '../components/Button'
import Display from '../components/Display'

const initialState = {
    display: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0
}

export default class Calculator extends Component {

    state = {...initialState}

    constructor (props){
        super(props)
        this.clearMemory = this.clearMemory.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.writeDigit = this.writeDigit.bind(this)
    }

    clearMemory () {
        this.setState({...initialState})
    }

    setOperation(op) {
        const ops = {
            '+' : (a, b) => a + b,
            '-' : (a, b) => a - b,
            'x' : (a, b) => a * b,
            '/' : (a, b) => {
                if (b === 0) return 'error'
                return a/b;
            }
        }


        if (op === '=' && this.state.current === 1) {
            const display = `${+ops[this.state.operation](...this.state.values).toFixed(7)}`
            const clearDisplay = true
            const values = [0, 0]
            const current = 0
            const operation = null

            this.setState({display, clearDisplay, values, current, operation})
            return
        }

        if (op !== '=' && this.state.current === 0) {
            const operation = op
            const current = 1
            const clearDisplay = true
            this.setState({operation, current, clearDisplay})
            return
        }

        if (op !== '=' && this.state.current === 1) {
            const display = `${+ops[this.state.operation](...this.state.values).toFixed(7)}`
            const clearDisplay = true;
            const operation = op
            const values = [parseFloat(display), 0]
            this.setState({values, display, clearDisplay, operation})
        }
    }

    writeDigit(digit) {
        if (digit === '.' && this.state.display.includes('.')) return
        
        const clearDisplay = this.state.display === '0' && digit != '.' || this.state.clearDisplay
        const curValue = clearDisplay ? '' : this.state.display
        const display = curValue + digit
        this.setState({display, clearDisplay: false})

        if (digit !== '.') {
            const i = this.state.current
            const newValue = parseFloat(display)
            const values = [...this.state.values]
            values[i] = newValue
            this.setState({values})
        }
    }

    render() {
        return (
            <div className="calculator">
                <Display value={this.state.display}/>
                <Button label='AC' click={this.clearMemory} triple/>
                <Button label='/' click={this.setOperation} operation/>
                <Button label='7' click={this.writeDigit}/>
                <Button label='8' click={this.writeDigit}/>
                <Button label='9' click={this.writeDigit}/>
                <Button label='x' click={this.setOperation} operation/>
                <Button label='4' click={this.writeDigit}/>
                <Button label='5' click={this.writeDigit}/>
                <Button label='6' click={this.writeDigit}/>
                <Button label='-' click={this.setOperation} operation/>
                <Button label='1' click={this.writeDigit}/>
                <Button label='2' click={this.writeDigit}/>
                <Button label='3' click={this.writeDigit}/>
                <Button label='+' click={this.setOperation} operation/>
                <Button label='0' click={this.writeDigit} double/>
                <Button label='.' click={this.writeDigit}/>
                <Button label='=' click={this.setOperation} operation/>

            </div>
        )
    }
}