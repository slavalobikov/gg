import React, { Component } from 'react';
import {Card, Container, Input} from 'semantic-ui-react';
import axios from 'axios';

import BookCard from '../containers/BookCard';
import Filter from '../containers/Filter';
import Menu from '../containers/Menu';
import cls from './App.module.css'



class App extends Component {
  componentWillMount() {
    const { setBooks } = this.props;
    axios.get('/books.json').then(({ data }) => {
      setBooks(data);
    });
  }

  render() {
    const { books, isReady } = this.props;
    return (
      <Container>
          <div className="Dima">
          <div class="sidebar" >

                  <Menu />
                  <Filter />

              </div>

          </div>


       <div class="grid">
         {!isReady
             ? 'Загрузкaа...'
             : books.map((book, i) => <BookCard key={i} {...book}  />)}


       </div>

      </Container>
    );
  }
}

export default App;
