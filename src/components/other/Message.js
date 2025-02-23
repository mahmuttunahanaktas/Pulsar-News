import React from 'react'
import { Fade } from '@mui/material';
import MyContext from '../../context';
import { usePopup } from '../../context';

function Message() {
    const { deletepopupIsOppen, deletePopup } = usePopup();
    if (!deletepopupIsOppen) return null;
    return (
        <Fade in={true} timeout={500}>

            <div className='bg-sky-400 w-full h-screen '>
                <h1>UYARI PENCERESİ</h1>

            </div>
        </Fade>
    )
} export default Message;
