import React, {useEffect} from 'react';

const SignInWithGoogleHTML = ({
    clientId = '',
    loginEndpoint = 'https://your.domain/your_login_endpoint',
    callback = (e) => console.log('cb', {e}),
    styleOptions = {},
    reduceFriction = false, // reduce friction and improve sign-in rates when displaying a Sign In With Google button and Google One Tap on the same page
    gsiClientScriptUrl = null,
}) => {
    useEffect(() => {
        // load script: https://accounts.google.com/gsi/client
        if (!window.google) {
            const tag = document.createElement('script');
            tag.async = true;
            tag.src = gsiClientScriptUrl || 'https://accounts.google.com/gsi/client';
            const body = document.getElementsByTagName('body')[0];
            body.appendChild(tag);
        }
    }, []);

    return (
        <React.Fragment>
            <div id="g_id_onload"
                data-client_id={clientId}
                data-login_uri={loginEndpoint}
                data-callback={callback}
                data-auto_prompt={reduceFriction}
            >
            </div>
            <div className="g_id_signin"
                data-type={styleOptions.type || 'standard'}
                data-size={styleOptions.size || 'large'}
                data-theme={styleOptions.theme || 'outline'}
                data-text={styleOptions.text || 'sign_in_with'}
                data-shape={styleOptions.shape || 'rectangular'}
                data-logo_alignment={styleOptions.logo_alignment || 'left'}
            >
            </div>
        </React.Fragment>
    );
}

export default SignInWithGoogleHTML;