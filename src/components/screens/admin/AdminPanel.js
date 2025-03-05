import React, { useContext, useEffect } from 'react'
import AdminPanelBar from './AdminPanelBar.js'
import AdminAccountSettings from './AdminAccountSettings';
import MyContext from '../../../context.js';
import ManageMostPopular from './ManageMostPopular.js';
import ManageTopStories from './ManageTopStories.js';
import EditNews1 from './EditNews1.js';
import { Fade } from '@mui/material';
import TopStoriesCategories from './TopStoriesCategories.js';
import EditCategories from './EditCategories.js';
import UserList from './UserList.js';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';



function AdminPanel() {
    const navigate = useNavigate();

    //jwt'nin içerisindeki rolü kontrol etme fonskiyonumuz.
    const checkAdmins=()=>{
        const token=localStorage.getItem("jwt");
        if (!token) {
            alert('Yetkisiz erişim: Giriş yapmanız gerekiyor!');
            navigate('/SignIn'); // Giriş sayfasına yönlendir
            window.location.reload();
            return;
        }
        try{
            const decoded=jwtDecode(token);
            if(decoded.role!=="ADMIN"){
                console.log('Yetkisiz erişim: Admin değilsiniz!');
                navigate('/');
                window.location.reload();

            }

        }catch(error){
            console.error('Token çözümleme hatası:', error);
            navigate('/SignIn');
        }

    };
    useEffect(()=>{
        checkAdmins();
    },[]);



    //adminpanele istek atma kodlarımız.
    useEffect(()=>{

        const fetchAdminPanel = async () => {
            try{
                const token=localStorage.getItem("jwt");
                const response = await fetch('http://localhost:3000/adminpanel',{
                    method:'GET',
                    headers:{
                        Authorization:`Bearer ${token}`,

                    },
                });
                if (!response.ok) {
                    throw new Error('Yetkisiz erişim veya hata oluştu');
                }
            } catch(error){
                console.error('İstek hatası:', error);
                navigate('/');
            }

        }




        checkAdmins();
        fetchAdminPanel();
    },[]);





    const { selectedComponent, setSelectedComponent } = useContext(MyContext);
    //Seçilen butona göre component çağırıyoruz.
    const renderComponent = () => {
        switch (selectedComponent) {
            case 'AccountSettings':
                return <AdminAccountSettings />
            case 'EditNews':
                return <EditNews1 />;
            case 'top':
                return <TopStoriesCategories />;
            case 'most':
                return <ManageMostPopular />;
            case 'EditCategories':
                return <EditCategories />;

            case 'userlist':
                return <UserList />;

            case 'home' || 'world' || 'politics' || 'books' || 'business' || 'technology' || 'arts' || 'fashion' || 'sports':
                return <ManageTopStories />;

            default:
                return <AdminAccountSettings />
        }
    };

    return (
        <Fade in={true} timeout={500}>
            <div className='flex justify-center bg-gray-100 h-screen w-full m-2 gap-2 mt-9'>
                <AdminPanelBar></AdminPanelBar>
                <div className='bg-white h-auto w-[65%] mt-28 shadow-xl rounded-xl'>
                    {renderComponent()}
                </div>
            </div>
        </Fade >
    )

} export default AdminPanel;
