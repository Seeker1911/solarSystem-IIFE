// Have students create a new directory named modules where they will create an HTML and a JS file. 
// The JS file should create an IIFE module named SolarSystem. Have the student create properties and methods for 
// the following:
//    Getter for an array of planets that cannot be modified.
//    Getter/setter for number of planets that humans have landed people or robots on.
//    Public property for holding a last modified date.
//    Getter/setter for spacecraft currently exploring solar system. These should be stored in a private array.
//    Any other fun/related data that the student wants to add.


var SolarSystem = (function() {
    var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
    var landed = 0;
    var spaceCraft = 0;
    return {
        getPlanet: function() {
            return planets;
        },

        getLanded: function() {
            return landed;
        },
        setLanded: function(newLanded) {
            landed = newLanded;
        },
        lastModified: new Date(),

        setSpaceCraft: function(newSpaceCraft) {
            spaceCraft = newSpaceCraft;
        },
        getSpaceCraft: function() {
            return spaceCraft;
        }
    }
})();

SolarSystem.setLanded(5);
SolarSystem.setSpaceCraft(3);
console.log("Planets: ", SolarSystem.getPlanet());
console.log("landed: ", SolarSystem.getLanded());
console.log("space craft: ", SolarSystem.getSpaceCraft());
console.log("modified: ", SolarSystem.lastModified);


