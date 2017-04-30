import React from 'react';

const Item = (props) => {
  return (
    <div className="item-box">
      <div className="item-info">
        <h4>{props.item.name}</h4>
        <h5>$ {props.item.cost}</h5>
      </div>
      <div className="control-button"><span className="glyphicon glyphicon-plus" onClick={() => {
        props.addItemToShoppingList(props.item.name);
      }}></span></div>
      <div className="control-button"><span className="glyphicon glyphicon-minus" onClick={() => {
        props.subtractItemFromShoppingList(props.item.name);
      }}></span></div>
      <div className="control-button"><span className="glyphicon glyphicon-cog"></span></div>
    </div>
  );
}

export default Item;
