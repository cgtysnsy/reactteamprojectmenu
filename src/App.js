import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Categories from "./components/Categories";
import MainMenu from "./components/MainMenu";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      filteredData: [],
      categories: [],
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
          categories: categoryData,
        });
      })

      .catch((error) => "The error is" + error);
  }

  handlerBtn = (category) => {
    if (category === "all") {
      this.setState({ data: this.state.filteredData });
    } else {
      const filteredCategory = this.state.filteredData.filter(
        (item) => item.category === category
      );
      if (filteredCategory) {
        this.setState({ data: filteredCategory });
      }
    }
    // console.log("breakfast pressed")
    // const filteredCategory = this.state.data.filter((item)=>item.category === categories)

    //   if(filteredCategory ) {

    //      this.setState({
    //       data: filteredCategory

    //     })
    //   }
  };

  render() {
    const { categories, data, handlerBtn } = this.state;

    return (
      <div className="App">
        <div className="title">
          <h2>Our Menu</h2>

          <div className="underline"></div>
        </div>
        <Categories categoriesBtn={categories} handlerBtn={this.handlerBtn} />
        <MainMenu getData={data} />
      </div>
    );
  }
}

export default App;
