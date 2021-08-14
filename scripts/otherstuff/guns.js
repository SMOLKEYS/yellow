
const yellowMelterWeapon = extend(Weapon, {
  reload: 2 * 60,
});

const yellowMelterWeaponBullet = extend(ContinuousLaserBulletType, {
  damage: 40,
  length: 8,
  width: 30 * 8,
  lifetime: 60,
});

yellowMelterWeapon.bullet = yellowMelterWeaponBullet;
