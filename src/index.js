import React from 'react'
import App from './App'
import { createRoot } from 'react-dom/client'

// render React components
function NavigationBar() {
    return <h1>Hello!</h1>
}

//const domNode = document.getElementById('navigation')
//const root = createRoot(domNode)
//root.render(<NavigationBar />)

// components
import './components/sc-app-header'
import './components/sc-app-footer'

// styles
import './scss/master.scss'

// app.init
document.addEventListener('DOMContentLoaded', () => {
    App.init()
})