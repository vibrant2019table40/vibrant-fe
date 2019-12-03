import React, {useCallback, useContext, useReducer} from 'react'
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
    distractions: {
        persons: PersonItem[]
    }
    help: PersonItem[]
    professionals: string[]
    safety: TextListItem[]
    live: string
    set: (entity: string, payload: any) => void
}

const initCasePlan: CasePlan = {
    coping: [],
    distractions: {
        persons: []
    },
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
        case 'distractions':
            return {...state, distractions: action.payload}
        case'help':
            return {...state, help: action.payload}
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

const CasePlanForm = () => {
    const {coping, live, safety, warnings, distractions, help, professionals} = useContext(CasePlanContext)

    const save = useCallback(() => fetch(`https://aleaujvp3b.execute-api.us-east-1.amazonaws.com/Prod/caseplans/${window.location.pathname.split('/')[1]}`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({coping, live, safety, warnings, distractions, help, professionals})
    }), [coping, live, safety, warnings, distractions, help, professionals])

    return (
        <div>
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
        </div>
    )
}

const CasePlan = () => {
    return (
        <CasePlanProvider>
            <CasePlanForm/>
        </CasePlanProvider>
    )
}

export default CasePlan
