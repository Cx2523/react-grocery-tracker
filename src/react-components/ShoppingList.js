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
      <div className="list-group">
        {shoppingList.map((item) => <ShoppingItem key={item.name} item={item} />)}
      </div>
      <h1>Total: {totalCost}</h1>
    </div>
  );
}

export default ShoppingList;
