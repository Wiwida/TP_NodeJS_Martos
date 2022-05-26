import { HashRouter, Switch, Route } from "react-router-dom"
import { Auth, Profile, FindTicketForm, BookTicket, PNRStatus } from "./Pages"
import { Navbar, Footer } from "./Components"
import "materialize-css/dist/css/materialize.min.css"
import "./app.css"

function App() {
    return (
        <HashRouter>
            <div className="bg">
                <Navbar />
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={Profile} />
                        <Route
                            exact
                            path="/ticket_find"
                            component={FindTicketForm}
                        />
                        <Route
                            exact
                            path="/ticket_book/:state/:id"
                            component={BookTicket}
                        />
                        <Route exact path="/pnr_status" component={PNRStatus} />
                        <Route exact path="/auth" component={Auth} />
                    </Switch>
                </div>
                <Footer />
            </div>
        </HashRouter>
    )
}

export default App

// <Route exact path='/ticket_list' component={TicketList}/>
