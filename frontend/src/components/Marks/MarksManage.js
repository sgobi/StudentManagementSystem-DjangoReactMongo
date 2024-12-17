// import React,{ useEffect, useState }from 'react';
import React,{ useEffect, useState }from 'react';
import {Table} from 'react-bootstrap';
import {Button,ButtonToolbar } from 'react-bootstrap';
import { getMarks } from '../../services/MarksService';


const MarksManage =  () => {
  console.log('HelloWorld component rendered');
   const [marks,setMarks] = useState([]);
   useEffect(() => {
       let mounted = true;
       if(marks.length) // && !isUpdated)
         {
          console.log('Marks data already loaded:', marks);
        return;
        }
        getMarks()
         .then(data => {
           if(mounted) {
             setMarks(data);
           }
         })
       return () => {
          mounted = false;
          // setIsUpdated(false);
       }
     }, [marks])

    return (
      <div className="container-fluid side-container">
        <div className="row side-row" >
        <p id="manage"></p>
            <Table striped bordered hover className="react-bootstrap-table" id="dataTable">
                <thead>
                <tr>
                  <th >ID</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Registration No</th>
                  <th>Email</th>
                  <th>Course</th>
                  <th>Action</th>
                </tr>
                </thead>

         
               <tbody>
                  { marks.map((mark) =>

                  <tr key={mark.marksId}>
               <td>{mark.studentId}</td>
               <td>{mark.Course}</td>

               <td>{mark.Marks}</td>
              

         
                 
                 
                 
                  
          
                  <td>

                  {/* <Button className="mr-2" variant="danger"
                    onClick={event => handleDelete(event,stu.studentId)}>
                        <RiDeleteBin5Line />
                  </Button>
                  <span>&nbsp;&nbsp;&nbsp;</span>
                  <Button className="mr-2"
                    onClick={event => handleUpdate(event,stu)}>
                        <FaEdit />
                  </Button>
                  <UpdateStudentModal show={editModalShow} student={editStudent} setUpdated={setIsUpdated}
                              onHide={EditModelClose}></UpdateStudentModal> */}
                </td>
                </tr>)}
              </tbody> 
            </Table>
            <ButtonToolbar>
                <Button variant="primary">
                   {/* onClick={handleAdd}> */}
                Add Student
                </Button>
                {/* <AddStudentModal show={addModalShow} setUpdated={setIsUpdated}
                onHide={AddModelClose}></AddStudentModal> */}
            </ButtonToolbar>
        </div>
        </div>
    );
  };
export default MarksManage;