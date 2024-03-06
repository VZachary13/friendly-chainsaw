const Shape = require('./Shape');

class Square extends Shape {
    constructor(text, color){
        super(text, color);
    }
    render(){
        return `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
        <style>
            /* Inline CSS styles applied to SVG elements */
            rect {
                stroke: ${this.color};
                fill: ${this.color};
                stroke-width: 5;
            }
        </style>
        <rect x="100" y="150" width="50" height="50"/>
    </svg>`
    }
}

module.exports = Square;