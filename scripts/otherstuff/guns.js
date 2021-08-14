
const yellowBullets = require("bullets");

const yellowMelterWeapon = extend(Weapon, {
  reload: 2 * 60,
});

yellowMelterWeapon.bullet = yellowBullets.yellowMelterWeaponBullet;
