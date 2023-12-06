import React from 'react'
import "../components/Steps.css";
const Steps = () => {
    return (
        <div className='steps'>
            <div className="container">
                <div className="wrapper">
                    <div className="left">
                        <div>
                            <img src="https://cdn-icons-png.flaticon.com/256/1509/1509494.png" alt="" />
                        </div>
                        <p style={{ maxWidth: 500, color: "rgba(0,0,0,0.5)", fontSize: "18px" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias nemo et, esse laudantium consequatur. Eum soluta illum architecto dolorum quae suscipit dignissimos! Saepe, amet explicabo nemo eligendi totam sint repudiandae.</p>
                        <button className='adopt'>Adopt a child now</button>
                    </div>
                    <div className="righ">
                        <p style={{fontSize: "2rem"}}>Steps to adopt & foster a child</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Steps