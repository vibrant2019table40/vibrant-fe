import React from 'react'
import {Button} from 'antd'
import {useHistory} from 'react-router'
import shortid from 'shortid'

const AddCasePlanButton = () => {
    const history = useHistory()

    return (
        <Button onClick={() => history.push(`/${shortid.generate()}`)}>Start a new case plan</Button>
    )
}

export default AddCasePlanButton
