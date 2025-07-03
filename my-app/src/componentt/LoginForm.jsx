import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Game from './Game';

export default function LoginForm() {
    const [isRegistering, setIsRegistering] = useState(false);
    const [formData, setFormData] = useState({ username: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isRegistering) {
            // הרשמה
            console.log("Registering user:", formData);

        } else {
            // התחברות
            console.log("Logging in user:", formData);

        }
        navigate('/game')

    };

    const handleGoogleLogin = () => {
        // התחברות עם גוגל
        console.log("Google login clicked");
    };

    return (
        <div className="auth-container">
            <h2>{isRegistering ? 'הרשמה' : 'התחברות'}</h2>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    placeholder="שם משתמש"
                    value={formData.username}
                    onChange={handleChange}
                    required
                />

                <input
                    type="password"
                    name="password"
                    placeholder="סיסמה"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />

                <button type="submit">
                    {isRegistering ? 'הרשמה' : 'התחברות'}
                </button>
            </form>
            <div class="g-signin2" data-onsuccess="onSignIn"></div>
            
            <button onClick={handleGoogleLogin}>
                התחברות עם Google
            </button>

            <p>
                {isRegistering ? 'כבר רשום?' : 'אין לך חשבון?'}{' '}
                <button onClick={() => setIsRegistering(!isRegistering)}>
                    {isRegistering ? 'התחבר כאן' : 'הרשם כאן'}
                </button>
            </p>
        </div>
    );
}
