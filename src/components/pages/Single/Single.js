import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SingleItemCard from '../../shared/SingleItemCard/SingleItemCard';
import itemShape from '../../../helpers/propz/itemShape';


class Single extends React.Component {
  static propTypes = {
    item: PropTypes.arrayOf(itemShape.itemShape),
  }

  render() {
    const { item } = this.props;
    return (
      <div className="Single Stuff">
        <h1>Single</h1>
        {/* <div className="SingleItemCard">
      <div className="card">
          <div className="card-body">
          <h5 className="card-title">{item.itemName}</h5>
          <img src={item.itemImage} className="card-img-top" alt="..."/>
            <p className="card-text">{item.itemDescription}</p>
    <Link className="btn btn-warning" to={`/stuff/${item.id}/edit`}>Edit</Link>
    <Link className="btn btn-secondary" to={`/stuff/${item.id}`}>Single</Link> */}
    </div>
    );
  }
}

export default Single;
