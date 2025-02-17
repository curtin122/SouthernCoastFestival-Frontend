// import views
import homeView from './views/pages/home'
import errorView from './views/pages/404'

// define routes
const routes = {
    '/': homeView,
    '404': errorView 
}

class Router {
    constructor() {
        this.routes = routes
    }

    init() {
        // initial call
        this.routes(window.location.pathname)

        // on back/forward
        window.addEventListener('popstate', () => {
            this.routes(window.location.pathname)
        })
    }

    route(fullPathname) {
        // extract path without params
        const pathname = fullPathname.split('?')[0]
        const route = this.routes[pathname]

        if(route) {
            // if route exists, run init() of the view
            this.routes[window.location.pathname].init()
        } else {
            // show 404 view
            this.routes['404'].init()
        }
    }

    gotoRoute(pathname) {
        window.history.pushState({}, window.location.origin + pathname)
        this.route(pathname)
    }
}

// create appRouter instance and export
const AppRouter = new Router()
export default AppRouter

// programmatically load any route
export function gotoRoute(pathname) {
    AppRouter.gotoRoute(pathname)
}

// allows anchor <a> links to load route
export function anchorRoute(e) {
    e.preventDefault()
    const pathname = e.target.closest('a').pathname
    AppRouter.gotoRoute(pathname)
}