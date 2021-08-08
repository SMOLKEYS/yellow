
const yellow = extend(UnitType, "yellow", {
  health: Number.MAX_VALUE,
  speed: 3,
  accel: 0.08,
  drag: 0.01,
  flying: true,
});
//aaaaaaa
yellow.constructor = () => extend(UnitEntity, {});
//will change soon
yellow.defaultController = () => new DefenderAI();

Log.info("yellow");