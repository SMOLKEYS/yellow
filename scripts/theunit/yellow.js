
const yellow = extend(UnitType, "yellow", {
  health: Number.MAX_VALUE,
  speed: 3,
  accel: 0.08,
  drag: 0.01,
  flying: true,
});
//aaaaaaa
yellow.constructor = () => extend(UnitEntity, {});
yellow.defaultController = () => extend(DefenderAI, {});

Log.info("yellow");