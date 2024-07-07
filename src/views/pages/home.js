import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'

class HomeView {
  init(){
    document.title = 'Home'    
    this.render()    
    Utils.pageIntroAnim()
  }

  render(){
    const template = html`

      <sc-app-header></sc-app-header>

      <div class="page-content">        
        <h1>Page title</h1>
        <p>Page content ...</p>
        
      </div>      
    `
    render(template, App.rootEl)
  }
}

export default new HomeView()