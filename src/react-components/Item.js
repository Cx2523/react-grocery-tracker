import React from 'react';

const Item = (props) => {
  console.log(props);
  return (
    <div className="item-box">
      <div className="item-info">
        <h4>{props.item.name}</h4>
        <h5>$ {props.item.cost}</h5>
      </div>
      <div className="control-button"><span className="glyphicon glyphicon-plus"></span></div>
      <div className="control-button"><span className="glyphicon glyphicon-cog"></span></div>
      <div className="control-button"><span className="glyphicon glyphicon-remove"></span></div>
    </div>
  );
}

export default Item;
