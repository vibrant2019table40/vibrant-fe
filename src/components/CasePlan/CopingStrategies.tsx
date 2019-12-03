import React, {useContext} from 'react'
import Step from "./Step";
import {CasePlanContext} from "./index";
import TextListManager from "./TextListManager";

const CopingStrategies = () => {
    const {coping, set} = useContext(CasePlanContext)

    return (
        <div>
            <Step number={2} description='Internal coping strategies – Things I can do to take my mind off my problems without contacting another
                person (relaxation technique, physical activity)'/>
            <TextListManager items={coping} setItems={(x) => set('coping', x)}/>
        </div>
    )
}

export default CopingStrategies
