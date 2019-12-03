import React, {useContext} from 'react'
import Step from "./Step";
import {Input} from 'antd';
import {CasePlanContext} from "./index";

const Live = () => {
    const {live, set} = useContext(CasePlanContext)

    return (
        <div>
            <Step number={7} description='The one thing that is most important to me and worth living for is'/>
            <Input value={live} onChange={({target: {value}}) => set('live', value)}/>
        </div>
    )
}

export default Live
