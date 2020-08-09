import React, { useState, useEffect } from 'react';

import PageHeader from '../../components/PageHeader';
import ListUser from '../../components/ListUser';



import './styles.css'
import api from '../../core/api/api';

interface IUser {
    img:string;
    name: string;
    telefone: string;
    observacoes?: string;
}


function TeacherList() {
    const [getusers, setUsers] = useState([]);

    useEffect(()=>{
        api.get('users').then(response =>{
            const user = response.data.users
            console.log(user)
            setUsers(user)
        })
    }, [])


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
                {getusers.map((user:IUser, index) =>{
                    return <ListUser key={index} img={user.img} name={user.name} telefone={user.telefone} observacoes={user.observacoes} />
                })}
            </main>
        </div>
    )
}

export default TeacherList;