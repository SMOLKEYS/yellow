
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

const bullethell = extend(Weapon, {
  reload: 60 * 13,
  shots: 500,
  inaccuracy: 360,
  shotDelay: 1,
  velocityRnd: 3,
});
//coding is real fun innit
const bullethellBullet = extend(BasicBulletType, {
  init(b){
    if(!b) return
  b.damage = Mathf.random(1000)
  },
  width: 8 * 8,
  height: 8 * 8,
  lifetime: 60 * 6,
  speed: 2,
  backColor: Color.valueOf("ff0000"),
});

meltdownShotgun.bullet = meltdownShotgunBullet;
bullethell.bullet = bullethellBullet;

module.exports = {
  meltdownShotgun: meltdownShotgun,
  bullethell: bullethell,
};

Log.info("SMOLKEYS: Weapons have been activated.");