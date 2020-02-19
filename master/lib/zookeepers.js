const fs = require('fs');
const path = require('path');

function filterByQuery(query, zookeepers) {
  let filteredResults = zookeepers;

  if (query.age) {
    filteredResults = filteredResults.filter(zookeeper => zookeeper.age === query.age);
  }
  if (query.favoriteAnimal) {
    filteredResults = filteredResults.filter(
      zookeeper => zookeeper.favoriteAnimal === query.favoriteAnimal
    );
  }
  if (query.name) {
    filteredResults = filteredResults.filter(zookeeper => zookeeper.name === query.name);
  }
  return filteredResults;
}

function findById(id, zookeepers) {
  const result = zookeepers.filter(zookeeper => zookeeper.id === id)[0];
  return result;
}

function createNewZookeeper(body, zookeepers) {
  const zookeeper = body;
  zookeepers.push(zookeeper);
  fs.writeFileSync(
    path.join(__dirname, '../data/zookeepers.json'),
    JSON.stringify({ zookeepers }, null, 2)
  );
  return zookeeper;
}

module.exports = {
  filterByQuery,
  findById,
  createNewZookeeper
};
