var SolarSystem = (function(oldSolarSystem) {

	var stars = ["Sun", "Alpha Centauri", "Wolf 395"];

	oldSolarSystem.getStars = function() {
		return stars;		
	};
	oldSolarSystem.setStars = function() {
		stars.push(newStar);
	};

	return oldSolarSystem;
})(SolarSystem || {});