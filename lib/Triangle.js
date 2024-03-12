const Shape = require('./Shape');

class Triangle extends Shape {
    constructor(text, textColor, color){
        super(text, textColor, color);
    }
    render(){
        return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <style>
            polygon {
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
        <polygon points="20, 10 280, 10 150, 190"/>
        <text x="150" y="60">${this.text}</text>
    </svg>`
    }
}

module.exports = Triangle;