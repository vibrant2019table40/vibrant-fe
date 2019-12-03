import React, {useContext, useReducer} from 'react'
import {Button} from 'antd';
import WarningSigns from './WarningSigns';
import CopingStrategies from './CopingStrategies';
import Distractions from './Distractions';
import Help from './Help';
import Professionals from './Professionals';
import Safety from './Safety';
import Live from './Live';

export interface ListItem {
    id: string
}

export interface TextListItem extends ListItem {
    text: string
}

export interface PersonItem extends ListItem {
    name: string
    phone: string
}

export interface CasePlan {
    warnings: TextListItem[]
    coping: TextListItem[]
    distractions: (PersonItem | TextListItem)[]
    help: string[]
    professionals: string[]
    safety: TextListItem[]
    live: string
    set: (entity: string, payload: any) => void
}

const initCasePlan: CasePlan = {
    coping: [],
    distractions: [],
    help: [],
    live: "",
    professionals: [],
    safety: [],
    warnings: [],
    set: (entity, payload) => console.log(entity, payload)
}

const CasePlanReducer: React.Reducer<CasePlan, { type: string, payload: any }> = (state, action) => {
    switch (action.type) {
        case 'warnings':
            return {...state, warnings: action.payload}
        case 'coping':
            return {...state, coping: action.payload}
        case 'safety':
            return {...state, safety: action.payload}
        case 'live':
            return {...state, live: action.payload}
        default:
            return state
    }
}

export const CasePlanContext = React.createContext<CasePlan>(initCasePlan)

const CasePlanProvider: React.FC = (props) => {
    const [casePlan, dispatch] = useReducer(CasePlanReducer, initCasePlan)

    return <CasePlanContext.Provider value={{
        ...casePlan,
        set: (type, payload) => dispatch({type, payload})
    }}>{props.children}</CasePlanContext.Provider>
}

const CasePlan = () => {
    const {coping, live, safety, warnings, distractions, help, professionals} = useContext(CasePlanContext)

    const save = () => fetch(`https://aleaujvp3b.execute-api.us-east-1.amazonaws.com/Prod/caseplans/${window.location.pathname.split('/')[1]}`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({coping, live, safety, warnings, distractions, help, professionals})
    })

    return (
        <CasePlanProvider>
            <WarningSigns/>
            <CopingStrategies/>
            <Distractions/>
            <Help/>
            <Professionals/>
            <Safety/>
            <Live/>

            <div style={{float: 'right', marginTop: 15}}>
                <Button style={{marginRight: 5}}>Share</Button>
                <Button type='primary' onClick={() => save()}>Save</Button>
            </div>
        </CasePlanProvider>
    )
}

export default CasePlan
