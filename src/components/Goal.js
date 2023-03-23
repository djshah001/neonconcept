import React from 'react'

function Goal(props) {
    return (
        <div className="col-lg-4 vmv">
            <div className="vmv_cnt">
                <div className="p-2"><h6><i className={`${props.icon}`}></i>&nbsp;&nbsp;{props.title}</h6></div>
                <div className="p-2">{props.disc}</div>
            </div>
        </div>

    )
}

export default Goal