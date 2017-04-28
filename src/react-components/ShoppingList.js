import React from 'react';
import Item from './Item.js';

//inputs will be shopping list array
//shopping list is always a subset of ItemDataList

const ShoppingList = (props) => {
  let shoppingList = props.itemList.filter((item) => item.inShoppingList);

  return (
    <div className="list-group">
      {shoppingList.map((item) => <Item key={item.name} item={item} />)}
    </div>
  );
}

export default ShoppingList;
