class Shape {
    constructor(text, color){
        this.text = text;
        this.color = color;
    }
    render(){
        return `${this.text} over ${this.color}`
    }
}





module.exports = Shape;