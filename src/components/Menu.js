import React from 'react';
import {Link} from 'react-router';


class Menu extends React.Component {
  render() {
    return (
        <ul id="Menu">
            <li>
                <Link to='home'>Home</Link>
            </li>
            <li>
                <Link to='example'>Sobre</Link>
            </li>
        </ul>
    );
  }
}

export default Menu;