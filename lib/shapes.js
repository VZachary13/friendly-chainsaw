class Shape {
    constructor(text, color){
        this.text = text;
        this.color = color;
    }
    render(){
        return `${this.text} over ${this.color}`
    }
}

class Square extends Shape {
    constructor(text, color){
        super(text, color);
    }
    render(){
        return `<rect x="100" y="150" width="50" height="50" stroke=${this.color} fill="${this.color}" stroke-width="5"`
    }
}

class Circle extends Shape {
    constructor(text, color){
        super(text, color);
    }
    render(){
        return `<circle cx="100" cy="150" r="25"stroke=${this.color} fill="${this.color}" stroke-width="5"`
    }
}

class Triangle extends Shape {
    constructor(text, color){
        super(text, color);
    }
    render(){
        return `<polygon points="100, 175 125, 125 75, 125" stroke=${this.color} fill="${this.color}" stroke-width="5"`
    }
}

module.exports = Triangle, Circle, Square, Shape;