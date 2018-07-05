import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import {connect} from "react-redux";
import {addItem} from '../actions/itemActions';


class ItemModal extends Component {
  state = {
    modal: false,
    name: ''
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  onSubmit = e => {
    e.preventDefault();
    const newItem = {
      id: 11,
      name: this.state.name
    }
    this.props.addItem(newItem);

    this.toggle();
  }

  onChange = e => {
    this.setState({[ e.target.name ]: e.target.value })
  }

  render() {
    return (
      <div>
        <Button color="dark" onClick={this.toggle}>Add Item</Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          >
          <ModalHeader toggle={this.toggle}>
            Add to shopping list
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="item"> Item </Label>
                <Input type="text"
                      name="name"
                      id="item"
                      placeholder="Add item"
                      omChange={this.omChange}
                      />

                <Button color="dark" style={{float: 'right', marginTop: '10px'}} >Add</Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>


    )
  }
}

const mapStateToProps = (state) => ({
  item: state.item
});

export default connect(mapStateToProps, {addItem})(ItemModal);
