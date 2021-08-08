//hopefully this works
const yellow = extend(UnitType, "yellow" {
//health is intentional, as yellow is literally just gonna be reginald from gray
  health: Number.MAX_VALUE;
  speed: 3;
  accel: 0.08;
  drag: 0.01;
  flying: true;
  sprite: flare;
  defaultController: DefenderAI;
});
