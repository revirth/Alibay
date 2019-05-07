import React from "react";

const Product = ({ id, name, description, img, price, addFunc }) => {
  return (
    <article
      className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center"
      id={id}
    >
      <img
        src={img}
        className="db w-100 br2 br--top"
        alt="Photo of a kitten looking menacing."
        title={name}
      />
      <div className="pa2 ph3-ns pb3-ns">
        <div className="dt w-100 mt1">
          <div className="dtc">
            <h1 className="f5 f4-ns mv0">{name}</h1>
          </div>
          <div className="dtc tr">
            <h2 className="f5 mv0">{price}</h2>
          </div>
        </div>
        <p className="f6 lh-copy measure mt2 mid-gray">{description}</p>
        <div className="btn">
          <button
            className="f6 link dim br3 ph3 pv2 mb2 dib white bg-dark-green bn"
            onClick={() => addFunc()}
          >
            Add to cart
          </button>
          <button className="f6 link dim br3 ph3 pv2 mb2 dib white bg-dark-green bn">
            Customize{" "}
          </button>
        </div>
      </div>
    </article>
  );
};

export default Product;
