import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Landing from './componets/Landing';
import TeacherList from './componets/TeacherList';
import TeacherForm from './componets/TeacherForm';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Landing}/>
            <Route path="/study" component={TeacherList}/>
            <Route path="/give-classes" component={TeacherForm}/>
        </BrowserRouter>
    )
}

export default Routes;