import React from 'react';

const InputForm = (props) => {
  return (
    <form onSubmit={props.onSubmit}>
      <div className='form-group'>
        <label>Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Name"
          name="name"
          value = {props.item.name}
          onChange = {props.onChange} />
      </div>
      <div className='form-group'>
        <label>Cost per Unit</label>
        <input
          type="number"
          className="form-control"
          placeholder="Cost"
          name="cost"
          value = {props.item.cost}
          onChange = {props.onChange} />
      </div>
      <div className="checkbox">
        <label>
          <input
            type="checkbox"
            name="inShoppingList"
            value = {props.item.inShoppingList}
            onChange = {props.onChange} />Add to Cart
        </label>
      </div>
      <button type="submit" className="btn btn-default">Submit</button>
    </form>
  );
}

export default InputForm;
