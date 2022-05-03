const SignInWithGoogle = ({
    buttonId = 'buttonDiv',
    clientId = '',
    handleGoogleSignIn = (args) => console.log('handleGoogleSignIn', {args}),
    gsiClientScriptUrl = null, // overwrite default gsiScript
    styleOptions = { theme: "outline", size: "large" },
    promptOneTap = false, // Optionally display the One Tap dialog

}) => {
    useEffect(function onmount() {
        const initGsi = () => {
            window.google.accounts.id.initialize({
                client_id: clientId,
                callback: handleGoogleSignIn,
            });

            window.google.accounts.id.renderButton(
                document.getElementById(buttonId),
                styleOptions
            );

            if (!promptOneTap) return;
            window.google.accounts.id.prompt();
        }

        const script = document.createElement("script");
        script.src = gsiClientScriptUrl || 'https://accounts.google.com/gsi/client';
        script.onload = initGsi;
        script.async = true;
        script.id = 'google-identity-services-client-script';
        document.querySelector("body")?.appendChild(script);

        return function unmount() {
            window.google?.accounts.id.cancel();
            document.getElementById('google-identity-services-client-script')?.remove();
        }
    }, []);

    return (
        <div id={buttonId}></div> 
    );
}

export default SignInWithGoogle;