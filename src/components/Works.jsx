import React,{useState} from 'react'
import { workInfo } from '../Info'
import PhotoGellery from './PhotoGellery'
import { NavLink } from 'react-router-dom'


function Works() {


    const [selected,setSelected] = useState('led')
    
    const showImg = (e)=>{
        setSelected(e.target.value)
    }

    return (
        
        <section id="projects">
            <div className="container" id="works">
                <div className="row">
                    <div className="col-lg-6 col-md-12 cnt_head">
                        <span className="sub_head">Some of the projects by us</span>
                        <h2 className="s_head">Our Works</h2>
                        <p className="h_body">We provide best ever services for your great experience. We make all efforts for the revolutionary change.</p>
                    </div>
                    <div className="grid-item gallery-title col-lg-6 col-md-12" style={{overflow: 'initial'}}>
                        <div className="form-group" >
                            <select className="form-control selector" id="filter" value={selected} onChange={(e)=>showImg(e)}>
                                <option className='option' value="led">3D LED Letters</option>
                                <option className='option' value="acrylic">Acrylic Letters</option>
                                <option className='option' value="beauty">Beauty Bar & Nail Salon Neon Signs</option>
                                <option className='option' value="decor">Home Decor</option>
                                <option className='option' value="nameplate">Name Plate</option>
                                <option className='option' value="parties">Parties & Special Occasions</option>
                                <option className='option' value="cafe">Cafe & Diner Signs</option>
                                <option className='option' value="cheap">Cheap Neon Signs</option>
                                <option className='option' value="wedding">Wedding Signs</option>
                                <option className='option' value="personalized">Personalized</option>
                                <option className='option' value="wall">Wall Art & Light Signs</option>
                                <option className='option' value="desk">Desk Lights & Table Lamps</option>
                                <option className='option' value="wooden">Wooden Panels</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div id="container" className="isotope row ml-0" style={{justifyContent: 'space-evenly'}}>
                    
                    {
                        workInfo.map((object) =>{
                            if (object.path===selected){
                                return (object.arr.map((imgurl,i) =>{
                                    return (<PhotoGellery key={object.path+i} imgurl={imgurl} i={i} />)
                                }))
                            }
                        })
                    }

                </div>
                <div className="grid-item col-12 pr-4 mb-md-5 mb-5 FiltImg" data-filter="led">
                    <div className="featureCol w-100 mb-5">
                        <div>
                            <div className="text-right">
                                <NavLink id="viewgallery" to={'/' +selected} className="button_main btn mb-3">View more&nbsp;&nbsp;<i className="fas fa-angle-right arrow_go"></i></NavLink>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Works