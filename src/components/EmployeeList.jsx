import React, { useContext, useEffect, useState, useRef } from 'react';
import Employee from './Employee.jsx';
import { Button, Modal } from 'react-bootstrap';
import { EmployeeContext } from '../context/EmployeeContext.jsx';
import AddForm from './AddForm.jsx';



const EmployeeList = () => {

  const {sortedEmployees} = useContext(EmployeeContext)
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false);
  const handleShow = ()=> setShow(true)


  useEffect(() => {
      handleClose();
  }, [sortedEmployees])

  const myRef = useRef(null);
  console.log(myRef.current);

  const onButtonClick = () => {
      console.log(myRef.current);
      myRef.current.focus();
  }


  return (
  <>
    <div className="table-title">
              <div className="row">
                <div className="col-sm-6">
                  <h2>Manage <b>Employees</b></h2>
                </div>
                <div className="col-sm-6">
                  <Button onClick={handleShow} className="btn btn-success text-white " data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Add New Employee</span></Button>
                </div>
              </div>
            </div>

      <table className="table table-striped table-hover">
          <thead>
              <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Address</th>
                  <th>Phone</th>
                  <th>Actions</th>
              </tr>
          </thead>
          <tbody>
          {
                    sortedEmployees.map((employee) =>(
                        <tr key={employee.id}>
                            <Employee employee={employee} />
                        </tr>
                    ))
                }
          </tbody>
      </table>
      <Modal show={show} onHide={handleClose}>
            <Modal.Header className="modal-header m-3 " closeButton>
                <Modal.Title>
                    Add Employee
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <AddForm />
            </Modal.Body>
            <Modal.Footer>
                <Button className="modal_btn mt-2" variant="secondary" onClick={handleClose}>
                    Close Modal
                </Button>
            </Modal.Footer>
        </Modal>

        <input ref={myRef} type="text"></input>
        <button onClick={onButtonClick}>Focus Input</button>

  </>
  )
}

export default EmployeeList;

// .sort((a,b) => a.name.localeCompare(b.name))
// .sort((a,b) => (a.name < b.name ? -1 : 1 ))