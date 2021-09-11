import React, {useEffect} from 'react';
import {onAuthStateChanged} from 'firebase/auth';

import {auth, firebaseSignIn} from '../firebase';

export default function Login() {

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('Authenticated user detected:', user);
      } else {
        console.log('No authenticated session found.');
      }
    });
  }, []);

  const login = async (form) => {
    form.preventDefault();

    const email = form.target[0].value;
    const password = form.target[1].value;

    firebaseSignIn(email, password).then((response) =>
      console.log('sign in response:', response),
    );
  };

  return (
    <form onSubmit={login}>
      <h3>Log in</h3>
      <div className="form-group">
        <label>Email</label>
        <input type="email" className="form-control" placeholder="Enter email"/>
      </div>
      <div className="form-group">
        <label>Password</label>
        <input type="password" className="form-control" placeholder="Enter password"/>
      </div>
      <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
    </form>
  );


}
