function Plane(){'use strict';}

Plane.prototype.land = function(airport){
airport.clearForLanding(this);
};
