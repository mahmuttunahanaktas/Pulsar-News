import React, { createContext, useContext, useEffect, useState } from 'react';
//context'i oluşturalım.
const MyContext = createContext();
export const usePopup = () => useContext(MyContext);

//context için bir provider oluşturalım.
export const MyProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedDarkMode = localStorage.getItem('isDarkMode');
        return savedDarkMode === 'true';

    });
    useEffect(() => {
        localStorage.setItem('isDarkMode', isDarkMode);
        if (isDarkMode) {
            document.body.classList.add('dark');
        }
        else {
            document.body.classList.remove('dark');
        }

    }, [isDarkMode])
    const [adminButtonVisiblty, setAdminButtonVisibilty] = useState('hidden');
    const [admin, setAdmin] = useState({ email: "admin", password: "1234" });
    const [isAdminLogged, setIsAdminLogged] = useState(() => {
        const storedIsAdminLogged = localStorage.getItem('isAdminLogged');
        return storedIsAdminLogged ? JSON.parse(storedIsAdminLogged) : false;
    })
    const handleGoToPageDetail = (new_link) => {
        window.open(new_link, "_blank");

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

    const [popupIsOppen, setPopupIsOppen] = useState(false);

    const togglePopup = () => setPopupIsOppen(!popupIsOppen)
    //temayı değiştirme kodunu contextimde hazır fonksiyon olarak saklıyorum


    const changeHandleTheme = () => {
        setIsDarkMode((prev) => !prev);
        document.body.classList.toggle("dark", !isDarkMode)

    };

    const handleCategoryPage = (category, navigateElement) => {
        navigateElement(`/category/${category.toLowerCase()}`);
    };


    const [KategoriSayfasindanGelenSection,setKategoriSayfasindanGelenSection]=useState("bos");



    return (
        <MyContext.Provider value={{KategoriSayfasindanGelenSection,setKategoriSayfasindanGelenSection, handleCategoryPage, changeHandleTheme, isDarkMode, setIsDarkMode, popupIsOppen, setPopupIsOppen, togglePopup, handleGoToPageDetail, isAdminLogged, setIsAdminLogged, login, breakingNew, setBreakingNew, adminButtonVisiblty, setAdminButtonVisibilty }}>
            {children}
        </MyContext.Provider>
    );

}; export default MyContext;