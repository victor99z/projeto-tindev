import React, { useState } from 'react';
import './Login.css';

import api from '../services/api';
import logo from '../assets/logo.svg';

export default function Login({ history }){
	const [username, setUsername] = useState('');

	async function handleSubmit(e){
		e.preventDefault();

		const response = await api.post('/devs', {
			username, // short sytax ES6
		});

		console.log(response.data._id);

		const { _id } = response.data;

		history.push(`/dev/${_id}`);
	}

    return (
        <div className="login-container">
            <form onSubmit={ handleSubmit }>
            	<img src={logo} alt="tindev"/>
					<input 
						type="text"
						placeholder="Digite seu usuário do Github"
						value={username}
						onChange={e => setUsername(e.target.value)}
					/>
					<button type="submit">Enviar</button>
            </form>
        </div>
    );
} 