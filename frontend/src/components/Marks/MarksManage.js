// import React,{ useEffect, useState }from 'react';
import React,{ useEffect, useState }from 'react';
import {Table} from 'react-bootstrap';
import {Button,ButtonToolbar } from 'react-bootstrap';
import { FaEdit } from 'react-icons/fa';
import { RiDeleteBin5Line } from 'react-icons/ri';

import { getMarks, deleteMarks } from '../../services/MarksService';


const MarksManage =  () => {
  console.log('HelloWorld component rendered');
   const [marks,setMarks] = useState([]);
    const [isUpdated, setIsUpdated] = useState(false);
   useEffect(() => {
       let mounted = true;
       if(marks.length && !isUpdated)
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
          setIsUpdated(false);
       }
     }, [isUpdated, marks])
    const handleDelete = (e, marksId) => {
        if(window.confirm('Are you sure ?')){
            e.preventDefault();
            deleteMarks(marksId)
            .then((result)=>{
                alert(result);
                setIsUpdated(true);
            },
            (error)=>{
                alert("Failed to Delete Marks");
            })
        }
    };
    return (
      <div className="container-fluid side-container">
        <div className="row side-row" >
        <p id="manage"></p>
            <Table striped bordered hover className="react-bootstrap-table" id="dataTable">
                <thead>
                <tr>
                <th >No</th>
                  <th >MarksID</th>
                  <th>Student ID</th>
       
                  <th>Marks</th>
                  <th>Action</th>
                </tr>
                </thead>

         
               <tbody>
                  { 
                  marks.map((mark,index) =>

                  <tr key={mark.marksId}>
                        <td>{index +1}</td>
               <td>{mark.studentId}</td>
               <td>{mark.Course}</td>

               <td>{mark.Marks}</td>
              

         
                 
                 
                 
                  
          
                  <td>

                  <Button className="mr-2" variant="danger"    onClick={event => handleDelete(event,mark.marksId)}>
                  <RiDeleteBin5Line />
                    
                    </Button>
                  <span>&nbsp;&nbsp;&nbsp;</span>
                  <Button className="mr-2">
                        <FaEdit />
                  </Button>
                  {/* 
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
                Add Marks
                </Button>
                {/* <AddStudentModal show={addModalShow} setUpdated={setIsUpdated}
                onHide={AddModelClose}></AddStudentModal> */}
            </ButtonToolbar>
        </div>
        </div>
    );
  };
export default MarksManage;