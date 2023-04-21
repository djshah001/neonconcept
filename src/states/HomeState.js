import React, { useState } from 'react'
import HomeContext from '../contexts/HomeContext'
import axios from 'axios'

function HomeState(props) {
    const [Banners,setBanners] = useState([])

    const getBanners = async ()=>{
        try {
            const url = `${process.env.REACT_APP_HOST}getbanners`
            const result = await axios.get(url)
            setBanners(result.data)
            return result.data
        } 
        catch (error) {
            
        }
    }
  return (
    <HomeContext.Provider value={{Banners,getBanners}} >
      {props.children}
    </HomeContext.Provider>
  )
}

export default HomeState
