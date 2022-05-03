## Install ##
`npm install react-sign-in-with-google` or `yarn add react-sign-in-with-google`

## How to use ##
```
import React from 'react';
import ReactDOM from 'react-dom';
import { SignInWithGoogle } from 'react-sign-in-with-google';

function App() {
    const responseGoogle = (args) => {
        console.log('responseGoogle', args)
        /**
        * args.credential contains a JWT.
        * You should be sending this jwt to your server to be verified using the following guide provided by Google:
        * https://developers.google.com/identity/gsi/web/guides/verify-google-id-token
        * 
        * Alternativly they also provide the following guide for handling this on your client side
        * (Note that this wont verify the integrity of the JWT, just decode it)
        * https://developers.google.com/identity/gsi/web/guides/handle-credential-responses-js-functions
        * https://www.npmjs.com/package/jwt-decode
        */
    };

    return (
        <div className="App">
            <SignInWithGoogle
                clientId={GOOGLE_CLIENT_ID}
                handleGoogleSignIn={responseGoogle}
            />
        </div>
    );
}
```