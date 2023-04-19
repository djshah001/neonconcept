import React from 'react'
import BannerContext from '../contexts/BannerContext'
import axios from 'axios'

function BannerState(props) {

    const createBanner = async (banner) => {
        try {
            const url = `${process.env.REACT_APP_HOST}createbanner`

            const formdata = new FormData()
            formdata.append('title', banner.title)
            formdata.append('subTitle', banner.subTitle)
            formdata.append('image', banner.image)

            const result = await axios.post(url,formdata)
            return result.data
        }
        catch (error) {
            console.log(error)
        }
    }

    const getBanners = async ()=>{
        try {
            const url = `${process.env.REACT_APP_HOST}getbanners`
            const result = await axios.get(url)
            return result.data
        } 
        catch (error) {
            
        }
    }

    return (
        <BannerContext.Provider value={{createBanner,getBanners}}>
            {props.children}
        </BannerContext.Provider>
    )
}

export default BannerState
