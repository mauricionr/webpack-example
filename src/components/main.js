import React from 'react';
import {RouteHandler} from 'react-router';
import Menu from './Menu';
import Content from './Content';
import Rodape from './Rodape';

require('../style/style.css')

class Main extends React.Component {
  render() {
    return (
        <div>
            <Menu />
            <RouteHandler/>
            <Rodape />
        </div>
    );
  }
}

export default Main;
