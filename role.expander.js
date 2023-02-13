// role.expander.js
var roleExpander = {
    run: function(creep) {
        if(creep.memory.expanding && creep.carry.energy == 0) {
            creep.memory.expanding = false;
            creep.say('🔄 harvest');
        }
        if(!creep.memory.expanding && creep.carry.energy == creep.carryCapacity) {
            creep.memory.expanding = true;
            creep.say('🚧 expand');
        }

        if(creep.memory.expanding) {
            var target = creep.pos.findClosestByRange(FIND_MY_SPAWNS);
            if(target && target.room.controller) {
                if(creep.claimController(target.room.controller) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(target.room.controller);
                }
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
module.exports = roleExpander;
