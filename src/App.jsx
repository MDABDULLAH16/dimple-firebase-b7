import { useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import "./App.css";
import app from "./firebase/firebase.init";

function App() {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const loggedUser = result.user;
        setUser(loggedUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const githubProvider = new GithubAuthProvider();
  const handleGithubSingIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const loggedUser = result.user;
        setUser(loggedUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.log(errorf);
      });
  };
  return (
    <div>
      <h1>Dimple_Firebase + React</h1>
      <div className="card">
        {user && <h1>Name: {user.displayName}</h1>}

        <div>
          {user ? (
            <button onClick={handleSignOut}>SignOut</button>
          ) : (
            <div>
              <button onClick={handleGoogleSignIn}>Google </button>
              <button onClick={handleGithubSingIn}>GitHub</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
