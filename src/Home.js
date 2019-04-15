import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div>
                 <img src="https://media1.tenor.com/images/b2f11264298c6f6c30a7c09626861c79/tenor.gif" alt="connexion client" />
              <Link to="/"> </Link>
              {this.props.match.params.productNumber}
            </div>
        );
    }
}


export default Home;