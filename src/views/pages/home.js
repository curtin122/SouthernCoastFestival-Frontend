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

    const jumpTo = document.getElementById('jumpTo')
    jumpTo.addEventListener('click', this.scrollTo)
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

  scrollTo() {
    const eventsSection = document.getElementById('events')
    eventsSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  render(){
    const template = html`

      <sc-app-header></sc-app-header>

      <div class="page-content">        
        
        <!--HERO-->
        <div id="home">
          <div class="hero-banner">
            <div id="hero-content">
              <h1>Watch the Light Show</h1>
              <p>Come along to see Geelong's least kept secret, the Festival of Lights</p>
              <p>Over 2,000 bulbs and neons to light up your imagination</p>
              <button id="jumpTo">Find an event</button>
            </div>
          </div>
        </div>

        <!--EVENTS-->
        <!-- use react grid to create events layout -->

        <div id="events">
          <div id="filter-container">
            <!--MAIN FILTERS-->
            <div id="sections-container">
              <button class="section-button">Eat + Drink</button>
              <button class="section-button">Entertainment</button>
              <button class="section-button">Shop</button>
            </div>
            <!--TAGS-->
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

          <!--EVENTS-->
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
        </div>

        <!--VENUE-->
        <div id="venue">

        </div>

        <!--ABOUT-->
        <div id="about">

        </div>
        
      </div>      
    `
    render(template, App.rootEl)

    const cardContainer = document.getElementById('card-container')
    renderReactComponent(eventCard, cardContainer)
  }
}

export default new HomeView()