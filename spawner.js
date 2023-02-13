// spawner.js
var spawner = {
    run: function() {
        var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
        var expanders = _.filter(Game.creeps, (creep) => creep.memory.role == 'expander');
        var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
        var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
        var repairers = _.filter(Game.creeps, (creep) => creep.memory.role == 'repairer');
        var scouts = _.filter(Game.creeps, (creep) => creep.memory.role == 'scout');

        if(harvesters.length < 2) {
            Game.spawns['Spawn1'].createCreep([WORK,CARRY,MOVE], undefined, {role: 'harvester'});
            return;
        }

        if(expanders.length < 1) {
            Game.spawns['Spawn1'].createCreep([WORK,CARRY,MOVE,CLAIM], undefined, {role: 'expander'});
            return;
        }

        if(upgraders.length < 2) {
            Game.spawns['Spawn1'].createCreep([WORK,CARRY,MOVE], undefined, {role: 'upgrader'});
            return;
        }

        if(builders.length < 2) {
            Game.spawns['Spawn1'].createCreep([WORK,CARRY,MOVE], undefined, {role: 'builder'});
            return;
        }

        if(repairers.length < 1) {
            Game.spawns['Spawn1'].createCreep([WORK,CARRY,MOVE], undefined, {role: 'repairer'});
            return;
        }

        if(scouts.length < 1) {
            Game.spawns['Spawn1'].createCreep([WORK,CARRY,MOVE], undefined, {role: 'scout'});
            return;
        }
    }
};

module.exports = spawner;
