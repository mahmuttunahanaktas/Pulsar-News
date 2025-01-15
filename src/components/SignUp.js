import React, { useState } from 'react';
import { Snackbar, Alert } from '@mui/material';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { Fade } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { CircularProgress } from '@mui/material';

function SignUp() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [shakeAnimation, setShakeAnimation] = useState(false);
  const [shakeAnimation2, setShakeAnimation2] = useState(false);
  const [succes, setSucces] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleGoToSignIn = () => {
    navigate("/SignIn");
  };

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
    fontFamily:'sans-serif',
    outline: 'none',
    fontSize: '16px',
  }));

  const StyledDiv2 = styled('div')(({ shakeAnimation2 }) => ({
    animation: shakeAnimation2 ? `${shake} 0.5s ease-in-out` : 'none',
    borderRadius: '4px',
    padding: '10px',
    width: '100%',
    fontFamily:'sans-serif',
    outline: 'none',
    fontSize: '16px',
  }));

  const handleSignUp = () => {
    setLoading(true);
    // Diyelim şifre yanlış.
    setShakeAnimation(true);
    setShakeAnimation2(true);
    setSucces(true);
    setOpen(true);

    // Animasyonu sıfırlamak için bir süre sonra sıfırla
    setTimeout(() => setShakeAnimation(false), 500);
    setTimeout(() => setShakeAnimation2(false), 500);
    setTimeout(() => setLoading(false), 3000);
  };

  const handleCloseSuccess = () => {
    setSucces(false);
  };

  return (
    <Fade in={true} timeout={500}>
      <div className="w-100 h-screen flex flex-col justify-center items-center" style={{ marginTop: '5%' }}>
        <Snackbar open={open} autoHideDuration={3000} onClose={() => setOpen(false)} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
          <Alert severity="error" onClose={() => setOpen(false)}>
            <p className='font-sans text-lg'>Invalid values! Please check out your information.</p>
          </Alert>
        </Snackbar>
        <Snackbar
          open={succes}
          autoHideDuration={6000}
          onClose={handleCloseSuccess} // handleCloseSuccess fonksiyonunu burada kullanıyoruz
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          <Alert onClose={handleCloseSuccess} severity="success" sx={{ width: '100%' }}>
            <p className='font-sans text-lg'> Your account has been created successfully!</p>
          </Alert>
        </Snackbar>
        <div className="bg-white border shadow-md rounded-2xl m-3 flex justify-center items-center text-center px-20 py-3">
          <h1 className="m-1 text-3xl w-100 border-b-2 text-center">Create An Account.</h1>
        </div>
        <div className="bg-white border shadow-xl rounded-2xl m-3 px-20 py-5 block">
          <div className='my-4 w-64 flex flex-col gap-2'>
            <span className='text-xl'>Full Name</span>
            <input type='text' className='font-sans p-2 text-md rounded border-1 border-gray-600'></input>
          </div>

          <div className='my-4 w-64 flex flex-col gap-2'>
            <StyledDiv shakeAnimation={shakeAnimation}>
              <span className='text-xl'>Email Address*</span>
            </StyledDiv>
            <input onChange={(e) => setEmail(e.target.value)} value={email} type='email' className='font-sans border-1 border-gray-600 p-2 text-md rounded'></input>
          </div>

          <div className='my-4 w-64 flex flex-col gap-2'>
            <StyledDiv2 shakeAnimation2={shakeAnimation2}>
              <span className='text-xl'>Password*</span>
            </StyledDiv2>
            <input onChange={(e) => setPassword(e.target.value)} value={password} type='password' className='border-1 border-gray-600 p-2 text-md rounded'></input>
          </div>
          <div className='my-4 w-64 flex flex-col gap-2'>
            <input placeholder='Confirm Password' type='password' className='p-2 border-1 font-sans border-gray-600 text-md rounded'></input>
          </div>

          <div className='w-100 flex justify-center items-center'>
            <button onClick={handleSignUp} className='baslik1 m-4  px-5 py-2 rounded text-center shadow-sm text-white text-lg'>{loading ? <CircularProgress color="secondary" /> : "Create Account"}</button>
          </div>

          <p className="text-md text-center lex-wrap font-bold">
            You have already an account? <br />
            <span onClick={handleGoToSignIn} className="text-sky-500 hover:text-green-600 cursor-pointer">Click to Sign in.</span>
          </p>
        </div>
      </div>
    </Fade>
  );
}

export default SignUp;
