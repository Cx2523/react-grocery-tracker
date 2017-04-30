import React from 'react';
import ItemDataList from './ItemDataList.js';
import NewItemInput from './NewItemInput.js';
import ShoppingList from './ShoppingList.js';

class Lists extends React.Component {

  constructor(props) {
    super();
    this.state = {
      itemList :
        [
          {
            name: "Bread",
            cost: 3,
            inShoppingList: 0
          },
          {
            name: "E",
            cost: 5,
            inShoppingList: 0
          },
          {
            name: "Yogurt",
            cost: 7,
            inShoppingList: 0
          }
        ]
      }
    this.newItemSubmit = this.newItemSubmit.bind(this);
    this.addItemToShoppingList = this.addItemToShoppingList.bind(this);
    this.subtractItemFromShoppingList = this.subtractItemFromShoppingList.bind(this);
  }

  addItemToShoppingList(itemName){
    this.setState((prevState) => {
      prevState.itemList.find((item) => {
        return item.name === itemName;
      }).inShoppingList++;
    });
  }

  subtractItemFromShoppingList(itemName){
    this.setState((prevState) => {
      let item =
          prevState.itemList.find((item) => {
            return item.name === itemName;
          });
      //don't allow negative quantities
      if (item.inShoppingList > 0 ){
        item.inShoppingList--;
        }
    });

  }

  newItemSubmit(event, newItemObj){
    event.preventDefault();
    this.setState((prevState) => {
      prevState.itemList.push(newItemObj);
    });

  }

  render() {
    return(
      <div>
        <div className="row">
          <div className="col-xs-6">
            <NewItemInput newItemSubmit={this.newItemSubmit}/>
            <ItemDataList itemList={this.state.itemList} addItemToShoppingList={this.addItemToShoppingList}
            subtractItemFromShoppingList={this.subtractItemFromShoppingList}
            />
          </div>
          <div className="col-xs-6">
            <ShoppingList itemList={this.state.itemList}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Lists;
