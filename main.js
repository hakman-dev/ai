// main.js
var roleHarvester = require('role.harvester');
var roleExpander = require('role.expander');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleRepairer = require('role.repairer');
var roleScout = require('role.scout');
var spawner = require('spawner');

module.exports.loop = function() {
    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'expander') {
            roleExpander.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
        if(creep.memory.role == 'repairer') {
            roleRepairer.run(creep);
        }
        if(creep.memory.role == 'scout') {
            roleScout.run(creep);
        }
    }
    spawner.run();
}