var solarsystem = function(SolarSystem) {
  var closestStars = ["Alpha Centauri", "Bernard's Star", "Luhman 16", "Wolf 359", "Sirius"],
      estimatedAge = "",
      dwarfPlanets = ["Pluto"];

			
			SolarSystem.getClosestStars = function() {
				return closestStars;
			};

			SolarSystem.getEstimatedAge = function() {
				return estimatedAge;
			};

			SolarSystem.setEstimatedAge = function(year) {
				estimatedAge = year;
			};

			SolarSystem.getDwarfPlanets = function() {
				return dwarfPlanets;
			};

			SolarSystem.setDwarfPlanets = function(planet) {
				dwarfPlanets.push(planet);
			};
		
		return SolarSystem;

}(SolarSystem);