import React from 'react'
import {RouteComponentProps} from 'react-router';
import CasePlan from '../components/CasePlan';

const Case: React.FC<RouteComponentProps> = () => {
    return (
        <div>
            <h1>Case Plan</h1>

            <CasePlan/>
        </div>
    )
}

export default Case
