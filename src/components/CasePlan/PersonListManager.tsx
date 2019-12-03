import React from 'react'
import {Input, Icon, Button} from 'antd';
import shortid from 'shortid';
import {TextListItem} from './index';

interface PersonListManagerProps {
    items: TextListItem[]
    setItems: (i: TextListItem[]) => void
}

const PersonListManager: React.FC<PersonListManagerProps> = ({items, setItems}) => {
    const changeItem = (id: string, text: string) => setItems(items.map(i => i.id === id ? {...i, text} : i))

    return (
        <div>
            <ul>{items.map((i: TextListItem) => (
                <li key={i.id}>
                    <Input onChange={({target: {value}}) => changeItem(i.id, value)} style={{marginBottom: 5}}
                           value={i.text}/>
                </li>)
            )}
            </ul>

            <div>
                <Button onClick={() => setItems([...items, {id: shortid.generate(), text: ''}])}>
                    <Icon type='plus'/> Add
                </Button>
            </div>
        </div>
    )
}

export default PersonListManager
