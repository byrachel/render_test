import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function Login() {

  const [ login, setLogin ] = useState('');
  const [ password, setPassword ] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
		const loginData = {
			user: {
				login: login,
				password: password
			}
    };
    console.log(loginData)
    axios.post('/api/v1/login', loginData)
        .then(res => {
            history.push('/homeList')
        })
        .catch(err => { console.log(err)
        });
	};

  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="login">Identifiant</label>
        <input
            type="text"
            id="login"
            name="login"
            onChange={(e) => setLogin(e.target.value)}
        />
        <label htmlFor="password">Mot de passe</label>
        <input
            type="password"
            id="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">
            Me connecter
        </button>
    </form>
  );
}

export default Login;
