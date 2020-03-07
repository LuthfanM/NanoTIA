import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { connect } from 'react-redux';
import { nanotiaDataActionList } from './helpers/redux/actions';
import Routes from './helpers/navigation/route'

class App extends Component{

  constructor(){
    super();
    
    this.state={
      isLoading: true
    }
  }

  async componentDidMount() {
    try {
      const Api = await fetch('https://id.techinasia.com/wp-json/techinasia/3.0/categories/startups/posts?page=1&per_page=5');
      const jsonData = await Api.json();      
      await this.props.nanotiaDataActionList(jsonData);      
      this.setState({ data: jsonData, isLoading: false });      
    } catch (err) {
      console.log("Error when fetch data");
    }
  }

  render() {
  return (
    <div>
         {Routes}
    </div>
  );
  }

}

const mapDispatchToProps = dispatch => ({
  nanotiaDataActionList: (data) => dispatch(nanotiaDataActionList(data))
})

const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
