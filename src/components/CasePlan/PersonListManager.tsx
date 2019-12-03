import React from 'react'
import {Button, Icon, Input, Form} from 'antd';
import shortid from 'shortid';
import {PersonItem} from './index';

interface PersonListManagerProps {
    items: PersonItem[]
    setItems: (i: PersonItem[]) => void
}

const PersonListManager: React.FC<PersonListManagerProps> = ({items, setItems}) => {
    const changeName = (id: string, name: string) => setItems(items.map(i => i.id === id ? {...i, name} : i))
    const changePhone = (id: string, phone: string) => setItems(items.map(i => i.id === id ? {...i, phone} : i))

    return (
        <div>
            <h4>People:</h4>

            <ul style={{listStyleType: 'none', padding: 0}}>{items.map((i) => (
                <li key={i.id}>
                    <Form.Item label='Name'>
                        <Input onChange={({target: {value}}) => changeName(i.id, value)}
                               style={{marginBottom: 5}}
                               value={i.name}
                               title={'name'}/>
                    </Form.Item>

                    <Form.Item label='Address'>
                        <Input type='phone' onChange={({target: {value}}) => changePhone(i.id, value)}
                               style={{marginBottom: 5}}
                               value={i.phone}/>
                    </Form.Item>
                    <hr/>
                </li>)
            )}
            </ul>

            <div>
                <Button onClick={() => setItems([...items, {id: shortid.generate(), name: '', phone: ''}])}>
                    <Icon type='plus'/> Add Person
                </Button>
            </div>
        </div>
    )
}

export default PersonListManager
