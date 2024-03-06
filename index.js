const inquirer = require('inquirer');
const fs = require('fs');
const Shapes = require('./lib/shapes.js');
const questions = require('./lib/questions.js');

function init(){
    inquirer.prompt(questions).then((data) => {
        switch (data.shape) {
            case 'Square':
                console.log(data);
                break;
        
            case 'Circle':
                console.log(data);
                break;
        
            case 'Triangle':
                console.log(data);
                break;
        
            default:
                break;
        }
    })
}

init();