import React from "react";
import Logo from './logo.svg';

export default function Login() {
    {/* setting up constants */}
    const [email, setEmail] = React.useState("");
    const [rememberDevice, setRememberDevice] = React.useState(false);

    return (
        <form>
            <div className="Login">
                <div id="logo">
                    <img src={Logo} alt="Green Logo" />
                </div>
                {/* setting up the headers */}
                <h1>Example login screen</h1>
                <h2>Getting started with Green.</h2>

            {/* setting up the email */}
            <label id="emailAddress">
                    Email Address
            <input id="email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
            />
            </label>

            {/* setting up the checkbox */}
            <label id="rememberThisDevice">
                <input id="remember"
                    name="acceptedTerms"
                    type="checkbox"
                    value={rememberDevice}
                    onChange={e => setRememberDevice(e.target.value)}
                />
                    Remember this device
            </label>

            {/* setting up submit button */}
                <button
                    type="submit">
                    Submit
                </button>
            </div>
        </form>
    );
}
