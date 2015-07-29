var SolarSystem = function() {
	var planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Neptune", "Uranus"],
	    explored,
	    spacecraft = [];

	return {
		getPlanets: function() {
			return planets;
		},
        
        getExplored: function() {
        	return "We have explored " + explored + " planets";
        },

        setExplored: function(num) {
        	if (num <= planets.length) {
        		explored = num;
        		return explored;
        	} else {
        		throw "Impossible to land or explore more planets than exist in the Solar System";
        	}
        },

        lastModified: new Date(),

        getSpacecraft: function() {
        	return spacecraft;
        },

        setSpacecraft: function(vessel) {
        	spacecraft.push(vessel);
        },
	};

}();

SolarSystem.setSpacecraft("New Horizon");
console.log(SolarSystem.getSpacecraft());


