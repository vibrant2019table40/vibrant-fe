import React from 'react';
import {Col, Row} from 'antd';
import {BrowserRouter} from 'react-router-dom'
import 'antd/dist/antd.css';
import './App.css';
import Router from "./Router";


const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Row type='flex' align='middle' justify='center'>
                <Col>
                    <Router/>
                </Col>
            </Row>
        </BrowserRouter>
    );
};

export default App;
