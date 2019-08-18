import React, { Component } from 'react';
import { observer } from 'mobx-react'

@observer
class Item extends Component {
    checkItem = () => { this.props.store.checkItem(this.props.item.name) }
    editItem = () => {
      let newLocation = prompt("Please type in a new location.") 
      this.props.store.editItem(this.props.item.name, newLocation) 
    }
    deleteItem = () => {
      this.props.store.deleteItem(this.props.item.name)
    }
    render() {
      let item = this.props.item
      return (
        <div className = "">
          <input type="checkbox" onChange={this.checkItem}/>
          <span style={ {textDecoration: item.completed ? "line-through" : null} }>{item.name}</span>
          <span> located at {item.location}</span>
          <button class="editButton" onClick={this.editItem}>Edit</button>          
          <button onClick={this.deleteItem}>Delete</button>
        </div>
      )
    }
}

export default Item