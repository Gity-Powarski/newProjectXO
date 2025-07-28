import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Game from './Game';
import '../css/LoginForm.css';
import { FcGoogle } from 'react-icons/fc';

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
            console.log("Registering user:", formData);

        } else {
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
            <div className="auth-box">
                <h2 className="auth-title">{isRegistering ? 'הרשמה' : 'התחברות'}</h2>
                <form className="auth-form" onSubmit={handleSubmit}>
                    <input
                        className="auth-input"
                        type="text"
                        name="username"
                        placeholder="שם משתמש"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                    <input
                        className="auth-input"
                        type="password"
                        name="password"
                        placeholder="סיסמה"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <button className="auth-btn" type="submit">
                        {isRegistering ? 'הרשמה' : 'התחברות'}
                    </button>
                </form>
                <div className="auth-divider">או</div>
                <button className="google-btn" onClick={handleGoogleLogin}>
                    <FcGoogle className="google-icon" />
                    התחברות עם Google
                </button>
                <p className="switch-mode">
                    {isRegistering ? 'כבר רשום?' : 'אין לך חשבון?'}{' '}
                    <button className="switch-btn" type="button" onClick={() => setIsRegistering(!isRegistering)}>
                        {isRegistering ? 'התחבר כאן' : 'הרשם כאן'}
                    </button>
                </p>
            </div>
        </div>
    );
}
