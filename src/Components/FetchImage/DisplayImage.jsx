import axios from "axios";
import { Component } from "react";
import Card from "./Card";
import "./Card.css"


class DisplayImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      displayProduct: [],
    };
  }

  componentDidMount() {
    this.fetchProduct();
  }

  async fetchProduct() {
    try {
      const { data } = await axios.get("https://fakestoreapi.com/products");
      this.setState({ products: data });

      let list = data.filter((e, i) => i < 4);
      this.setState({ displayProduct: list });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    console.log(this.state.displayProduct);
    return (
      <div className="container">
        {this.state.displayProduct.map((e, i) => {
          return <Card  key={i} product={e} />;
        })}
      </div>
    );
  }
}

export default DisplayImage;
