
const yellowMelterWeapon = extend(Weapon, {
  reload: 60,
  x: 8 * 7,
  shots: 15,
  inaccuracy: 30,
  shootSound: Sounds.explosionbig,
});

const YMWB = extend(ContinuousLaserBulletType, {
  damage: 75 /* begone */,
  length: 30 * 8,
  width: 8,
  lifetime: 60,
});

const yellowDropkick = extend(Weapon, {
  recoil: -8,
  reload: 60,
});

const YDB = extend(LaserBulletType, {
  damage: Number.MAX_VALUE,
  length: 8 * 8,
  width: 1,
  lifetime: 1,
  recoil: -8,
});

yellowMelterWeapon.bullet = YMWB;
yellowDropkick.bullet = YDB;

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
  yellowMelterWeapon, yellowDropkick
);

Log.info("yellow");