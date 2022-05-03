const stack = require('../src/stack');

test('Emtpy the stack', () => {
    stack.push(1);
    stack.push("wow");
    stack.push(42);
    stack.push(42);
    stack.push(42);
    
    expect(stack.stack()).toBe(5);
});

test('Add string with space', () => {
    stack.push('Mellan     RUM');
    expect(stack.peek()).toBeDefined();
    expect(stack.peek()).toBe('Mellan     RUM');
});


