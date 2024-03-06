const Shape = require('./Shape')
const Square = require('./Square')
const Circle = require('./Circle')
const Triangle = require('./Triangle')

describe('Shape', () => {
    describe('text', () => {
        it('should return true if Shape.text saves input correctly', ()=>{
            const text = 'text';
            const shape = new Shape(text);

            expect(shape.text).toBe('text')
        })
    })
    describe('color', ()=>{
        it('should return true if Shape.color saves input correctly', ()=>{
            const color = 'red';
            const shape = new Shape('text', color);

            expect (shape.color).toBe('red')
        })
    })
})
describe('Square', () => {
    describe('text', () => {
        it('should return true if Square.text saves input correctly', () => {
            const text = 'text';
            const square = new Square(text);

            expect(square.text).toBe('text');
        });
    });
    describe('color', () => {
        it('should return true if Square.color saves input correctly', () => {
            const color = 'red';
            const square = new Square('text', color);

            expect(square.color).toBe('red');
        });
    });
    describe('render',()=>{
        it('should return true if render displays information correctly',()=>{
            const text = 'text';
            const color = 'red';
            const square = new Square(text, color);
            expect(square.render()).toBe(`<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <style>
            /* Inline CSS styles applied to SVG elements */
            rect {
                stroke: red;
                fill: red;
                stroke-width: 5;
            }
            text {
                font-family: Arial, sans-serif;
                font-size: 70px;
                fill: white; /* Text color */
                dominant-baseline: middle; /* Vertical alignment */
                text-anchor: middle; /* Horizontal alignment */
            }
        </style>
        <rect x="0" y="0" width="300" height="200"/>
        <text x="150" y="100">text</text>
    </svg>`)
        })
    })
});
describe('Circle', () => {
    describe('text', () => {
        it('should return true if Circle.text saves input correctly', () => {
            const text = 'text';
            const circle = new Circle(text);

            expect(circle.text).toBe('text');
        });
    });
    describe('color', () => {
        it('should return true if Circle.color saves input correctly', () => {
            const color = 'red';
            const circle = new Circle('text', color);

            expect(circle.color).toBe('red');
        });
    });
});

describe('Triangle', () => {
    describe('text', () => {
        it('should return true if Triangle.text saves input correctly', () => {
            const text = 'text';
            const triangle = new Triangle(text);

            expect(triangle.text).toBe('text');
        });
    });
    describe('color', () => {
        it('should return true if Triangle.color saves input correctly', () => {
            const color = 'red';
            const triangle = new Triangle('text', color);

            expect(triangle.color).toBe('red');
        });
    });
});