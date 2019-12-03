import React from 'react'
import {Input} from 'antd'
import {useHistory} from 'react-router-dom'

const {Search} = Input;

const OpenPreviousCasePlan: React.FC = () => {
    const history = useHistory()

    return (
        <div>
            <Search placeholder="Case Number"
                    onSearch={(value: string) => history.push(`/${value}`)}
                    enterButton='Open'/>
        </div>
    )
}

export default OpenPreviousCasePlan
