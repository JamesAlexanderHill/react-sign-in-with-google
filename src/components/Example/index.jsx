import React, { useState } from 'react';
import jwt_decode from "jwt-decode";

import SignInWithGoogleJS from '../sign-in-with-google-js';

export default function Example() {
	const [user, setUser] = useState(0);
	const clientId = '656653743543-29qkjc65jhektto1u0tss6j7olqepmc0.apps.googleusercontent.com';
	const handleGoogleSignin = (args) => {
		// not recomended use of component
		console.log('handleGoogleSignin', args);
		const jwt = args.credential;
		setUser(jwt_decode(jwt));

		/**
		 * You should be sending the returned JWT to your server to be verified by https://github.com/google/google-auth-library-nodejs
		 * Once verified you can send back a user profile associated with that email
		 */
	}

	return (
		<div>
			{user
				? (<div>Welcome {user.name}</div>)
				: (
					<SignInWithGoogleJS
						clientId={clientId}
						handleGoogleSignIn={handleGoogleSignin}
						promptOneTap={true}
					/>
				)
			}
		</div>
	);
}
