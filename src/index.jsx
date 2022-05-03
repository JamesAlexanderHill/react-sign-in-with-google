import React from 'react';
import { render } from 'react-dom';
import Example from './components/Example';
import SignInWithGoogleHTML from './components/sign-in-with-google-html';
import SignInWithGoogleJS from './components/sign-in-with-google-js';

render(<Example />, document.getElementById('root'));
// render(<SignInWithGoogleHTML
//     clientId='656653743543-29qkjc65jhektto1u0tss6j7olqepmc0.apps.googleusercontent.com'
// />, document.getElementById('root'));

// render(<SignInWithGoogleJS
//     clientId='656653743543-29qkjc65jhektto1u0tss6j7olqepmc0.apps.googleusercontent.com'
// />, document.getElementById('root'));
