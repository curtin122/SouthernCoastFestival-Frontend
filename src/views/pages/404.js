import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'

class ErrorView {
  init(){
    console.log('ErrorView.init')
    document.title = '404 File not found'    
    this.render()    
  }

  render(){
    const template = html`
      <div>        
        <h1>Oops!</h1>
        <p>Sorry, we couldn't find that.</p>
      </div>      
    `
    render(template, App.rootEl)
  }
}

export default new ErrorView()