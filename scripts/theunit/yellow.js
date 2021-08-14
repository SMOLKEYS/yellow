
const yellowMelterWeapon = extend(Weapon, {
  reload: 120,
});

const YMWB = extend(ContinuousLaserBulletType, {
  damage: 40,
  length: 240,
  width: 8,
  lifetime: 60,
});

yellowMelterWeapon.bullet = YMWB;

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
yellow.weapons.add(yellowMelterWeapon);

Log.info("yellow");