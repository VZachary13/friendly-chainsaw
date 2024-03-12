class Shape {
    constructor(text, textColor, color){
        this.text = text;
        this.textColor = textColor;
        this.color = color;
    }
    render(){
        return `${this.text} with ${this.textColor} over ${this.color}`
    }
}





module.exports = Shape;