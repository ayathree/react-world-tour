
import { GithubAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import './App.css'
import Countries from './assets/components/Countries/Countries'
import auth from './firebase.config';
import { useState } from 'react';

function App() {

  const GitHubProvider = new GithubAuthProvider();
  const[user, setUser]=useState(null);

  const handleGithubSignIn=()=>{
    signInWithPopup(auth, GitHubProvider)
    .then(result=>{
        const loggedInUser = result.user;
        console.log(loggedInUser)
        setUser(loggedInUser)
    })
    .catch(error=>{
        console.log(error)
    })
  }

  //   const handleLogOut=()=>{
  //     signOut(auth)
  //     .then(result=>{
  //         console.log(result);
  //         setUser(null)
  //     })
  //     .catch(error=>{
  //         console.log(error)
  //     })
  // }

  const logOut =()=>{
    signOut(auth)
    .then(result=>{
      console.log(result);
      setUser(null)
    })
    .catch(error=>{
      console.log(error)
    })
  }


  

  return (
    <>
      <h1>React World fantastic Tour!!!</h1>
      {user?
            <button onClick={logOut}>Sign out</button>:
            <div>
                
                <button onClick={handleGithubSignIn}>Github Login</button>
            </div>
           }
           {user && <div>
           <h2>User:{user.displayName}</h2>
           <p>{user.email}</p>
           <img src={user.photoURL} alt="" />
           </div>

           }
      <Countries></Countries>
    </>
  )
}

export default App
