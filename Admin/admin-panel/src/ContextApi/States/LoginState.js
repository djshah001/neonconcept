import React,{useEffect, useState} from 'react'
import LoginContext from '../contexts/LoginContext'
import axios from 'axios'


function LoginState(props) {

    // const navigate = useNavigate();

    const [User, setUser] = useState({
        email: '',
        password:''
      })
    
    const [res, setRes] = useState({})

    const handleChange = (e) => {
        setUser({...User,[e.target.name]:e.target.value})
      }
    
    const login = async ()=> {
      try {
          let response = await axios.post(`http://localhost:3001/auth/login`,User)
          setRes(response.data)          
        } 
      catch (error) 
        {
          console.warn(error);
        }
    }

    useEffect(() => {
      // console.log(res)
      if(res.success) {
          window.localStorage.setItem('loggedIn','true')
      }
    }, [res])
    

  return (
    <LoginContext.Provider value={{User,setUser,res,setRes,handleChange,login}}>
        {props.children}
    </LoginContext.Provider>
  )
}

export default LoginState