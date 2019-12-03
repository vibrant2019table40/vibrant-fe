import React, {useContext} from 'react'
import Step from './Step';
import TextListManager from './TextListManager';
import {CasePlanContext} from './index';

const WarningSigns = () => {
    const {warnings, set} = useContext(CasePlanContext)

    return (
        <div>
            <Step number={1}
                  description='Warning signs (thoughts, images, mood, situation, behavior) that a crisis may be developing'/>
            <TextListManager items={warnings} setItems={(x) => set('warnings', x)}/>
        </div>
    )
}

export default WarningSigns
