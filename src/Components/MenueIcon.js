import React from "react";


const ManueIcon = ({status, setVisible})=>{
    return(
        <button 
            type="button"
            aria-label="Navbar Toggle"
            onClickCapture={()=> setVisible(!status)}
            className={
                status?
                    "mobile-nav-toggle change"
                :   "mobile-nav-toggle"
            }
        >
            <span aria-hidden="true" className="sr-only">Menu</span>
            <div className="menue-icon bar1"></div>
            <div className="menue-icon bar2"></div>
            <div className="menue-icon bar3"></div>
        </button>
    );
}

export default ManueIcon;