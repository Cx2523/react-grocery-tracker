import React from 'react';
import InputForm from './InputForm.js';

class NewItemInput extends React.Component {
  //this class contains the form's state
  constructor(props){
    super();
    this.state = {name: '', cost: '', inShoppingList: false };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event){
    //call newItemSubmit on parent scope with input object
    this.props.newItemSubmit(event, this.state);
    this.state = {name: '', cost: '', inShoppingList: false };
  }

  onChange(event){
    let key = event.target.name;
    let value = event.target.value;
    if (key === "inShoppingList") {
      value = event.target.checked;
    }
    this.state[key] = value;
    this.setState(this.state);
  }

  render(){
    return (
      
        <InputForm item={this.state} onChange={this.onChange} onSubmit={this.onSubmit}/>

    );
  }

}

export default NewItemInput;
