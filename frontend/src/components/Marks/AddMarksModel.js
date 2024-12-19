import React from 'react';
import {Modal, Col, Row, Form, Button} from 'react-bootstrap';
import {FormControl, FormGroup, FormLabel} from 'react-bootstrap';
import {Table} from 'react-bootstrap';

// import {addMarks} from '../../services/MarksService';
const AddMarksModel = (props) => {
// const handleSubmit= (e) => {
//     e.preventDefault();
// addMarks=(e.target).then(
//     (result)=>{
    
//     },  
//     (error)=>{
//         alert("Failed to Add Marks");
//     })

// }
    return(
        <div className="container">
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered >

                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Fill In Student Information
                    </Modal.Title>
                </Modal.Header>

                                <Modal.Body>
                                    <Row>
                                        <Col md={12}>

                                            {/* <Form onSubmit={handleSubmit}> */}
                                            <Form>
                                <Form.Group controlId="StudentId">
                                    <Form.Label>Student ID</Form.Label>
                                    <Form.Control type="text" name="StudentId" required placeholder="" />
                            </Form.Group>
                                            <Form.Group controlId="Course">
                                                    <Form.Label>Course</Form.Label>
                                                    <Form.Control type="text" name="Course" required placeholder="" />
                                            </Form.Group>
                                            <Form.Group controlId="Marks">
                                                    <Form.Label>Marks.</Form.Label>
                                                    <Form.Control type="text" name="Marks" required placeholder="" />
                                            </Form.Group>






                                        
                                            <Form.Group>
                                                <p></p>
                                                <Button variant="primary" type="submit">
                                                    Submit
                                                </Button>
                                            </Form.Group>
                                            </Form>
                                        </Col>
                                    </Row>
                                </Modal.Body>

    <Modal.Footer>
                <Button variant="danger" type="submit" onClick={props.onHide}>
                        Close
                </Button>

                </Modal.Footer>
            </Modal>
        </div>
    );
};
    export default AddMarksModel;