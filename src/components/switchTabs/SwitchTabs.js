import React from 'react'
import "./switchtabs.scss"
import { useState } from "react";

function SwitchTabs({ options = ["tab1", "tab2", "tab3"], active = 0, setActive }) {

    return (
        <div className='switch-tabs-container border'>
            {
                options.map((option, idx) => <span key={idx} className={active === idx ? 'active-tab tab-btn' : 'tab-btn'} onClick={() => setActive(idx)}>{option}</span>)
            }
        </div>
    )
}

export default SwitchTabs