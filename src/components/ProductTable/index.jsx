import React from 'react';
import ProductRow from './../ProductRow';

function ProductTable(props) {
  return (
    <div>
      <table>
        <thread>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thread>
        <tbody>
          {props.products.map((product) => (
            <ProductRow {...product} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
