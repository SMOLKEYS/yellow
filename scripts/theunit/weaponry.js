
const yellowMelterWeapon = extend(Weapon, {
  reload: 60,
  x: 8 * 7,
  shots: 15,
  inaccuracy: 30,
  shootSound: Sounds.explosionbig,
});

const yellowMelterWeaponBullet = extend(ContinuousLaserBulletType, {
  damage: 75 /* begone */,
  width: 8 * 1,
  length: 30 * 8,
  lifetime: 60,
});

const yellowBloom = extend(Weapon, {
  reload: 60 * 10,
  shots: 500,
  inaccuracy: 360,
  shotDelay: 1,
});

const yellowBloomBullet = extend(BasicBulletType, {
  damage: 50,
  width: 8 * 8,
  height: 8 * 8,
  lifetime: 60 * 6,
  speed: 2,
});

yellowMelterWeapon.bullet = yellowMelterWeaponBullet;
yellowBloom.bullet = yellowBloomBullet;

module.exports = {
  yellowMelterWeapon: yellowMelterWeapon,
  yellowBloom: yellowBloom,
};