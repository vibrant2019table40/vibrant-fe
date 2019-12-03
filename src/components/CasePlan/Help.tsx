import React, {useContext} from 'react'
import Step from './Step';
import PersonListManager from "./PersonListManager";
import {CasePlanContext} from "./index";

const Help = () => {
    const {help, set} = useContext(CasePlanContext)

    return (
        <div>
            <Step number={4} description='People whom I can ask for help'/>

            <PersonListManager items={help} setItems={(x) => set('help', x)}/>
        </div>
    )
}

export default Help
