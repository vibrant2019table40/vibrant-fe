import React, {useCallback, useContext, useEffect, useReducer} from 'react'
import {Button, Col, Input, Row} from 'antd';
import WarningSigns from './WarningSigns';
import CopingStrategies from './CopingStrategies';
import Distractions from './Distractions';
import Help from './Help';
import Professionals from './Professionals';
import Safety from './Safety';
import Live from './Live';

const {Search} = Input

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
    professionals: PersonItem[]
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
    live: '',
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
        case 'loaded':
            return action.payload
        case 'professionals':
            return {...state, professionals: action.payload}
        default:
            return state
    }
}

export const CasePlanContext = React.createContext<CasePlan>(initCasePlan)

const CasePlanProvider: React.FC = (props) => {
    const [casePlan, dispatch] = useReducer(CasePlanReducer, initCasePlan)

    useEffect(() => {
        fetch(`https://aleaujvp3b.execute-api.us-east-1.amazonaws.com/Prod/caseplans/${window.location.pathname.split('/')[1]}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }).then((data) => {
            if (data.status === 200) {
                data.json().then((payload) => {
                    dispatch({type: 'loaded', payload})
                })
            }
        })
    }, [])

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
    }).then(() => window.alert('Saved Successfully')).catch(() => window.alert('Something went wrong')), [coping, live, safety, warnings, distractions, help, professionals])

    const share = (code: string, email: string) => fetch(`https://aleaujvp3b.execute-api.us-east-1.amazonaws.com/Prod/share/`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            code,
            email
        })
    }).then(() => window.alert('Shared Successfully')).catch(() => window.alert('Something went wrong'))

    return (
        <div style={{marginBottom: 30}}>
            <WarningSigns/>
            <CopingStrategies/>
            <Distractions/>
            <Help/>
            <Professionals/>
            <Safety/>
            <Live/>

            <Row style={{marginTop: 15}}>
                <h2>Share:</h2>
                <Col span={12}>
                    <Search placeholder='Email'
                            onSearch={(value: string) => share(window.location.pathname.split('/')[1], value)}
                            enterButton='Send'/>
                </Col>

            </Row>

            <div style={{marginTop: 30}}>
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
