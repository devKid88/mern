import React, { Component } from 'react';
import {
    Container,
    Button,
    ListGroup,
    ListGroupItem
} from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';
import { connect } from 'react-redux';
import PropTypes from "prop-types";

import { getItems } from '../actions/itemActions';
class ShoppingList extends Component {

    componentDidMount() {
        this.props.getItems();
    }

    render() {
        const { items } = this.props.item
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
                    <TransitionGroup className="shopping-list">
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
                    </TransitionGroup>
                </ListGroup>
            </Container>
        )
    }
}

ShoppingList.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    item: state.item
})


export default connect(mapStateToProps, { getItems }) (ShoppingList);