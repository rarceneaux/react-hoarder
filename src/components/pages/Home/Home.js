import React from 'react';
import authData from '../../../helpers/data/authData';
import itemData from '../../../helpers/data/itemData';

class Home extends React.Component {
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
      <div className="Home">
        <h1>HOME</h1>
      </div>
  );
}
}

export default Home;
