import React from 'react'
import ReactDOM from 'react-dom'
import Primeiro, { Segundo } from './component'

ReactDOM.render(
  <div>
    <Primeiro value='componente!'/>
    <Segundo value='componente!'/>
  </div>
, document.getElementById('app'))