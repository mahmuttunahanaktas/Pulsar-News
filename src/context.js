import React, { createContext, useEffect, useState } from 'react';

//context'i oluşturalım.
const MyContext = createContext();

//context için bir provider oluşturalım.
export const MyProvider = ({ children }) => {    
    const [adminButtonVisiblty, setAdminButtonVisibilty] = useState('hidden');
    const [admin, setAdmin] = useState({ email: "admin", password: "1234" });
    const [isAdminLogged, setIsAdminLogged] = useState(() => {
        const storedIsAdminLogged = localStorage.getItem('isAdminLogged');
        return storedIsAdminLogged ? JSON.parse(storedIsAdminLogged) : false;
    })
    const handleGoToPageDetail=(new_link)=>{
        window.open(new_link,"_blank");

    };
    useEffect(() => {
        localStorage.setItem('isAdminLogged', JSON.stringify(isAdminLogged));
    }, [isAdminLogged]);
    const [breakingNew, setBreakingNew] = useState(() => {
        const storedBreakingNew = localStorage.getItem('breakingNew');
        return storedBreakingNew ? JSON.parse(storedBreakingNew) : '';
    });

    useEffect(() => {

        if (isAdminLogged) {
            setAdminButtonVisibilty('visible');

        } else {
            setAdminButtonVisibilty('hidden');

        }

    }, [isAdminLogged]);


    useEffect(() => {
        localStorage.setItem('breakingNew', JSON.stringify(breakingNew));
    }, [breakingNew]);

    const login = (email, password) => {
        if (email === admin.email && password === admin.password) {
            setIsAdminLogged(true);
            return true;
        }
        else {
            return false;
        }
    }

    return (
        <MyContext.Provider value={{handleGoToPageDetail, isAdminLogged,setIsAdminLogged, login, breakingNew, setBreakingNew, adminButtonVisiblty, setAdminButtonVisibilty }}>
            {children}

        </MyContext.Provider>
    );

}; export default MyContext;