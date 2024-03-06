const Shape = require('./Shape');

class Circle extends Shape {
    constructor(text, color){
        super(text, color);
    }
    render(){
        return `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
        <style>
            /* Inline CSS styles applied to SVG elements */
            circle {
                stroke: ${this.color};
                fill: ${this.color};
                stroke-width: 5;
            }
        </style>
        <circle cx="100" cy="150" r="25"/>
    </svg>`
        
    }
}

module.exports = Circle;