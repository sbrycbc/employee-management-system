import React from 'react'
import { Form, Button } from 'react-bootstrap';
import { EmployeeContext } from '../context/EmployeeContext';
import { useContext, useState } from 'react';

const AddForm = () => {


  // --- WITH useState() ----  // 
 // const { addEmployee } = useContext(EmployeeContext);

  // --- WITH useReduce() ----  // 
    const { dispatch} = useContext(EmployeeContext);


    /* const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ address, setAddress ] = useState("");
    const [ phone, setPhone ] = useState(""); */

    const [newEmployee, setNewEmployee] = useState({
        name:"", email:"", address: "", phone: ""
    })

    const {name, email, address, phone } = newEmployee;

    const onInputChange = (e) => {
        setNewEmployee({...newEmployee, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //addEmployee(name, email, address, phone) // useState()
        dispatch({type: 'add_employee', employee : {
            name, email, address, phone
        }})
    }

  return (
    <Form onSubmit={handleSubmit}>
         <Form.Group className='form_container mb-1'>
                <Form.Control
                    type="text"
                    placeholder="Name *"
                    name="name"
                    value={name}
                    onChange={e => onInputChange(e)}
                    required 
                />
            </Form.Group>

            <Form.Group className='form_container mb-1'>
                <Form.Control
                    type="email"
                    placeholder="Email *"
                    name="email"
                    value={email}
                    onChange={e => onInputChange(e)}
                    required 
                />
            </Form.Group>

            <Form.Group className='form_container mb-1'>
                <Form.Control
                     as="textarea"
                     placeholder="Address *"
                     name="address"
                     value={address}
                     onChange={e => onInputChange(e)}
                     rows={3} 
                />
            </Form.Group>

            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Phone"
                    name="phone"
                    value={phone}
                    onChange={e => onInputChange(e)}
                />
            </Form.Group>

            <Button className='modal_button mt-3' variant="success" type="submit" block>
                Add New Employee
            </Button>
    </Form>
  )
}

export default AddForm;