import React, { useEffect, useState } from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useNavigate } from 'react-router';

const Update = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checked, setChecked] = useState(false);
    const [id, setID] = useState(null);
    const navigate = useNavigate()

    useEffect(() => {
        setID(localStorage.getItem('ID'))
        localStorage.getItem('First Name');
        localStorage.getItem('Last Name');
        localStorage.getItem('CheckBox Value');
    }, [])

    const updateAPIData = () => {
        axios.put(`https://6572d8d6192318b7db411dbf.mockapi.io/CRUDdata/${id}`,
            {
                firstName,
                lastName,
                checked
            }
        )
        navigate("/read")
    }


    return (
        <>
            <Form>
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions' onChange={(e) => setChecked(!checked)} />
                </Form.Field>
                <Button type='submit' onClick={updateAPIData}>Update</Button>
            </Form>

        </>


    )

}

export default Update