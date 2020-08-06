import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Landing from './partials/Landing';
import TeacherList from './partials/TeacherList';
import TeacherForm from './partials/TeacherForm';

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