import React from 'react';
​
export default ({ height, width, topImageHeight, h3Height, pHeight }) => {
  return (
    <div>
      <div class='container'>
        <section class='card' style={{ width, height }}>
          <figure
            class='card-image loading'
            style={{ height: topImageHeight }}
          ></figure>
          <div class='card-detail'>
            <h3 class='card-title loading' style={{ height: h3Height }}></h3>
            <p class='card-description loading' style={{ height: pHeight }}></p>
          </div>
        </section>
      </div>
    </div>
  );
};
