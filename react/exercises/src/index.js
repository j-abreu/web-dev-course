import React from 'react'
import ReactDOM from 'react-dom'

import Greeting from './components/greeting'


ReactDOM.render(
  <div>
    <Greeting name="Jeremias" type="hello"/>
  </div>,
  document.getElementById('root'))