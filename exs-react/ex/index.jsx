import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(
  <div>
    <Family lastName='Silva'>
      <Member name='José' />
      <Member name='Maria' />
      <Member name='João' />
      <Member name='Pedro' />
    </Family>
  </div>
, document.getElementById('app'))