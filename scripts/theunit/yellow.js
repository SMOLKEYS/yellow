
const yellow = extend(UnitType, "yellow", {
  health: Number.MAX_VALUE,
  speed: 3,
  accel: 0.08,
  drag: 0.01,
  flying: true,
  defaultController: () => extend(DefenderAI, {})
});
//aaaaaaa
yellow.sprite = Core.atlas.find("flare");
yellow.constructor = () => extend(UnitEntity, {});

Log.info("yellow");