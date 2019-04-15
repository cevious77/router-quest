import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './History.css';

class History extends Component {
    render() {
        return (
            <div>
                <img src="https://media.giphy.com/media/Nx0rz3jtxtEre/source.gif" alt="connexion client" />
              <Link to="/">  </Link>
              {this.props.match.params.productNumber}
            </div>
        );
    }
}


export default History;