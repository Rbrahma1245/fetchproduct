import { Component } from "react";
import "./Card.css";

export class Card extends Component {
  constructor(props) {
    super();
    console.log(props.product);

  }
  render() {
    let { product } = this.props;
    return (
      <div style={{border:"1px solid black", width:500, height:300, }}>
        <div>
          <h3>{product.title}</h3>
          <img src={product.image} />
        </div>
      </div>
    );
  }
}

export default Card;
