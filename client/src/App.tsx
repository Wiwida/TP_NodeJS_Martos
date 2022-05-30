import "materialize-css/dist/css/materialize.min.css"
import "./App.css"
import "./style/Cards.css"
import "./style/Navbar.css"
import "./style/Profile.css"
import "./style/PNRStatus.css"
import "./style/FindBookTicket.css"
import "./style/Auth.css"
import "./style/Loader.css"

import { Auth, BookTicket, FindTicketForm, PNRStatus, Profile } from "./Pages"
import { Footer, Navbar } from "./Components"
import { HashRouter, Route, Switch } from "react-router-dom"

function App() {
    return (
        <HashRouter>
            <div className="bg">
                <Navbar />
                <div>
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
