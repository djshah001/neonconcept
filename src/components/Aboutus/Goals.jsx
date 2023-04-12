import React from 'react'
import { goalInfo } from '../../Info'
import Goal from './Goal'

function Goals() {
  return (
    <section id="vmv">
        <div className="container">
            <div className="row row_vmv">
                    {goalInfo.map((obj, i) =>{
                    return<Goal
                    key={''+i}
                        icon={obj.icon}
                        title={obj.title}
                        disc={obj.disc}
                        />
                    })}

                {/* <div className="col-lg-4 vmv">
                    <div className="vmv_cnt">
                        <div className="p-2"><h6><i className="fas fa-chart-line"></i>&nbsp;&nbsp;Mission</h6></div>
                        <div className="p-2"> The passion in our work and in innovation guides us towards solutions designed to grow together.</div>
                    </div>
                </div> */}

                {/* <div className="col-lg-4 vmv">
                    <div className="vmv_cnt">
                        <div className="p-2"><h6><i className="fas fa-chart-pie"></i>&nbsp;&nbsp;Value</h6></div>
                        <div className="p-2"> Our products are based on the value and reliability of Made in India, interpreting every need connected to the sectors of visual communication, lighting, art, design, and sanitation.</div>
                    </div>
                </div> */}
            </div>
        </div>
    </section>
  )
}

export default Goals