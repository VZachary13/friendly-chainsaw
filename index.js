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
                const newSquare = new Square(data.text, data.color)
                fs.writeFile('./examples/shape.SVG', newSquare.render(), (err) => {
                    if(err) console.log(err);
                    console.log('Shape generated successfully!')
                })
                break;
        
            case 'Circle':
                const newCircle = new Circle(data.text, data.color)
                console.log(newCircle);
                break;
        
            case 'Triangle':
                const newTriangle = new Triangle(data.text, data.color)
                console.log(newTriangle);
                break;
        
            default:
                break;
        }
    })
}

init();