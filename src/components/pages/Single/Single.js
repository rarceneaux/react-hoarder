import React from 'react';
import itemData from '../../../helpers/data/itemData';
import SingleItemCard from '../../shared/SingleItemCard/SingleItemCard';

class Single extends React.Component {
  state = {
    item: {},
  }

  getItemData = (itemId) => {
    itemData.getItemsByUid(itemId)
      .then((item) => this.setState({ item }))
      .catch((error) => console.error('error', error));
  }

  componentDidMount() {
    const { itemId } = this.props.match.params;
    console.log(itemId);
    console.log(this.props.match);
    itemData.getSingleItem(itemId)
      .then((response) => {
        this.setState({ item: response.data });
        // this.getItemData(itemId);
      });
  }

  render() {
    const { item } = this.state;
    return (
      <div className="Single Stuff">
    {/* <h1>{item.itemName}</h1>
    <p>{item.itemDesctiption}</p> */}
    <div className="items d-flex flex-wrap">
      {<SingleItemCard key={item.id} item={item}/>}
    </div>
    </div>
    );
  }
}

export default Single;
