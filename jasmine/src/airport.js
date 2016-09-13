function Airport() {'use strict';
  this._hangar = [];
}
  Airport.prototype.planes = function(){ return this._hangar;
  };

  Airport.prototype.clearForLanding = function(plane) {
    if (this.isStormy()){
    throw new Error('cannot land during a storm');
   }
    this._hangar.push(plane);
  };

  Airport.prototype.clearForTakeOff = function(plane) {
    if (this.isStormy()){
    throw new Error('cannot takeoff during a storm');
   }
    this._hangar.pop(plane);
  };

  Airport.prototype.isStormy = function() {
    return false;
  };
