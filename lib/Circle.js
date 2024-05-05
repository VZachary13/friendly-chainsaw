const Shape = require('./Shape');

class Circle extends Shape {
    constructor(text, textColor, color){
        super(text, textColor, color);
    }
    render(){
        return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <style>
            circle {
                stroke: ${this.color};
                fill: ${this.color};
                stroke-width: 5;
            }
            text {
                font-family: Arial, sans-serif;
                font-size: 70px;
                fill: ${this.textColor};
                dominant-baseline: middle;
                text-anchor: middle;
            }
        </style>
        <circle cx="150" cy="100" r="97"/>
        <text x="150" y="100">${this.text}</text>
    </svg>`
        
    }
}

module.exports = Circle;