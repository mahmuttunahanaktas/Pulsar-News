import React, { useContext, useState } from 'react'
import MyContext from '../context'


export default function AdminPanel() {
    const {breakingNew,setBreakingNew}=useContext(MyContext);
    const [inputNew, setIntputNew] = useState('');
    const saveSettings = () => {
        if(inputNew.trim()!==""){
            setBreakingNew(inputNew);
        }
      

    };

    return (
        <div>
            <span>Breaking News Haberi:</span>
            <input value={inputNew} onChange={(e) => setIntputNew(e.target.value)}></input> <br></br>
            <button onClick={saveSettings}>Kaydet</button>
        </div>
    )
}
