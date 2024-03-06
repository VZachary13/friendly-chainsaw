const Shape = require('./Shape');

class Triangle extends Shape {
    constructor(text, color){
        super(text, color);
    }
    render(){
        return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <style>
            /* Inline CSS styles applied to SVG elements */
            polygon {
                stroke: ${this.color};
                fill: ${this.color};
                stroke-width: 5;
            }
            text {
                font-family: Arial, sans-serif;
                font-size: 70px;
                fill: white; /* Text color */
                dominant-baseline: middle; /* Vertical alignment */
                text-anchor: middle; /* Horizontal alignment */
            }
        </style>
        <polygon points="20, 10 280, 10 150, 190"/>
        <text x="150" y="60">${this.text}</text>
    </svg>`
    }
}

module.exports = Triangle;