import React from 'react';
import Item from './Item.js';


//This is the master list of Items
const ItemDataList = (props) => {
  return (
    <div>
      <div className="panel panel-success">
        <div className="panel-heading">
          <a href="#panel-body-collapse" data-toggle="collapse">
            <h3>Item List</h3>
          </a>
          </div>
        <div id="panel-body-collapse" className="collapse">
          <div className="list-group">
            {props.itemList.map((item) => <Item key={item.name} item={item} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDataList;
