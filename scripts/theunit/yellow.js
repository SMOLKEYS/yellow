
const yellowMelterWeapon = extend(Weapon, {
  reload: 60,
  x: 8 * 7,
  shots: 15,
  inaccuracy: 30,
  shootSound: Sounds.explosionbig,
});

const yellowMelterWeaponBullet = extend(ContinuousLaserBulletType, {
  damage: 75 /* begone */,
  length: 30 * 8,
  width: 8,
  lifetime: 60,
});

const yellowBloom = extend(Weapon, {
  reload: 60 * 5,
  shots: 500,
  inaccuracy: 360,
  burstSpacing: 1,
});

const yellowBloomBullet = extend(BasicBulletType, {
  damage: 50,
  lifetime: 60 * 3,
  speed: 4,
});

yellowMelterWeapon.bullet = yellowMelterWeaponBullet;
yellowBloom.bullet = yellowBloomBullet;

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
  yellowMelterWeapon, yellowBloom
);

Log.info("yellow");