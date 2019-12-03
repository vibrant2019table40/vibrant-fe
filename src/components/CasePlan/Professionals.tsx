import React, {useContext} from 'react'
import Step from "./Step";
import {CasePlanContext} from "./index";
import PersonListManager from "./PersonListManager";

const Professionals = () => {
    const {professionals, set} = useContext(CasePlanContext)

    return (
        <div>
            <Step number={5} description='Professionals or agencies I can contact during a crisis'/>
            <PersonListManager items={professionals} setItems={(x) => set('professionals', x)}/>

        </div>
    )
}

export default Professionals
