import React, { useContext, useState } from 'react';
import MyContext from '../context';
import { Navigate, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Login() {
    const navigate = useNavigate(); // useNavigate hook'u ile yönlendirme işlevi
    const handleMain = () => {
        navigate("/");
    };
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useContext(MyContext);
    const handleSignIn = () => {
        if (email.trim() !== "" || password.trim() !== "") {
            const isSucces = login(email, password);
            if (isSucces) {

                toast.success('Giriş başarılı!', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: true,
                });
                setTimeout(() => {
                    handleMain();
                }, 2000);


            } else {
                console.log("BAŞARISIZ");
                toast.error('Kullanıcı adı veya şifre hatalı!', {
                    position: "top-right", // Sağ üstte gösterilecek
                    autoClose: 3000, // 3 saniye sonra otomatik kapanır
                    hideProgressBar: true,
                });
            }


        }
    };
    return (
        <div className='main_div'>
            <ToastContainer />
            <div className='login-div'>
                <h1 className='mb-5'>Yönetici Giriş</h1>
                <div className='input_div'>
                    <span className='span_text'>E-Posta</span>
                    <input onChange={(e) => setEmail(e.target.value)} type='email' value={email} className='input_text'></input>
                </div>
                <div className='input_div'>
                    <span className='span_text'>Şifre</span>
                    <input onChange={(e) => setPassword(e.target.value)} value={password} type='password' className='input_text'></input>
                </div>


                <button onClick={handleSignIn} className='btn btn-primary m-4 fs-2'>Giriş</button>
            </div>
        </div>
    );
}

export default Login;
