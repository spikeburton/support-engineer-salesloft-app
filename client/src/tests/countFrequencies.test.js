import { countFrequencies } from '../services/countFrequencies';

it('counts frequencies of a single string', () => {
  const people = [{ email: 'a@b.zz' }];

  expect(countFrequencies(people)).toEqual([
    { char: 'z', count: 2 },
    { char: 'a', count: 1 },
    { char: '@', count: 1 },
    { char: 'b', count: 1 },
    { char: '.', count: 1 }
  ]);
});

it('properly counts frequencies in multiple strings', () => {
  const people = [{ email: 'aa' }, { email: 'bb' }];

  expect(countFrequencies(people)).toStrictEqual([
    { 'char': 'a', 'count': 2 },
    { 'char': 'b', 'count': 2 }
  ]);
});

it('handles an empty object', () => {
  const people = [];

  expect(countFrequencies(people)).toEqual([]);
});
