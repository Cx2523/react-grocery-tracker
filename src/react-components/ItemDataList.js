import React from 'react';
import Item from './Item.js';

//This is the master list of Items
const ItemDataList = (props) => {
  return (
    <div>
      <div className="panel panel-default">
        <div className="panel-heading">
            <h5>Item List</h5>
          </div>
        <div className="panel-body">
          <div className="list-group">
            {props.itemList.map((item) => <Item key={item.name} item={item} addItemToShoppingList={props.addItemToShoppingList}
            subtractItemFromShoppingList={props.subtractItemFromShoppingList}
            />)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDataList;
