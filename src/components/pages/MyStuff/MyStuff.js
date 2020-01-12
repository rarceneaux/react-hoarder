import React from 'react';
// import { Link } from 'react-router-dom';
import authData from '../../../helpers/data/authData';
import SingleItemCard from '../../shared/SingleItemCard/SingleItemCard';
import itemShape from '../../../helpers/propz/itemShape';
import itemData from '../../../helpers/data/itemData';
import './MyStuff.scss';


class MyStuff extends React.Component {
  state = {
    items: [],
  }

  getItems = () => {
    itemData.getItemsByUid(authData.getUid())
      .then((items) => this.setState({ items }))
      .catch((err) => console.error('error from items', err));
  }

  componentDidMount() {
    this.getItems();
  }

  render() {
    return (
      // <h1>My Stuff</h1>
      <div className="MyStuff">
        {this.state.items.map((item) => <SingleItemCard key={item.id} item={item}/>)}
      </div>
    );
  }
}

export default MyStuff;
