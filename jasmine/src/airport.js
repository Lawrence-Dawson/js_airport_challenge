function Airport(weather){'use strict';
  this._weather = typeof weather !== 'undefined' ? weather : new Weather();
  this._hangar = [];
}
  Airport.prototype.planes = function(){
    return this._hangar;
  };

  Airport.prototype.clearForLanding = function(plane) {
      console.log('clear for landing');
    if (this._weather.isStormy()){
    throw new Error('cannot land during storm');
   }
    this._hangar.push(plane);
  };

  Airport.prototype.clearForTakeOff = function(plane) {
    console.log('clear for take off');
    if (this._weather.isStormy()){
    throw new Error('cannot takeoff during storm');
   }
    this._hangar.pop(plane);
  };
