import { useEffect, useState } from 'react'
import './App.css'
import Loading from './componenets/loading/Loading'
import MainFile from './MainFile';
import { ToastContainer } from 'react-toastify';
function App() {
  const [isLoading,setIsLoading] = useState(true);

  useEffect(()=>{
    const timer = setTimeout(()=>{
      setIsLoading(false);
    },1000);
    return () => clearTimeout(timer);
  },[]);
  
  return (
        <>
        {isLoading ?<Loading />:<MainFile/>}
         <ToastContainer
        position="top-right"
        autoClose={8000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
      />
        </>
  )
}

export default App
