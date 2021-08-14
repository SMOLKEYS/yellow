
const yellowMelterWeapon = extend(Weapon, {
  reload: 120,
});

const YMWB = extend(ContinuousLaserBulletType, {
  damage: 40,
  length: 8,
  width: 240,
  lifetime: 60,
});

yellowMelterWeapon.bullet = YMWB;
