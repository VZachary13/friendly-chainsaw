const inquirer = require('inquirer');
const fs = require('fs');
const paths = require('paths');
const Shapes = require('./lib/shapes.js');
const questions = require('./lib/questions.js');

function init(){
    inquirer.prompt(questions.questions).then((data) => {
        switch (data.shape) {
            case 'Square':
                
                break;
        
            case 'Circle':
                
                break;
        
            case 'Triangle':
                
                break;
        
            default:
                break;
        }
    })
}