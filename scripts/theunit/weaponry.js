
const yellowMelterWeapon = extend(Weapon, {
  reload: 60,
  x: 8 * 7,
  shots: 15,
  inaccuracy: 30,
  shootSound: Sounds.explosionbig,
});

const yellowMelterWeaponBullet = extend(ContinuousLaserBulletType, {
  damage: 80 /* begone */,
  width: 8 * 1,
  length: 30 * 8,
  lifetime: 60,
});

const yellowBloom = extend(Weapon, {
  reload: 60 * 13,
  shots: 500,
  inaccuracy: 360,
  shotDelay: 1 /* angery */,
});

const yellowBloomBullet = extend(BasicBulletType, {
  damage: 50,
  width: 8 * 8,
  height: 8 * 8,
  lifetime: 60 * 6,
  speed: 2,
});

const yellowCursedDuo = extend(Weapon, {
  reload: 60 * 1,
  shots: 69,
  inaccuracy: 30,
  rotate: true,
  x: 8 * 6,
  y: 8 * 6,
  sprite: "duo",
});

const yellowCursedDuoBullet = extend(BasicBulletType, {
  damage: 25,
  width: 8 * 1,
  height: 8 * 1,
  speed: 5,
  lifetime: 60 * 2,
});

yellowMelterWeapon.bullet = yellowMelterWeaponBullet;
yellowBloom.bullet = yellowBloomBullet;
yellowCursedDuo.bullet = yellowCursedDuoBullet;

module.exports = {
  yellowMelterWeapon: yellowMelterWeapon,
  yellowBloom: yellowBloom,
  yellowCursedDuo: yellowCursedDuo,
};