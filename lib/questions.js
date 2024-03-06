let colorName;
import('color-name').then(module => {
    colorName = module.default;
});

function isItColor(input){
    const onlyLets = /^[A-Za-z]+$/;
    const hexCode = /^#[0-9A-Fa-f]{6}$/;
    if(onlyLets.test(input)){
        const color = input.toLowerCase();
        if (colorName[color]){
            return true
        } else {
            return 'Invalid color name'
        }
    } else if(hexCode.test(input)){
        return true
    } else {
        return 'Invalid color'
    }
}
function threeOrLess(input) {
    if (input.length>3){
        return 'Logo text cannot exceed 3 characters';
    } else if (!input || input === '') {
        return 'Must enter logo characters';
    } else {
        return true;
    }
}

const questions = [
    {
        type:'input',
        name:'text',
        message:'Please enter up to 3 characters you would like on your logo.',
        validate: threeOrLess
    },
    { 
        type:'list',
        name:'shape',
        message:'Would you like your logo to be a Square, Circle, or Triangle?',
        choices:['Square', 'Circle', 'Triangle'],
    },
    {
        type:'input',
        name:'color',
        message:'What color would you like for your logo?\n(may enter hexidecimal number(example: #00FFFF))',
        validate: isItColor
    }
]
 module.exports = questions;