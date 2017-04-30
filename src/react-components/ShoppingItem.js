import React from 'react';

const ShoppingItem = (props) => {
  return (
    <tr>
      <td>{props.item.name}</td>
      <td>{props.item.inShoppingList}</td>
      <td>{props.item.cost}</td>
      <td>{props.item.cost * props.item.inShoppingList}</td>
      <td><span className="glyphicon glyphicon-check"></span></td>
    </tr>
  );
}

export default ShoppingItem;
