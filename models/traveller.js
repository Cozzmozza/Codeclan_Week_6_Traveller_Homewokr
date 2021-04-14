const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const startLocations = this.journeys.map((journey) => journey.startLocation);
  return startLocations
};


Traveller.prototype.getJourneyEndLocations = function () {
  return endLocations = this.journeys.map((journey) => journey.endLocation);
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return filteredByTransport = this.journeys.filter((journey) => journey.transport === transport);
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter((journey) => journey.distance > minDistance);
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const total = this.journeys.reduce((running_total, journey) => {
    return running_total + journey.distance;
  }, 0)
return total;
};

Traveller.prototype.getUniqueModesOfTransport = function () {
// Start by simply making a list of the transports:
  let allTransports = this.journeys.map((journey) => journey.transport);

  // Now running another JS built in object to return an array with uniques only
  let uniqueTransports = Array.from(new Set(allTransports));
  return uniqueTransports
};

module.exports = Traveller;
