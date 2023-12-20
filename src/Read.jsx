import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Read = () => {

    const [APIdata, setAPIData] = useState([]);

    const setData = (data) => {
        let { id, firstname, lastname, checked } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('First Name', firstname);
        localStorage.setItem('Last Name', lastname);
        localStorage.setItem('CheckBox Value', checked);

    }
    const onDelete = (id) => {
        axios.delete(`https://6572d8d6192318b7db411dbf.mockapi.io/CRUDdata/${id}`).then((getData)=>{setAPIData(getData.data)})
    }
    useEffect(() => {
        axios.get(`https://6572d8d6192318b7db411dbf.mockapi.io/CRUDdata`).then((response) => {
            setAPIData(response.data)
        })
    }, [])

    return (
        <>
            <div>
                <Table singleLine>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>First Name</Table.HeaderCell>
                            <Table.HeaderCell>Last Name</Table.HeaderCell>
                            <Table.HeaderCell>checked</Table.HeaderCell>
                            <Table.HeaderCell>Update</Table.HeaderCell>
                            <Table.HeaderCell>Delete</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {
                        APIdata &&
                        APIdata.map((data) => 

                                <>
                                    <Table.Row>
                                        <Table.Cell>{data.firstName}</Table.Cell>
                                        <Table.Cell>{data.lastName}</Table.Cell>
                                        <Table.Cell>{data.checked ? 'Checked' : 'Unchecked'}</Table.Cell>


                                        <Link to='/update'>
                                            <Table.Cell>
                                                <Button onClick={() => setData(data)}>Update</Button>
                                            </Table.Cell>
                                        </Link>
                                        <Table.Cell>
                                            <Button onClick={() => onDelete(data.id)}>Delete</Button>
                                            </Table.Cell>
                                    </Table.Row>

                                </>
                            )
                        }
                    </Table.Body>
                </Table>
            </div>
        </>
    );
}

export default Read;