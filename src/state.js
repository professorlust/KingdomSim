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

    // maptiles: {x, y, background, foreground, structureNum}
    // structures:{structureNum, type, originRow, originCol, pointsLeft, pointsStart}
    // houses: {houseNum, structure}
    // farmingQueue: {queueOrder, structure}
    // buildingQueue: {queueOrder, structure}

    removeStructure(id){
        const index = State.structures.findIndex(structure => structure.structureNum === id);

        State.structures.splice(index, 1);
    },
    findStorage(structure) {
        return State.storages.find(storage => storage.structure === structure)
    },

    findStructure(id) {
        return State.structures.find(structure => structure.structureNum === id)
    },

    findStructurebyHouse(houseNum) {
        structureNum = State.findHouseByHouse(houseNum).structure;
        return State.structures.find(structure => structure.structureNum === structureNum)
    },

    findHouseByHouse(houseNum) {
        return State.houses.find(house => house.houseNum === houseNum)
    },

    findHouse(structureNum){
        return State.houses.find(house => house.structure === structureNum)
    },

    findQueueOrder(structureNum){
        return State.buildingQueue.find(structure => structure.structure === structureNum)
    },
    findFarmQueueOrder(structureNum){
        return State.farmingQueue.find(structure => structure.structure === structureNum)
    },

    findPeepsByHouse(houseNum){
        var foundPeeps = [], i = -1;
        for(i=0; i < State.peeps.length; i++){
            if (State.peeps[i].house === houseNum){
                foundPeeps.push(State.peeps[i]);
            }
        }
        return foundPeeps;
    },

    findPeepsByJob(job){
        var foundPeeps = [], i = -1;
        for(i=0; i < State.peeps.length; i++){
            if (State.peeps[i].job === job){
                foundPeeps.push(State.peeps[i]);
            }
        }
        return foundPeeps;
    }
};

module.exports = State;