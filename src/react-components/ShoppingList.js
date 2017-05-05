import React from 'react';
import ShoppingItem from './ShoppingItem.js';

//inputs will be shopping list array
//shopping list is always a subset of ItemDataList

const ShoppingList = (props) => {
  let shoppingList = props.itemList.filter((item) => item.inShoppingList);
  let totalCost = 0;

  if(shoppingList.length > 0){
    totalCost = shoppingList.reduce((accumulator, currentItem) => {
      return accumulator + (currentItem.cost * currentItem.inShoppingList);
    }, 0);
  };
  //shoppingList should also add properties of quantity, quantity * cost
  //if isInShoppingList is true then quantity equals
  //if quantity equals and item is add then increment count

  return (
    <div>
      <h2>Shopping List <span onClick={props.toggleListEdit} className="glyphicon glyphicon-pencil"></span></h2>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Cost per Unit</th>
            <th>Cost</th>
            <th>Purchased</th>
          </tr>
        </thead>
        <tbody>
          {shoppingList.map((item) => <ShoppingItem key={item.name} item={item} />)}
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td></td>
            <td>Total Cost:</td>
            <td>{totalCost}</td>
            <td></td>
          </tr>
        </tfoot>
      </table>

    </div>
  );
}

export default ShoppingList;
