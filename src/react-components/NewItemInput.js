import React from 'react';
import InputForm from './InputForm.js';
import $ from 'jquery';


class NewItemInput extends React.Component {
  //this class contains the form's state
  constructor(props){
    super();
    this.state = {
      name: '',
      cost: '',
      inShoppingList: 0
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event){
    //call newItemSubmit on parent scope with input object
    this.props.newItemSubmit(event, this.state);
    this.state = {name: '', cost: '', inShoppingList: 0 };
    $('input[type="checkbox"]')[0].checked = false;
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
      <div className="panel panel-info">
        <div className="panel-heading">
          <a href="#input-body-collapse" data-toggle="collapse">
            <h3>Create New Item</h3>
          </a>
        </div>
        <div id="input-body-collapse" className="collapse">
          <InputForm item={this.state} onChange={this.onChange} onSubmit={this.onSubmit}/>
        </div>
      </div>
    );
  }

}

export default NewItemInput;
