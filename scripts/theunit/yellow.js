
const yellow = extend(UnitType, "yellow", {
  health: Number.MAX_VALUE,
  speed: 3,
  accel: 0.08,
  drag: 0.01,
  flying: true,
  defaultController: new DefenderAI(),
});
//aaaaaaa
yellow.constructor = () => extend(UnitEntity, {});

Log.info("yellow");