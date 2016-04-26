var system = (function (SolarSystem) {
	 var dwarfPlanets = 12;

	 SolarSystem.getDwarf = function () {
	 	 return dwarfPlanets; 
	 }

	 return SolarSystem;
})(SolarSystem);

console.log("new system: ", system);