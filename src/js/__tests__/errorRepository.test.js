import ErrorRepository from '../errorRepository';

test('Add error', () => {
  const received = new ErrorRepository();
  received.errorSet('12345', 'someError');
  expect(received.translate('12345')).toBe('someError');
});

test('Unknown error', () => {
  const received = new ErrorRepository();
  received.errorSet('error', 'error');
  expect(received.translate('54321')).toBe('Unknown error');
});
