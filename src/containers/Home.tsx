import React from 'react'
import {Row} from 'antd'
import AddCasePlanButton from "../components/AddCasePlanButton";
import OpenPreviousCasePlan from "../components/OpenPreviousCasePlan";

const Home = () => {

    return (
        <Row>
            <Row>
                <h1>Vibrant</h1>
            </Row>


            <Row>
                <OpenPreviousCasePlan/>

                <br/>

                <AddCasePlanButton/>
            </Row>
        </Row>
    )
}

export default Home
