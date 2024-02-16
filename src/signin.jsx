function SignIn(){
  const signInWithGoogle=()=>{
    const provider=new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  return(<button onclick={signInWithGoogle}> Sign in with Google</button>)
}
export default SignIn;