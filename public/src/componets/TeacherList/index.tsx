import React from 'react';
import {Link} from 'react-router-dom'

import logoImg from '../../assets/images/logo.svg'
import backIcon from '../../assets/images/icons/back.svg'

function TeacherList() {
    return (
        <div id="page-techer-list" className="container">
            <header className="page-header">
                <div className="top-bar-container">
                    <Link to="/" className="">
                        <img src={backIcon} alt=""/>
                    </Link>
                </div>
            </header>
        </div>
    )
}

export default TeacherList;