const stack = require('../src/stack');

test('Add string with space', () => {
    stack.push('Mellan     RUM');
    expect(stack.peek()).toBeDefined();
    expect(stack.peek()).toBe('Mellan     RUM');
});


test('Emtpy the stack', () => {
    stack.push(1);
    stack.push("wow");
    stack.push(42);
    stack.pop()
    stack.pop()
    stack.pop()
    expect(stack.peek()).toBe(undefined);
});