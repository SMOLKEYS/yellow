
const yellowGuns = require(theunit/weaponry);

const yellow = extend(UnitType, "yellow", {
  health: Number.MAX_VALUE,
  armor: Number.MAX_VALUE,
  speed: 3,
  accel: 0.08,
  drag: 0.01,
  range: 240,
  maxRange: 240,
  flying: true,
});
//required, for some reason(thanks to iarkn#8872 for helping with this)
yellow.constructor = () => extend(UnitEntity, {});
yellow.defaultController = () => extend(DefenderAI, {});
//weaponry
yellow.weapons.add(
  yellowGuns.yellowMelterWeapon,
  yellowGuns.yellowBloom
);

Log.info("yellow");