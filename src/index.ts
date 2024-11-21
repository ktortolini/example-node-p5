import * as p5 from "p5";

/**
 * This web application uses p5.js, specifically p5 instance mode
 * see {@link https://p5js.org/reference/#/p5/instance}.
 * @param p - p5 instance
 */

export const sketch = (p: p5) => {
   p.setup = () => {
      p.createCanvas(400, 400);
   };

   p.draw = () => {
      p.background(220);
      p.ellipse(50, 50, 80, 80);
   };
};

/**/

export const myp5 = new p5(sketch, document.body);
