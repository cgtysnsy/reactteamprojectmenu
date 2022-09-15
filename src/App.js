import React,{Component } from "react";
import axios from "axios";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";
import MainMenu from './components/MainMenu' 
import Categories from "./components/Categories"


class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      filteredData: [],
      categories: []
    };
  }

  
  componentDidMount() {
    const endPoint =
      "https://gist.githubusercontent.com/maratgaip/44060c688fcf5f2b7b3985a6d15fdb1d/raw/e93c3dce0826d08c8c6e779cb5e6d9512c8fdced/restaurant-menu.json";
    axios
      .get(endPoint)
      .then((items) => {
        const categoryData = ["all"];
        items.data.forEach((item) => {
          if (!categoryData.includes(item.category)) {
            categoryData.push(item.category);
          }
        });
        this.setState({
          data: items.data,
          filteredData: items.data,
          categories: categoryData
        });
        
      })

      .catch((error) => "The error is" + error);
      
  }


  
  handlerBtn=(categories)=> {
    console.log(items)
    const filteredCategory = items.data.filter(i);
    filteredCategory.data.filter((item) => {
      if(categories === "Breakfast") {
         const filteredData = this.data.filter((name)=> name.category === categories)
         this.setState({
          data: filteredData

        })
      }

    })

    
  }
  render() {
    const { categories, data } = this.state;

    return (
      <div className="App">

        <div className ='title'>
        <h2>Our Menu</h2>

        <div className = 'underline'></div>
        </div>
        <Categories CategoriesBtn={categories} filter={this.handlerBtn}/>
        <MainMenu getData ={data} />
      </div>
    );
  }
}

export default App;
