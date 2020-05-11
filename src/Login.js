import React, { useState } from "react";
import FormControl from "react-bootstrap/FormControl";
import Logo from './logo.svg';
import FormGroup from "react-bootstrap/FormGroup";
import Button from "react-bootstrap/Button";

export default function Login() {
    {/* setting up the email */}
    const [email, setEmail] = useState("");

    return (
        <div className="Login">
            {/* form beginning */}
            <form>
                <div id="logo">
                    <img src={Logo} alt="Green Logo" />
                </div>

                <h1>Example login screen</h1>
                <h2>Getting started with Green.</h2>
                
                {/* email field */}
                <FormGroup controlId="email" bsSize="large">
                    <label id="emailAddress">Email Address</label>
                    <div><FormControl
                        autoFocus
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    /></div>
                </FormGroup>

                {/* "remember this device" checkbox */}
                <FormGroup controlId="rememberCheckbox">
                    <input type="checkbox"
                        id="remember"
                        class="checkbox"
                        value="remember"
                    />
                    <label for="remember"
                        id="rememberThisDevice">
                        Remember this device
                </label>
                </FormGroup>

                {/* sign in button */}
                <div id="signIn">
                    <Button type="submit">
                        Sign In
                    </Button>
                </div>
            </form>
        </div>


    );
}
