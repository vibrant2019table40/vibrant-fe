import React, {useContext} from 'react'
import Step from "./Step";
import PersonListManager from "./PersonListManager";
import {CasePlanContext} from "./index";

const Distractions = () => {
    const {distractions, set} = useContext(CasePlanContext)
    const {persons} = distractions

    return (
        <div>
            <Step number={3} description='People and social settings that provide distraction'/>

            <PersonListManager items={persons} setItems={(persons) => set('distractions', {...distractions, persons})}/>
        </div>
    )
}

export default Distractions
