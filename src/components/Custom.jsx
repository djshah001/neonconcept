import React,{useState,useRef} from 'react'
import { fontBtnInfo, neonSize } from '../Info'
import { HexAlphaColorPicker } from "react-colorful";
import GridBtn from './GridBtn'
import Navhead from './Navhead'
import { AnimatePresence,motion } from 'framer-motion';

function Custom(props) {

    const variants = {
        hidden:{
          height:0,
          opacity:0, 
        },
        shown:{
          height:'auto',
          opacity:1,
        }
      }
    
    
      
    const [text,setText] = useState('')

    var width = useRef('0')


    let gettext = (e)=>{
        setText(e.target.value)
        console.log(typeof e.target.value.length)
        let text = e.target.value
        console.log(width.current)
        // setWidth(text.lenth)
        // console.log(width)
        width.current = 35.5*text.lenth
    }

    const inputRef = useRef()
    const btnRef = useRef()


    const setFont = (font)=>{
        inputRef.current.style.fontFamily = font
    }

    const popover = useRef();
    const [isOpen, toggle] = useState(false);

    const [color, setColor] = useState("#fff");

    const setFontColor = (color)=>{
        inputRef.current.style.color = color
        btnRef.current.style.backgroundColor = color
        inputRef.current.style.textShadow = '0 0 10px'+color
    }

    const chnageFontSize = (fontSize)=>{
        inputRef.current.style.fontSize = fontSize
    }

    const [quantity,setQuantity]=useState(0)

  return (
    <div>
        <Navhead title={props.title} route={props.route}/>
        <section id="Design-Neon">
            <div className="container dyn_bdy">
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-groupp" style={{position: 'sticky',top: 0}}>
                                        
                            <img src="/images/wall.png" className="img-fluid" alt="project_image" style={{opacity: 0.8}}/>
                            <div id="myDIVTag" ref={inputRef} className="overlay-text">{text}</div>

                        </div>
                    </div>

                    <div className="col-md-6 cntc_form">
                        <div className="container">
                            <form action="">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h1>Customize Your Lights</h1>
                                    </div>
                                    <div className="col-md-12 mt-3">
                                        <p>Size Measurement</p>
                                    </div>
                                    <div className="col-md-6">
                                        <p id="myLength">Width: {width.current} inch</p>
                                    </div>

                                    <div className="col-md-5">
                                        <p id="myheight">Height: 0 inch</p>
                                    </div>
                                    <div className="col-md-6">
                                        <p id="result">₹:</p>
                                    </div>
                                    <div className="col-md-12 mt-4">
                                        <label htmlFor="myInputText">Type Your Text</label>
                                        <input
                                        id="myInputText"
                                        type="text"
                                        className="form-control mt-2"
                                        placeholder="Enter Your Text"
                                        required
                                        onChange={(e)=>gettext(e)}
                                        />
                                    </div>

                                </div>

                                <hr style={{backgroundColor: 'rgb(188, 188, 188)'}} />


                                <div className="row mt-3">
                                    <div className="col-md-12 align-self-center">
                                        <label htmlFor="myInputText">Pick Your Font</label>
                                    </div>
                                    <div className="row mt-1 center-block">
                                        <div className="col-md-12 align-self-center">
                                            {fontBtnInfo.map((font, i) =>{
                                                return <GridBtn 
                                                key={font}
                                                name={font.split(' ')[0]}
                                                onClick={()=>setFont(font)}
                                                />
                                            })}
                                        </div>
                                    </div>
                                </div>

                                <hr style={{backgroundColor: 'rgb(188, 188, 188)'}} />

                                <div className="row mt-3">
                                    <div className="col-md-12 align-self-center ">
                                        <label htmlFor="myInputText mx-5">Pick Your Color</label>
                                            <button
                                            type="button"
                                            className="circle-white"
                                            ref={btnRef}
                                            // onclick={()=>}
                                            onClick={() => toggle(!isOpen)}
                                            />
                                    </div>

                                    <div className="mx-auto">
                                        <div className="col-md-12 align-self-center">

                                            <AnimatePresence mode='wait'onExitComplete={()=>null} >
                                                    {isOpen && 
                                                <motion.div 
                                                variants={variants}
                                                initial='hidden'
                                                animate='shown'
                                                exit='hidden'
                                                transition={{duration:0.8,type:'spring'}}>
                                                        {/* <div className="popover" ref={popover}> */}
                                                            <HexAlphaColorPicker color={color} 
                                                            onChange={(color)=>setFontColor(color)} />
                                                        {/* </div> */}
                                                </motion.div>
                                                        }
                                            </AnimatePresence>
                                        </div>
                                    </div>
                                </div>

                                <hr style={{backgroundColor: 'rgb(188, 188, 188)'}} />

                                <div className="row mt-3">
                                    <div className="col-md-12 align-self-center mb-2">
                                        <label htmlFor="myInputText">Pick Your Size</label>
                                    </div>

                                    {
                                        neonSize.map((obj, i) =>{
                                            return <GridBtn 
                                            key={obj.size}
                                            name = {obj.size}
                                            onClick={()=>chnageFontSize(obj.fontSize)}/>
                                        })
                                    }
                                </div>  

                                <hr style={{backgroundColor: 'rgb(188, 188, 188)'}} />

                                <div className="row mt-3">
                                    <div className="col-md-2 align-self-center">
                                        <label htmlFor="myInputText">Quantity</label>
                                    </div>
                                    <div className="col-md-5 align-self-center">
                                        <div className="counter-container">
                                        <button
                                            className="counter-button"
                                            type="button"
                                            onClick={()=>setQuantity(quantity===0?0:quantity-1)}
                                            id="minus"
                                        >
                                            -
                                        </button>

                                        <span className="counter-value" id="value">{quantity}</span>

                                        <button
                                            className="counter-button"
                                            type="button"
                                            id="plus"
                                            onClick={()=>setQuantity(quantity+1)}
                                        >
                                            +
                                        </button>
                                        </div>
                                    </div>
                                    <div className="col-md-5 align-self-center">
                                        <label htmlFor="myInputText"></label>
                                        <h5 id="resultt">₹:</h5>
                                    </div>
                                    </div>

                                <hr style={{backgroundColor: 'rgb(188, 188, 188)'}} />

                                <div className="row mt-3">
                                    <div className="s1 col-md-12 align-self-center">
                                        <a href="cart.html">
                                        <button type="button" className="btn button_mainn">
                                            Add To Cart
                                        </button>
                                        </a>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    </div>
  )
}

export default Custom