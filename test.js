const getGreeting = require('./project');

test('can create a basic greeting', () => {
  expect(getGreeting('Sam')).toBe("Hi Sam");
});

test('Second greeting test', () => {
  expect(getGreeting('Bob')).toBe("Hi Bob");
})