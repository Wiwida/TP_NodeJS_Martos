import Logo from "../../Assets/logo.png"
import classes from "./Auth.module.css"

const Auth = () => {
    return (
        <div className="row valign-wrapper" style={{ height: "80vh" }}>
            <div className="col m6">
                <img className={classes.Logo} src={Logo} alt="logo" />
            </div>
            <div className="col m6">
                <div className={classes.FormContainer}>
                    <h3>LOGIN</h3>
                    <br />
                    <div className="input-field">
                        <input
                            id="email_id"
                            type="email"
                            className="validate"
                        />
                        <label htmlFor="email_id">Email Id ...</label>
                    </div>
                    <div className="input-field">
                        <input id="pass" type="password" className="validate" />
                        <label htmlFor="pass">Password ...</label>
                    </div>
                    <button
                        className={`${classes.BtnWide} waves-effect waves-light btn purple darken-4`}
                    >
                        LOGIN
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Auth
