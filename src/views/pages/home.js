import App from '../../App'
import {html, render } from 'lit-html'
import {gotoRoute, anchorRoute} from '../../Router'
import Auth from '../../Auth'
import Utils from '../../Utils'
import Event from '../../Event'
import Toast from '../../Toast'

import * as React from 'react'
import { renderReactComponent } from '../../components/react/reactHelper'
import eventCard from '../../components/react/sc-event-card'

class HomeView {
  init(){
    console.log('HomeView.init')
    document.title = 'Home'    
    this.render()    
    Utils.pageIntroAnim()
  }

  async getEvents() {
    try {
      this.events = await Event.getEvents()
      console.log(this.events)
      this.render()
    } catch (err) {
      Toast.show(err, 'error')
    }
  }

  render(){
    const template = html`

      <sc-app-header></sc-app-header>

      <div class="page-content">        
        
        <!--HERO-->
        <div class="hero-banner">
          <div id="hero-content">

          </div>
        </div>

        <!--EVENTS-->
        <!-- use react grid to create events layout -->

        <div id="filter-container">
          <div id="sections-container">
            <button class="section-button">Eat + Drink</button>
            <button class="section-button">Entertainment</button>
            <button class="section-button">Shop</button>
          </div>
          <div id="tag-container">
            <button class="tag-button">All</button>
            <button class="tag-button">Drinks</button>
            <button class="tag-button">Food</button>
            <button class="tag-button">Alcholic</button>
            <button class="tag-button">Gluten Free</button>
            <button class="tag-button">Nut Free</button>
            <button class="tag-button">Gourmet</button>
            <button class="tag-button">
              <span class="material-icons">favorite_border</span>
              Favourites
            </button>
            <!-- <button class="tag-button"></button> -->
            <p class="message">Showing all __ items</p>
          </div>
        </div>
        <div class="events-grid">
          <div id="card-container"></div>
        </div>

        <div class="event-grid">
          ${this.events == null ? html`
              <Skeleton variant="rectangular" width={210} height={118} />
            ` : html`
              ${this.events.map(event => html`
                <sc-event class="event-card"
                  name="${event.name}",
                  description="${event.description}",
                  image="${event.image}",
                  length="${event.length}",
                  artist="${event.artist}"
              `)}
            `}
        </div>

        <!--VENUE-->

        <!--ABOUT-->
        
      </div>      
    `
    render(template, App.rootEl)

    const cardContainer = document.getElementById('card-container')
    renderReactComponent(eventCard, cardContainer)
  }
}

export default new HomeView()