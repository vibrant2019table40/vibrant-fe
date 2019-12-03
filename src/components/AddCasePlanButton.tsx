import React from 'react'
import { Button } from 'antd'
import { useHistory } from 'react-router'

function makeid() {
    var result = '';
    const idLength = 5;
    const characters = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ';
    const charactersLength = characters.length;
    for (var i = 0; i < idLength; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

const AddCasePlanButton = () => {
    const history = useHistory()

    return (
        <Button onClick={() => history.push(`/${makeid()}`)}>Start a new case plan</Button>
    )
}

export default AddCasePlanButton
