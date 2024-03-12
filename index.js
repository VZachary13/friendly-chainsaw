const inquirer = require('inquirer');
const fs = require('fs');
const Square = require('./lib/Square');
const Circle = require('./lib/Circle');
const Triangle = require('./lib/Triangle');
const questions = require('./lib/questions');

function init(){
    inquirer.prompt(questions).then((data) => {
        switch (data.shape) {
            case 'Square':
                const newSquare = new Square(data.text, data.textColor,data.color)
                fs.writeFile('./examples/shape.SVG', newSquare.render(), (err) => {
                    if(err) console.log(err);
                    console.log('Square generated successfully!')
                })
                break;
        
            case 'Circle':
                const newCircle = new Circle(data.text, data.textColor, data.color)
                fs.writeFile('./examples/shape.SVG', newCircle.render(), (err) => {
                    if(err) console.log(err);
                    console.log('Circle generated successfully!')
                })
                break;
        
            case 'Triangle':
                const newTriangle = new Triangle(data.text, data.textColor, data.color)
                fs.writeFile('./examples/shape.SVG', newTriangle.render(), (err) => {
                    if(err) console.log(err);
                    console.log('Triangle generated successfully!')
                })
        
            default:
                break;
        }
    })
}

init();