import React, { useState } from 'react'
import { Form, FormGroup, Label, Input, Button, Row, Col } from 'reactstrap';

const ToDoForm = ({ onAdd }) => {

    const [toDoTitle, setToDoTitle] = useState("");

    const handleTextChange = event => {
        setToDoTitle(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();

        const toDoItem = {
            title: event.target.toDoText.value,
        };

        onAdd(toDoItem, () => {
            setToDoTitle("");
        });
    };

    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label for="toDoInput">Item to add to the To Do List</Label>
                <Row>
                    <Col lg={11}>
                        <Input
                            value={toDoTitle}
                            onChange={handleTextChange}
                            type="text"
                            name="toDoText"
                            id="toDoInput"
                            placeholder="To do title"
                            autoComplete="off" />
                    </Col>
                    <Col lg={1}>
                        <Button color="success" type="submit" className="float-right">Add</Button>
                    </Col>
                </Row>
            </FormGroup>
        </Form>
    );
};

export default ToDoForm;