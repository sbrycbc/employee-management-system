import React, { useContext, useEffect, useState, useReducer, useRef} from 'react';
import Employee from './Employee.jsx';
import { Button, Modal, Alert } from 'react-bootstrap';
import { EmployeeContext } from '../context/EmployeeContext.jsx';
import AddForm from './AddForm.jsx';
import Pagination from './Pagination.jsx';



const EmployeeList = () => {


  const {sortedEmployees} = useContext(EmployeeContext)

  const [showAlert, setShowAlert] = useState(false);
  const [show, setShow] = useState(false)
  const [currentPage, setCurrentPage] = useState(1);
  const [employeesPerPage] = useState(2)

  const handleClose = () => setShow(false);
  const handleShow = ()=> setShow(true)
  // const handleShowAlert = () => setShowAlert(true);

  const handleShowAlert = () => {
    setShowAlert(true);
    setTimeout(()=> {
        setShowAlert(false);
    }, 2000);
};


  useEffect(() => {
      handleClose();

      return () => {
        handleShowAlert();
      }
  }, [sortedEmployees])

   const myRef = useRef(null);
  console.log(myRef.current);

  const onButtonClick = () => {
      console.log(myRef.current);
      myRef.current.focus();
  } 


  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = sortedEmployees.slice(indexOfFirstEmployee, indexOfLastEmployee);
  const totalPagesNum = Math.ceil(sortedEmployees.length /employeesPerPage)

  const reducer = (state, action) => {
    switch(action.type) {
      case 'increment':
        return { count: state.count +1 }

      case 'decrement':
        return { count: state.count -1 }  

      default:
        throw new Error();
    }

  }

  const initialState = { count : 0} 
                                    // yapmasini istedgimiz,  baslangic //
  const [state, dispatch] = useReducer(reducer,               initialState)


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

      <Alert show={showAlert} variant="dark">
        Employee List successfully updated!.
      </Alert>

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
                 currentEmployees.map((employee) =>(
                        <tr key={employee.id}>
                            <Employee employee={employee} />
                        </tr>
                    ))
                }
          </tbody>
      </table>

      <Pagination 
            pages = {totalPagesNum} 
            setCurrentPage  =   {setCurrentPage}
            currentEmployees = {currentEmployees} 
            sortedEmployees = {sortedEmployees}
            />

    
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
       <div className='myref mt-5'>
        <input ref={myRef} type="text"></input>
        <button onClick={onButtonClick}>Focus Input</button> 
        </div>

      <div className='count mt-5'>
       Count : {state.count}
      <button className='count_button' onClick= {() => dispatch({type: 'increment'})}>+</button>
      <button className='count_button' onClick= {() => dispatch({type: 'decrement'})}>-</button>
      </div>
  </>
  )
}

export default EmployeeList;

// .sort((a,b) => a.name.localeCompare(b.name))
// .sort((a,b) => (a.name < b.name ? -1 : 1 ))