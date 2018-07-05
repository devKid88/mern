import React, { Component } from 'react';
import {
    Container,
    Button,
    ListGroup,
    ListGroupItem
} from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import PropTypes from "prop-types";

import { getItems, deleteItem } from '../actions/itemActions';
class ShoppingList extends Component {

    componentDidMount() {
        this.props.getItems();
    }

    onDeleteClick = id => {
        this.props.deleteItem(id);
    }

    render() {
        const { items } = this.props.item
        return (
            <Container>

                <ListGroup>
                    {items.map(({ id, name }) => (
                        <CSSTransition key={id} timeout={500}>
                            <ListGroupItem>
                                <Button
                                    className="remove-btn"
                                    color="danger"
                                    size="sm"
                                    onClick={this.onDeleteClick.bind(this, id)}
                                >&times;</Button>
                                {name}
                            </ListGroupItem>
                        </CSSTransition>
                    ))}
                </ListGroup>
            </Container>
        )
    }
}

ShoppingList.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    item: state.item
});


export default connect(mapStateToProps, { getItems, deleteItem }) (ShoppingList);