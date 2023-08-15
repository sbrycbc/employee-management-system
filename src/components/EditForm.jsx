import { Form, Button } from 'react-bootstrap';
import { EmployeeContext } from '../context/EmployeeContext';
import { useContext, useState } from 'react';

const EditForm = ({theEmployee}) => {

       // --- WITH useState() ----  // 
    //const { updateEmployee } = useContext(EmployeeContext);

      // --- WITH useReduce() ----  // 
    const { dispatch } = useContext(EmployeeContext);


    const employee = theEmployee;
    const id = employee.id;

    const [name, SetName] = useState(employee.name);
    const [email, SetEmail] = useState(employee.email);
    const [address, SetAddress] = useState(employee.address);
    const [phone, SetPhone] = useState(employee.phone);

    const updatedEmployee = {id, name, email, address, phone};

    const handleSubmit = (e) => {
        e.preventDefault();
        // updateEmployee(id, updatedEmployee); ---useState()
        dispatch({type:'update_employee', id, updatedEmployee})
    }


    return (
        <Form onSubmit={handleSubmit}>

            <Form.Group className='form_container mb-1'>
                <Form.Control
                    type="text"
                    placeholder="Name *"
                    name="name"
                    value={name}
                    onChange={(e)=> SetName(e.target.value)}
                    required 
                />
            </Form.Group>

            <Form.Group className='form_container mb-1'>
                <Form.Control
                    type="email"
                    placeholder="Email *"
                    name="email"
                    value={email}
                    onChange={(e)=>SetEmail(e.target.value)}
                    required 
                />
            </Form.Group>

            <Form.Group className='form_container mb-1'>
                <Form.Control
                    as="textarea"
                    placeholder="Address *"
                    name="address"
                    value={address}
                    rows={3} 
                    onChange={(e)=>SetAddress(e.target.value)}
                />
            </Form.Group>

            <Form.Group className='form_container mb-1'>
                <Form.Control
                    type="text"
                    placeholder="Phone"
                    name="phone"
                    value={phone}
                    onChange={(e)=>SetPhone(e.target.value)}
                />
            </Form.Group>

            <Button className='update_button mt-3'variant="success" type="submit" block>
                Update Employee
            </Button>
        </Form>
    )
}

export default EditForm;