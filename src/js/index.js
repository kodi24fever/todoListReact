//import react into the bundle
import React from 'react';
import ReactDOM from 'react-dom';

//include bootstrap npm library into the bundle
import 'bootstrap';

//include your index.scss file into the bundle
import '../styles/index.scss';

//import your own components
import {TopHeader} from './component/top-header.jsx';
import {List} from './component/list.jsx';

//render your react application
ReactDOM.render(
    <div className="container">
        <TopHeader />
        <div className="jumbotron">
            <List />
        </div>
    </div>,
    document.querySelector('#app')
);