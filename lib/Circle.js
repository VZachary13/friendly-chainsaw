const Shape = require('./Shape');

class Circle extends Shape {
    constructor(text, color){
        super(text, color);
    }
    render(){
        return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <style>
            /* Inline CSS styles applied to SVG elements */
            circle {
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
        <circle cx="150" cy="100" r="97"/>
        <text x="150" y="100">${this.text}</text>
    </svg>`
        
    }
}

module.exports = Circle;