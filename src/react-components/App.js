import React from 'react';
import ItemDataList from './ItemDataList.js';
import NewItemInput from './NewItemInput.js';
import ShoppingList from './ShoppingList.js';

class App extends React.Component {

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
  }

  addItemToShoppingList(itemName){
    this.setState((prevState) => {
      prevState.itemList.find((item) => {
        return item.name === itemName;
      }).inShoppingList++;
    });
    console.log(this.state);

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
            <ItemDataList itemList={this.state.itemList} addItemToShoppingList={this.addItemToShoppingList}/>
          </div>
          <div className="col-xs-6">
            <ShoppingList itemList={this.state.itemList}/>
          </div>
        </div>
      </div>
    )
  }

}



export default App;
