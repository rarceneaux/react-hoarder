import React from 'react';
import './ItemForm.scss';
import authData from '../../../helpers/data/authData';
import itemData from '../../../helpers/data/itemData';


class ItemForm extends React.Component {
  state = {
    itemName: '',
    itemImage: '',
    itemDescription: '',
  }

  componentDidMount() {
    const { itemId } = this.props.match.params;
    if (itemId) {
      itemData.getSingleItem(itemId)
        .then((response) => {
          this.setState({ itemName: response.data.itemName, itemImage: response.data.itemImage, itemDescription: response.data.itemDescription });
          this.getItemData(itemId);
        })
        .catch((err) => console.error('error in item form', err));
    }
  }

nameChange = (e) => {
  e.preventDefault();
  this.setState({ itemName: e.target.value });
}

imageChange = (e) => {
  e.preventDefault();
  this.setState({ itemImage: e.target.value });
}

descriptionChange = (e) => {
  e.preventDefault();
  this.setState({ itemDescription: e.target.value });
}

saveItemEvent = (e) => {
  e.preventDefault();
  const newItem = {
    itemName: this.state.itemName,
    itemDescription: this.state.itemDescription,
    itemImage: this.state.itemImage,
    uid: authData.getUid(),
  };
  itemData.addItem(newItem)
    .then(() => this.props.history.push('/stuff'))
    .catch((err) => console.error('err', err));
}

render() {
  const { itemName, itemImage, itemDescription } = this.state;
  const { itemId } = this.props.match.params;
  return (
      <div className="ItemForm">
         <form className="items-stuf">
       <div className="form-group">
         <label htmlFor="item-name">Item Name</label>
         <input 
         type="text"
         className="form-control"
         id="item-name"
         placeholder="Enter Item Name"
         value={itemName}
         onChange={this.nameChange}
         />
       </div>
       <div className="form-group">
         <label htmlFor="item-description">Item Description</label>
         <input 
         type="text"
         className="form-control"
         id="item-description"
         placeholder="Enter Item Info"
         value={itemDescription}
         onChange={this.descriptionChange}
         />
       </div>
       <div className="form-group">
         <label htmlFor="item-image">Picture</label>
         <input
         type="text"
         className="form-control"
         id="item-image"
         placeholder="Enter Item Pic"
         value={itemImage}
         onChange={this.imageChange}
         />
       </div>
       { itemId
         ? <button className="btn btn-secondary" onClick={this.editBoardEvent}>Edit Board</button>
         : <button className="btn btn-secondary" onClick={this.saveItemEvent}>Save Item</button>
       }
      </form>
      </div>
  );
}
}

export default ItemForm;
