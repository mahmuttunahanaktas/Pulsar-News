import React, { useContext } from 'react'
import AdminPanelBar from './AdminPanelBar'
import SignIn from './SignIn';
import AdminAccountSettings from './AdminAccountSettings';
import MyContext from '../context.js';
import ManageMostPopular from './ManageMostPopular.js';
import ManageTopStories from './ManageTopStories.js';
import EditNews1 from './EditNews1.js';
import { Fade } from '@mui/material';
import TopStoriesCategories from './TopStoriesCategories.js';
import EditCategories from './EditCategories.js';


function AdminPanel() {
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
