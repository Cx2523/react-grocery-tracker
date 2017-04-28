import React from 'react';

const ShoppingItem = (props) => {
  return (
    <div>
      <h2>{props.item.name}</h2>
      <h4>{props.item.cost} * {props.item.inShoppingList} = {props.item.cost * props.item.inShoppingList}</h4>
    </div>
  );
}

export default ShoppingItem;
