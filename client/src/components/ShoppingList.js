import React, { Component } from 'react';
import {
    Container,
    Button,
    ListGroup,
    ListGroupItem
} from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';

class ShoppingList extends Component {
    state = {
        items: [
            {
                id: uuid(), name: 'Item 1'
            },
            {
                id: uuid(), name: 'Item 2'
            },
            {
                id: uuid(), name: 'Item 3'
            },
            {
                id: uuid(), name: 'Item 4'
            },
        ]
    }


    render() {
        const { items } = this.state;
        return (
            <Container>
                <Button color="dark" 
                        onClick={() => {
                        const name = prompt('Enter name');
                        if (name) {
                            this.setState(state => ({
                                items: [...state.items, { id: uuid(), name }]
                            }));
                        }
                    }}
                > Add item
                </Button>
                <ListGroup>
                    {/* <TransitionGroup className="shopping-list"> */}
                        {items.map(({ id, name }) => (
                            <CSSTransition key={id} timeout={500}>
                                <ListGroupItem>
                                    <Button
                                        className="remove-btn"
                                        color="danger"
                                        size="sm"
                                        onClick={() => {
                                            this.setState(state => ({
                                                items: state.items.filter(item => item.id !== id)
                                            }));
                                        }}
                                    >&times;</Button>
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    {/* </TransitionGroup> */}
                </ListGroup>
            </Container>
        )
    }
}

export default ShoppingList;