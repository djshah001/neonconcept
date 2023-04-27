import React from 'react'
import BannerContext from '../contexts/BannerContext'
import axios from 'axios'

function BannerState(props) {

    const createBanner = async (banner) => {
        try {
            const url = `${process.env.REACT_APP_HOST}createbanner`

            const formdata = new FormData()
            formdata.append('topTitle', banner.topTitle)
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

    const updateBanner = async (id,banner) => {
        try {
            const url = `${process.env.REACT_APP_HOST}updatebanner`

            const formdata = new FormData()
            formdata.append('topTitle', banner.topTitle)
            formdata.append('title', banner.title)
            formdata.append('subTitle', banner.subTitle)
            formdata.append('image', banner.image)
            formdata.append('id', id)
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

    const getBannerById = async (bannerId)=>{
        try {
            console.log(bannerId)
            const url = `${process.env.REACT_APP_HOST}getbannerbyid`
            const result = await axios.post(url,{id:bannerId})
            return result.data
        } 
        catch (error) {
            
        }
    }

    const deleteBanner = async (bannerId)=>{
        try {
            console.log(bannerId)
            const url = `${process.env.REACT_APP_HOST}deletebanner`
            const result = await axios.post(url,{id:bannerId})
            console.log(result.data)
            return result.data
        } 
        catch (error) {
            
        }
    }

    return (
        <BannerContext.Provider value={{createBanner,updateBanner,getBanners,getBannerById,deleteBanner}}>
            {props.children}
        </BannerContext.Provider>
    )
}

export default BannerState
