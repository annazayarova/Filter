import React, { Component } from 'react';

import { Button, Col, Form, Row } from 'react-bootstrap';

const ITEMS = [
    {
        name: 'Text',
        operation: [ 'Containing', 'Exactly matching', 'Begins with', 'Ends with' ],
        type: 'text'
    }, {
        name: 'Number',
        operation: [ 'Equal', 'Greater than', 'Less than' ],
        type: 'number'
    }
]


class Filter extends Component {
    state = {
        selectedField: 'Text',
        selectedOperation: 'Containing',
        value: ''
    }

    handleFieldChange = (event) => {
        this.setState({ selectedField: event.target.value })
    }

    handleInputChange = (event) => {
        this.setState({ value: event.target.value })
    }

    handleOperationChange = (event) => {
        this.setState({ selectedOperation: event.target.value })
    }

    handleSubmit = () => {
        const { selectedField, selectedOperation, value } = this.state;

        alert(
            `
            Selected Field: ${ selectedField },
            Operation: ${ selectedOperation },
            Value: ${ value }
            `
        );
    };

    render() {
        const { selectedField, value } = this.state;


        const getConditionField = () => {
            const view = ITEMS.filter(({ name }) => name === selectedField)[0];

            return (
                <>
                    <Col>
                        <Form.Control as="select"
                            onChange={ this.handleOperationChange }
                        >
                            { view.operation.map(operation => <option>{ operation }</option>) }
                        </Form.Control>
                    </Col>

                    <Col>
                        <Form.Control onChange={ this.handleInputChange }
                            type={ view.type }
                            value={ value }
                        />
                    </Col>
                </>
            )
        }

        return (
            <Form>
                <Row className='row'>
                    <Col>
                        <Form.Control as="select"
                            onChange={ this.handleFieldChange }
                        >
                            { ITEMS.map(({ name }) => <option value={ name }>{ name }</option>) }
                        </Form.Control>
                    </Col>

                    { getConditionField() }
                </Row>

                <div className='link'
                    onClick={ this.handleAddClick }
                >
                    <span>
                        +
                    </span>

                    Add condition
                </div>

                <div className='divider'>
                    <Button variant="primary"
                        className='mr-2'
                        onClick={ this.handleSubmit }
                    >
                        Apply
                    </Button>

                    <Button variant="outline-secondary">
                        Clear filter
                    </Button>
                </div>
            </Form>
        );
    }
}

export default Filter;
