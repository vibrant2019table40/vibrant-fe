import React from 'react'
import {Input} from 'antd'

const {Search} = Input;

const OpenPreviousCasePlan: React.FC = () => {
    return (
        <div>
            <Search placeholder="Case Number"
                    onSearch={(value: string) => console.log(value)}
                    enterButton='Open'/>
        </div>
    )
}

export default OpenPreviousCasePlan
