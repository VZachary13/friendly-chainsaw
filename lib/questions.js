const questions = [
    {
        type:'input',
        name:'text',
        message:'Please enter up to 3 characters you would like on your logo.'
    },
    { 
        type:'list',
        name:'shape',
        message:'Would you like your logo to be a Square, Circle, or Triangle?',
        choices:['Square', 'Circle', 'Triangle']
    },
    {
        type:'input',
        name:'color',
        message:'What color would you like for your logo?(may enter hexidecimal number)'
    }
]
