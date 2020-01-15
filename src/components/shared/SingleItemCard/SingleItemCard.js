import React from 'react';
import { Link } from 'react-router-dom';
import Proptypes from 'prop-types';
import './SingleItemCard.scss';

import itemShape from '../../../helpers/propz/itemShape';

class SingleItemCard extends React.Component {
  static propTypes = {
    item: itemShape.itemShape,
    deleteSingleItem: Proptypes.func,
  }

  deleteItemEvent = (e) => {
    e.preventDefault();
    const { deleteSingleItem, item } = this.props;
    deleteSingleItem(item.id);
  }

  render() {
    const { item } = this.props;
    return (
    <div className="SingleItemCard">
      <div className="card">
          <div className="card-body">
          <h5 className="card-title">{item.itemName}</h5>
          {/* <img src={item.itemImage} className="card-img-top" alt="..."/> */}
            <p className="card-text">{item.itemDescription}</p>
    <button className="btn btn-danger" onClick={this.deleteItemEvent}>Delete</button>
    <Link className="btn btn-warning" to={`/stuff/${item.id}/edit`}>Edit</Link>
    <Link className="btn btn-secondary" to={`/stuff/${item.id}`}>Details</Link>
    </div>
    </div>
    </div>
    );
  }
}

export default SingleItemCard;
