import React, { useState } from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useNavigate } from 'react-router';

const Create = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [checked, setChecked] = useState(false);
    const navigate = useNavigate()

    const postData = () => {
        axios.post(`https://6572d8d6192318b7db411dbf.mockapi.io/CRUDdata`,
            {
                firstName,
                lastName,
                checked
            }
        )
            navigate("/read")
            
        
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
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
                <Button type='submit' onClick={postData}{...handleSubmit}>Submit</Button>
            </Form>
            
        </>


    )

}

export default Create