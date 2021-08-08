//hopefully this works
const yellow = extend(UnitType, "yellow", {
  health: Number.MAX_VALUE,
  type: flying,
  speed: 3,
  accel: 0.08,
  drag: 0.01,
  flying: true,
  sprite: flare,
  defaultController: new DefenderAI(),
});
