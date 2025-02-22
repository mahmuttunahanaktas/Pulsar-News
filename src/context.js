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

    const handleGoToPageDetail = (new_link) => {
        window.open(new_link, "_blank");
    };
    

   

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

    const [selectedComponent, setSelectedComponent] = useState('');



     //delete popup'ı
     const [deletepopupIsOppen, setDeletePopupIsOppen] = useState(false);
     const deletePopup = () => setDeletePopupIsOppen(!deletepopupIsOppen)



    return (
        <MyContext.Provider value={{setDeletePopupIsOppen,deletepopupIsOppen,deletePopup,selectedComponent,setSelectedComponent,KategoriSayfasindanGelenSection,setKategoriSayfasindanGelenSection, handleCategoryPage, changeHandleTheme, isDarkMode, setIsDarkMode, popupIsOppen, setPopupIsOppen, togglePopup, handleGoToPageDetail}}>
            {children}
        </MyContext.Provider>
    );

}; export default MyContext;