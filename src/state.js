const State = {
  currentMonth: 0,
  currentYear: 1,
  buildingChoice: undefined,
  houses: [],
  peeps: [],
  structures: [],
  storages: [],
  buildingQueue: [],
  farmingQueue: [],
  map: [],
  wood: 0,
  maxWood: 0,
  food: 0,
  maxFood: 0,

    // will get rid of later. Temporary...
  randPeeps: [
        { name: 'Andrew', job: 'farmer', house: 0, buildSkill: 0, farmSkill: 0, gatherSkill: 0, age: 20, birthMonth: undefined, birthYear: undefined },
        { name: 'Anna', job: 'farmer', house: 0, buildSkill: 0, farmSkill: 0, gatherSkill: 0, age: 20, birthMonth: undefined, birthYear: undefined },
        { name: 'Burt', job: 'builder', house: 0, buildSkill: 0, farmSkill: 0, gatherSkill: 0, age: 20, birthMonth: undefined, birthYear: undefined },
        { name: 'Barbara', job: 'builder', house: 0, buildSkill: 0, farmSkill: 0, gatherSkill: 0, age: 20, birthMonth: undefined, birthYear: undefined },
        { name: 'Charles', job: 'farmer', house: 0, buildSkill: 0, farmSkill: 0, gatherSkill: 0, age: 20, birthMonth: undefined, birthYear: undefined },
        { name: 'Catherine', job: 'farmer', house: 0, buildSkill: 0, farmSkill: 0, gatherSkill: 0, age: 20, birthMonth: undefined, birthYear: undefined },
        { name: 'Daniel', job: 'gatherer', house: 0, buildSkill: 0, farmSkill: 0, gatherSkill: 0, age: 20, birthMonth: undefined, birthYear: undefined },
        { name: 'Danielle', job: 'gatherer', house: 0, buildSkill: 0, farmSkill: 0, gatherSkill: 0, age: 20, birthMonth: undefined, birthYear: undefined },
  ],
  randPeepJob: [
    'farmer',
    'builder',
    'gatherer',
  ],

    // maptiles: {x, y, background, foreground, structureNum}
    // structures:{structureNum, type, originRow, originCol, pointsLeft, pointsStart}
    // houses: {houseNum, structure, peepSpots}
    // storages: {structure, maxWood, curWood, maxFood, curFood}
    // farmingQueue: {queueOrder, structure}
    // buildingQueue: {queueOrder, structure}
  findStorageForWood(storages) {
    //find storage with most open wood spots. Compare MaxWood to CurWood.
  },
  findEmptyHouses() {
    const emptyHouses = [];
    for (const house of State.houses) {
      const peepsInHouse = State.peepsInHouse(house);
      if (peepsInHouse === 0) {
        emptyHouses.push(house);
      }
    }
    return emptyHouses;
  },
  findAvailableHouses() {
    const availableHouses = [];
    for (const house of State.houses) {
      const peepsInHouse = State.peepsInHouse(house);
      console.log('peeps in house', house.houseNum, ': ', peepsInHouse);
      if (peepsInHouse < house.peepSpots) {
        availableHouses.push(house);
      }
    }
    return availableHouses;
  },
  peepsInHouse(house) {
    let peepsInHouse = 0;
    for (const peep of State.peeps) {
      if (peep.house === house.houseNum) {
        peepsInHouse++;
      }
    }
    return peepsInHouse;
  },
  countPeepSpots() {
    let peepSpots = 0;
    for (const house of State.houses) {
      peepSpots += house.peepSpots;
    }
    return peepSpots;
  },
  removeStructure(id) {
    const index = State.structures.findIndex(structure => structure.structureNum === id);

    State.structures.splice(index, 1);
  },
  findStorage(structure) {
    return State.storages.find(storage => storage.structure === structure);
  },

  findStructure(id) {
    return State.structures.find(structure => structure.structureNum === id);
  },

  findStructurebyHouse(houseNum) {
    const structureNum = State.findHouseByHouse(houseNum).structure;
    return State.structures.find(structure => structure.structureNum === structureNum);
  },

  findHouseByHouse(houseNum) {
    return State.houses.find(house => house.houseNum === houseNum);
  },

  findHouse(structureNum) {
    return State.houses.find(house => house.structure === structureNum);
  },

  findQueueOrder(structureNum) {
    return State.buildingQueue.find(structure => structure.structure === structureNum);
  },
  findFarmQueueOrder(structureNum) {
    return State.farmingQueue.find(structure => structure.structure === structureNum);
  },

  findPeepsByHouse(houseNum) {
    let foundPeeps = [],
      i = -1;
    for (i = 0; i < State.peeps.length; i++) {
      if (State.peeps[i].house === houseNum) {
        foundPeeps.push(State.peeps[i]);
      }
    }
    return foundPeeps;
  },

  findPeepsByJob(job) {
    let foundPeeps = [],
      i = -1;
    for (i = 0; i < State.peeps.length; i++) {
      if (State.peeps[i].job === job) {
        foundPeeps.push(State.peeps[i]);
      }
    }
    return foundPeeps;
  },
};

module.exports = State;
