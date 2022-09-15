import { Component } from "react";
import axios from "axios";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
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

  render() {
    const { categories } = this.state;

    return (
      <div className="App">
        {/* <>
          {categories.map((category, index) => {
            return (
              <Button size="lg" outline color="warning" key={index}>
                {category}
              </Button>
            );
          })}
        </> */}
      </div>
    );
  }
}

export default App;
