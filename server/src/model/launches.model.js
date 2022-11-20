const launch = {
  flightNumber: 99,
  mission: "Kepler Exploration x",
  rocket: "Explorer IS1",
  launchDate: new Date("December 27, 2027"),
  destination: "Kepler-442 b",
  custoemr: ["ZTM", "NASA"],
  upcoming: true,
  success: true,
};

const launches = new Map();

launch.set(launch.flightNumber, launch);

module.exports = {
  launches,
};
