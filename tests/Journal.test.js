const fs = require('fs');
const { filterByQuery, findById, createNewNote } = require('../lib/notetaker.js');

jest.mock('fs');

test('creates a note object', () => {
  const notes = createNewNote({ name: 'Darlene', id: 'jhgdja3ng2' }, []);

  expect(notes.name).toBe('Darlene');
  expect(notes.id).toBe('jhgdja3ng2');
});
test('filters by query', () => {
  const startingZookeepers = [
    {
      id: '2',
      name: 'Raksha',
      age: 31,
      favoriteAnimal: 'penguin'
    },
    {
      id: '3',
      name: 'Isabella',
      age: 67,
      favoriteAnimal: 'bear'
    }
  ];

  const updatedZookeepers = filterByQuery({ age: 31 }, startingZookeepers);

  expect(updatedZookeepers.length).toEqual(1);
});

test('finds by id', () => {
  const startingZookeepers = [
    {
      id: '2',
      name: 'Raksha',
      age: 31,
      favoriteAnimal: 'penguin'
    },
    {
      id: '3',
      name: 'Isabella',
      age: 67,
      favoriteAnimal: 'bear'
    }
  ];

  const result = findById('3', startingZookeepers);

  expect(result.name).toBe('Isabella');
});
