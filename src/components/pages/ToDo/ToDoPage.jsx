import React, { useState } from 'react'
import { Card, CardBody, CardTitle, Badge, Button } from 'reactstrap';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';
import ToDoService from '../../../services/ToDoService';

const ToDoPage = () => {

    const [toDoItems, setToDoItems] = useState([]);

    const toDoService = new ToDoService();

    const handleOnAdd = (data, onSuccess) => {

        if (toDoService.IsUnique(data, toDoItems)) {
            data.id = toDoService.GenerateNextId(toDoItems);
            data.isSelected = false;

            setToDoItems([...toDoItems, data]);

            if (onSuccess) {
                onSuccess();
            }
        } else {
            alert("Invalid item");
        }
    };

    const handleToggleSelect = id => {
        var index = toDoItems.findIndex(item => item.id === id);

        var newArray = [...toDoItems];
        newArray[index].isSelected = !newArray[index].isSelected;

        setToDoItems(newArray);
    }

    const handleMarkAsDone = () => {

        setToDoItems([...toDoItems.filter(item => !item.isSelected)]);
    }


    const markAsDoneIsVisible = toDoItems.some(item => item.isSelected);

    return (
        <Card className="center">
            <CardBody>
                <CardTitle>
                    <h1 className="text-center">
                        <Badge color="info">To Do List Manager</Badge>
                    </h1>
                    <br />
                </CardTitle>

                <ToDoForm onAdd={handleOnAdd} />

                <ToDoList
                    items={toDoItems}
                    onSelected={handleToggleSelect} />

                {
                    markAsDoneIsVisible &&
                    <div className="text-center">
                        <Button
                            color="success"
                            onClick={handleMarkAsDone}>
                            Mark as done
                            </Button>
                    </div>
                }
            </CardBody>
        </Card>);
};

export default ToDoPage;