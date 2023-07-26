import React from 'react'
import { Form, Button } from 'react-bootstrap'

const AddForm = () => {
  return (
    <Form>
         <Form.Group className='form_container mb-1'>
                <Form.Control
                    type="text"
                    placeholder="Name *"
                    required 
                />
            </Form.Group>

            <Form.Group className='form_container mb-1'>
                <Form.Control
                    type="email"
                    placeholder="Email *"
                    required 
                />
            </Form.Group>

            <Form.Group className='form_container mb-1'>
                <Form.Control
                    as="textarea"
                    placeholder="Address *"
                    rows={3} 
                />
            </Form.Group>

            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Phone"
                />
            </Form.Group>

            <Button className='modal_button mt-3' variant="success" type="submit" block>
                Add New Employee
            </Button>
    </Form>
  )
}

export default AddForm;