import React, { useState } from 'react';
import { Snackbar, Alert } from '@mui/material';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { Fade } from '@mui/material';
import { Navigate,useNavigate } from 'react-router-dom';


function SignIn() {
    const navigate=useNavigate();
    const [open, setOpen] = useState(false);
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [shakeAnimation, setShakeAnimation] = useState(false);
    const [shakeAnimation2, setShakeAnimation2] = useState(false);


    // Sallama animasyonu
    const shake = keyframes`
  0% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  50% { transform: translateX(5px); }
  75% { transform: translateX(-5px); }
  100% { transform: translateX(0); }
`;

    const StyledDiv = styled('div')(({ shakeAnimation }) => ({
        animation: shakeAnimation ? `${shake} 0.5s ease-in-out` : 'none',
        borderRadius: '4px',
        padding: '10px',
        width: '100%',
        outline: 'none',
        fontSize: '16px',
    }));

    const StyledDiv2 = styled('div')(({ shakeAnimation2 }) => ({
        animation: shakeAnimation2 ? `${shake} 0.5s ease-in-out` : 'none',
        borderRadius: '4px',
        padding: '10px',
        width: '100%',
        outline: 'none',
        fontSize: '16px',
    }));

    const handleGoToSignUp=()=>{
        navigate("/SignUp");
      };


    const handleSignIn = () => {

        //diyelim şifre yanlış.
        setOpen(true);
        setShakeAnimation(true);
        setShakeAnimation2(true);
        setPassword("");
        setEmail("");

        // Animasyonu sıfırlamak için bir süre sonra sıfırla
        setTimeout(() => setShakeAnimation(false), 500);
        setTimeout(() => setShakeAnimation2(false), 500);

    };

    return (
        <Fade in={true} timeout={500}>
            <div className="w-100 h-screen flex flex-col justify-center items-center" style={{ marginTop: '5%' }}>
                <Snackbar open={open} autoHideDuration={3000} onClose={() => setOpen(false)}>
                    <Alert severity="error" onClose={() => setOpen(false)}>
                        <p className='font-sans text-lg'>Invalid values! Please check out your informations.</p>
                    </Alert>
                </Snackbar>
                <div className="bg-white border shadow-md rounded-2xl m-3 flex justify-center items-center text-center px-40 py-3">
                    <h1 className="m-1 text-3xl w-100 border-b-2 text-center">Sign In</h1>
                </div>
                <div className="bg-white border shadow-xl rounded-2xl m-3 px-20 py-5 block">


                    <div className='my-4 w-64 flex flex-col gap-2'>
                        <StyledDiv shakeAnimation={shakeAnimation}>
                            <span className='text-xl'>Email Adress*</span>
                        </StyledDiv>
                        <input onChange={(e) => setEmail(e.target.value)} value={email} type='email' className='p-2 text-md rounded border'></input>
                    </div>



                    <div className='my-4 w-64 flex flex-col gap-2'>
                        <StyledDiv2 shakeAnimation2={shakeAnimation2}>
                            <span className='text-xl'>Password*</span>
                        </StyledDiv2>                        <input onChange={(e) => setPassword(e.target.value)} value={password} type='password' className='p-2 text-md rounded border'></input>
                    </div>

                    <div className='w-100 flex justify-center items-center'>
                        <button onClick={handleSignIn} className='baslik1 m-4 px-5 py-2 rounded text-center shadow-sm text-white text-2xl'>Sign In</button>
                    </div>


                    <p className="text-md text-center lex-wrap font-bold">
                        Don't have an account? <br />
                        <span onClick={handleGoToSignUp} className="text-sky-500 hover:text-green-600 cursor-pointer">Click to create a new account.</span>
                    </p>
                </div>
            </div>
        </Fade>
    );
}

export default SignIn;
