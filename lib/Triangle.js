const Shape = require('./Shape');

class Triangle extends Shape {
    constructor(text, color){
        super(text, color);
    }
    render(){
        return `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
        <style>
            /* Inline CSS styles applied to SVG elements */
            polygon {
                stroke: ${this.color};
                fill: ${this.color};
                stroke-width: 5;
            }
        </style>
        <polygon points="100, 175 125, 125 75, 125"/>
    </svg>`
    }
}

module.exports = Triangle;