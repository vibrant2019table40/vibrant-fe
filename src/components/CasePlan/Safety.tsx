import React, {useContext} from 'react'
import Step from './Step';
import {CasePlanContext} from './index';
import TextListManager from './TextListManager';

const Safety = () => {
    const {safety, set} = useContext(CasePlanContext)

    return (
        <div>
            <Step number={6} description='Making the environment safe'/>
            <TextListManager items={safety} setItems={(x) => set('safety', x)}/>
        </div>
    )
}

export default Safety
