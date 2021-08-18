
const meltdownShotgun = extend(Weapon, {
  reload: 60,
  x: 8 * 7,
  shots: 15,
  inaccuracy: 30,
  shootSound: Sounds.explosionbig,
});

const meltdownShotgunBullet = extend(ContinuousLaserBulletType, {
  damage: 80 /* begone */,
  width: 8 * 1,
  length: 30 * 8,
  lifetime: 60,
});

const lucidity = extend(Weapon, {
  reload: 60 * 13,
  shots: 500,
  inaccuracy: 360,
  shotDelay: 1 /* angery */,
});

const lucidityBullet = extend(BasicBulletType, {
  damage: 70,
  width: 8 * 8,
  height: 8 * 8,
  lifetime: 60 * 6,
  speed: 2,
  color: [
    ff0000,
    ff0000
    ],
});

meltdownShotgun.bullet = meltdownShotgunBullet;
lucidity.bullet = lucidityBullet;

module.exports = {
  meltdownShotgun: meltdownShotgun,
  lucidity: lucidity,
};