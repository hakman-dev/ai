// role.scout.js
var roleScout = {
    run: function(creep) {
        if(creep.memory.scouting && creep.carry.energy == 0) {
            creep.memory.scouting = false;
            creep.say('🔄 harvest');
        }
        if(!creep.memory.scouting && creep.carry.energy == creep.carryCapacity) {
            creep.memory.scouting = true;
            creep.say('🕵️ scout');
        }

        if(creep.memory.scouting) {
            var target = creep.pos.findClosestByRange(FIND_EXIT);
            if(target) {
                creep.moveTo(target);
            }
        }
        else {
            var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0]);
            }
        }
    }
};
module.exports = roleScout;
