
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
  shotDelay: 5,
});

const yellowBloomBullet = extend(BasicBulletType, {
  damage: 50,
  lifetime: 60 * 3,
  speed: 4,
});

yellowMelterWeapon.bullet = yellowMelterWeaponBullet;
yellowBloom.bullet = yellowBloomBullet;

module.exports = {
  yellowMelterWeapon: yellowMelterWeapon,
  yellowBloom: yellowBloom,
};