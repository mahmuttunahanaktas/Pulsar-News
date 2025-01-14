import React, { useContext } from 'react'
import AdminPanelBar from './AdminPanelBar'
import SignIn from './SignIn';
import AdminAccountSettings from './AdminAccountSettings';
import MyContext from '../context.js';


function AdminPanel() {
    const { selectedComponent, setSelectedComponent } = useContext(MyContext);


    //Seçilen butona göre component çağırıyoruz.
    const renderComponent = () => {
        switch (selectedComponent) {
            case 'AccountSettings':
                return <AdminAccountSettings />

            case 'NewList':
                return null;


            case 'AddCategory':
                return null;

            case 'UserList':
                return null;


            default:
                return <AdminAccountSettings />
        }
    };

    return (
        <div className='flex justify-center bg-gray-100 h-screen w-full m-2 gap-2 mt-9'>
            <AdminPanelBar></AdminPanelBar>
            <div className='bg-white h-auto w-[65%] mt-28 shadow-xl rounded-xl'>
                {renderComponent()}

            </div>
        </div>
    )
} export default AdminPanel;
