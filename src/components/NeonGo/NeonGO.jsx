import React,{useEffect,useContext, useState} from 'react'
import productContext from '../../contexts/ProductContext'
import Navhead from '../Navhead'
import Products from './Products'
function NeonGO(props) {
    
    const [products,setProducts] = useState([])


    const context = useContext(productContext)

    useEffect(() => {
        context.getproducts().then((products) =>setProducts(products))
    }, [])
    
    // console.log(products)

  return (
    <>
        <Navhead title={props.title} route={props.route}/>
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-12 cnt_head"   >
                        <span className="sub_head">Raedy To Buy Neon Signs</span>
                        <h2 className="s_head">Prepared Neon signs</h2>
                        <p className="h_body">We have best pricing plans according to your requirements. We traget different audience and provide them true value for money plans.</p>
                </div>
            </div>

            <div className="row">
                {
                    products.map((product,i) =>{
                        console.log(product.imgurl)
                        return <Products 
                            key={i}
                            imgurl={product.imgurl}
                            title={product.title}
                            description={product.description}
                            originalPrice={product.originalPrice}
                            offerPrice={product.offerPrice}
                        />
                    })
                }
                				
            </div>

        </div>
    </>
  )
}

export default NeonGO