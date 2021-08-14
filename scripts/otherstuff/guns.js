
const yellowBullets = require("otherstuff/bullets");

const yellowMelterWeapon = extend(Weapon, {
  reload: 2 * 60,
});

yellowMelterWeapon.bullet = yellowBullets.yellowMelterWeaponBullet;
