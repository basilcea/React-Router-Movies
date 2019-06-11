import React, { Component } from 'react';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import {BrowserRouter as Router, Route} from 'react-router-dom';


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = movie => {
    const savedList = this.state.savedList;
    if(savedList.find(mov => mov.id === movie.id)){
    }else{
    savedList.push(movie);
    this.setState({ savedList: [ ...new Set (savedList) ]});
    }
  };

  render() {
    return (
    
      <Router>
        <SavedList list={this.state.savedList} />
        <Route exact path ='/' component={MovieList} />
        <Route exact
        path='/movies/:id' 
        render={props =><Movie addToSavedList={this.addToSavedList} {...props} />}
        />
      </Router>
    );
  }
}
