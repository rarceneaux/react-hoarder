import React from 'react';
import { Link } from 'react-router-dom';

import './MyStuff.scss';


class MyStuff extends React.Component {
  render() {
    return (
      <div className="MyStuff">
        <h1>My Stuff</h1>
        <Link className="btn btn-warning" to={'/stuff/12345/edit'}>Edit</Link>
        <Link className="btn btn-secondary" to={'/stuff/12345'}>Single</Link>
      </div>
    );
  }
}

export default MyStuff;
