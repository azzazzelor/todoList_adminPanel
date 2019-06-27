import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

export default class AddListForm extends Component {

    constructor(...props) {
        super(...props);

        this.todoList = {
            name: '',
            email: '',
            text: ''
        };
        this.saveTodoList = this.saveTodoList.bind(this);
    }

    saveTodoList(event) {
        event.preventDefault();

        const data = new FormData(event.target);
        const { create } = this.props;

        let list = {};
        data.forEach(function(value, key){
            list[key] = value;
        });
        create(list)
    }

    render() {
        return (
            <Form onSubmit={this.saveTodoList}>
                <Form.Row>
                    <Form.Group as={Col} controlId="formUserName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control name="username" type="text" placeholder="Enter your name"/>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formUserEmail">
                        <Form.Label>User email</Form.Label>
                        <Form.Control name="email" type="text" placeholder="Enter your email"/>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group controlId="formListText">
                        <Form.Label>Text item</Form.Label>
                        <Form.Control name="text" as="textarea" rows="2" placeholder="Enter text of todo item"/>
                        <Form.Text>
                        Enter text for your item
                        </Form.Text>
                    </Form.Group>
                </Form.Row>
                <Button type="submit" >Submit form</Button>
            </Form>
        );
    }
}
