import React, { useEffect, useState } from 'react'
import { Fade } from '@mui/material';
import { RiAdminLine } from "react-icons/ri";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FaRegSave } from "react-icons/fa";
import { FaUserShield } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { Snackbar, Alert } from '@mui/material';
import { jwtDecode } from 'jwt-decode';
import { CircularProgress } from '@mui/material';
import axios from 'axios';


function AdminAccountSettings() {
  const [admins, setAdmins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [succes, setSucces] = useState(false);
  const [adminName, setAdminName] = useState("");
  const [adminMail, setAdminMail] = useState("");
  const [newAdminMail, setAdminNewMail] = useState("");
  const [headerName, setHeaderName] = useState("");

  const handleCloseSuccess = () => {
    setSucces(false);
  };

  const handleDeleteUser = async (email) => {
    const isConfirmed = window.confirm("Are you sure you want to delete?");
    if (isConfirmed) {
      try {
        const response = await fetch(`http://localhost:3000/user/${email}`, {
          method: "DELETE",

        });
        if (!response.ok) {
          throw new Error("Kullanıcı silinirken hata oluştu!");
        }
        fetchUsers();
        return console.log("Kullanıcı Başarıyla Silinid!");
      } catch (error) {
        console.error(error);
      }
    }

  };

  const fetchUsers = async () => {
    const token = localStorage.getItem("jwt");

    if (!token) {
      console.log("TOKEN YOK !!! ");
    } else {
      const decoded = jwtDecode(token);
      setAdminMail(decoded.email);
      setAdminName(decoded.name);
      setHeaderName(decoded.name);
      setAdminNewMail(decoded.email);
    }
    try {
      const response = await axios.get('http://localhost:3000/adminpanel/admins', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      // Axios otomatik olarak JSON parse işlemini yapar
      // response.data içinde API yanıtı bulunur

      if (response.data && response.data.succes && Array.isArray(response.data.data)) {
        setAdmins(response.data.data); // data dizisini kaydet
      } else {
        console.error("Hatalı formatta veri geldi:", response.data);
        setAdmins([]);
      }
    } catch (error) {
      console.error('Error:', error);
      if (error.response) {
        // Sunucu yanıt verdi ama 2xx aralığında olmayan bir durum koduyla
        console.error('Response data:', error.response.data);
        console.error('Response status:', error.response.status);
      } else if (error.request) {
        // İstek yapıldı ama yanıt alınamadı
        console.error('No response received:', error.request);
      } else {
        // İstek oluşturulurken bir hata oluştu
        console.error('Error message:', error.message);
      }
      setAdmins([]);
    }
  };

  const updateButton = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:3000/user/update', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: adminMail,
          newemail: newAdminMail,
          newname: adminName,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSucces(true);
        setTimeout(() => setLoading(false), 2000);

      } else {
        setOpen(true);
        setTimeout(() => setLoading(false), 2000);
        console.log('Güncelleme başarısız: ', data.message);
      }

    } catch (error) {
      console.error('Hata oluştu:', error);
      alert('Bir hata oluştu. Lütfen tekrar deneyin.');
    }


  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <Fade in={true} timeout={500}>
      <div className='w-full h-full flex flex-col items-center overflow-y-scroll p-3'>
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
            <p className='font-sans text-lg'> All Changes updated successfully!</p>
          </Alert>
        </Snackbar>
        {/* Header */}
        <div className='flex justify-center items-center gap-2' style={{ marginTop: '5%' }}>
          <RiAdminLine className='text-6xl border-1 border-black rounded-full p-1' />
          <h1 className='m-0 p-0'>Welcome, {headerName}</h1>
        </div>
        <div className='w-3/4 mt-10'>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography><h3>Account Details</h3></Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <p className='font-sans'>You can manage your account informations.</p>
                <div className='bg-gray-50 w-full h-full rounded flex flex-col items-center p-4'>
                  <div className='w-64 flex flex-col gap-2 m-3'>
                    <span className='text-xl font-sans'>Full Name</span>
                    <input onChange={(e) => setAdminName(e.target.value)} value={adminName} type='text' className='font-sans p-2 text-md rounded border-1 border-gray-600'></input>
                  </div>
                  <div className='w-64 flex flex-col gap-2 m-3'>
                    <span className='text-xl font-sans'>Email Adress</span>
                    <input onChange={(e) => setAdminNewMail(e.target.value)} type='email' value={newAdminMail} className='font-sans p-2 text-md rounded border-1 border-gray-600'></input>
                  </div>
                  <div className='w-64 flex flex-col gap-2 m-3'>
                    <span className='text-xl font-sans'>Password</span>
                    <input type='password' className='font-sans p-2 text-md rounded border-1 border-gray-600'></input>
                  </div>
                  <div className='m-3 w-full'>
                    <button onClick={(e) => updateButton()} className="btn btn-light border d-flex align-items-center float-right gap-2 mx-1 " style={{ background: '#102c54' }}>
                      <FaRegSave className='text-xl text-white' />
                      <p className="m-0 font-sans text-white text-lg">{loading ? <CircularProgress color="secondary" /> : "Update Changes"}</p>
                    </button>
                  </div>
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header">
              <Typography><h3>Admin List</h3></Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <p className='font-sans'>You can manage other admins from here.</p>
                <div className='w-full h-full rounded flex flex-col items-center p-4'>
                  <div className='rounded-2xl border-1 border-black h-auto w-full m-3 p-3'>
                    <div className='h-auto w-full my-4 p-1' style={{ borderBottom: '1px solid gray' }}></div>
                    <ul className='max-h-60 overflow-y-scroll'>
                      {
                        admins.map((admin) => (
                          <div key={admin.id} className='border-1 my-2 p-2 rounded-xl border-gray-400 gap-2 flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                              <FaUserShield className='text-xl' />
                              <div>
                                <p className='font-sans font-lg m-0 p-0'>{admin.name}</p>
                                <p className='font-sans font-xs m-0 p-0'> -  {admin.email}</p>
                              </div>
                            </div>
                            <button onClick={(e) => handleDeleteUser(admin.email)}
                              className="btn btn-light border d-flex align-items-center gap-2"
                              style={{ background: 'red' }}>
                              <MdOutlineDeleteOutline className='text-xl text-white' />
                              <p className="m-0 font-sans text-white text-lg">Delete</p>
                            </button>
                          </div>
                        ))
                      }
                    </ul>
                  </div>
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <p className='font-sans text-md m-4 text-gray-500'> - Don't forget! finally you should click to "Save Changes" button.</p>
        </div>
      </div>
    </Fade>
  );
} export default AdminAccountSettings;
