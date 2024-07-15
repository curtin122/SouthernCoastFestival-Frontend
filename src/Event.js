import App from './App'
import Auth from './Auth'
import Toast from './Toast'

class Event {

    constructor() {
        this.currentUser = {}
        console.log('Event instance created');
        console.log(this.currentUser);
    }

    async getEvents() {
        // fetch json data
        const response = await fetch(`${App.apiBase}/events`, {
            headers: { "Authorization": `Bearer ${localStorage.accessToken}`
        }
        })
        

        // if response not ok
        if(!response.ok) {
            // log error
            const err = await response.json()
            if(err) console.log(err)
            // throw error (exit function)
            throw new Error('Problem getting events - frontend Events.j')
        }

        // convert payload into json - store as data
        const data = await response.json()

        // return data
        return data
    }
    
}

export default new Event()