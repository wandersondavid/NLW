import React, { useState, useEffect } from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';


import './styles.css'
import api from '../../core/api/api';



function TeacherList() {
    const [getusers, setUsers] = useState();
    
    useEffect(()=>{
        api.get('users').then(response =>{
            const user = response.data.users
            console.log(user)
            setUsers(user)
        })
    }, [])
    // console.log("1111111111111111",getusers.map(item =>))
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponiveis.">
                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Matéria</label>
                        <input type="text" id="subject"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="weel_day">Dia da semana</label>
                        <input type="text" id="weel_day"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="time">Hora</label>
                        <input type="text" id="time"/>
                    </div>
                </form>
            </PageHeader>

            <main>
                <span>{
                    // users.map((item, index) => {})
                    }</span>
               <TeacherItem />
               <TeacherItem />
               <TeacherItem />
               <TeacherItem />
               <TeacherItem />
               <TeacherItem />
            </main>
        </div>
    )
}

export default TeacherList;