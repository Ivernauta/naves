controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 4 4 . . . . . . . 
        . . . . . 5 5 4 4 4 . . . . . . 
        . . . . . 5 5 2 2 1 4 . . . . . 
        . . . . 4 5 2 2 4 4 4 . . . . . 
        . . . . 4 5 2 4 4 4 4 . . . . . 
        . . . . . 2 5 2 4 2 4 . . . . . 
        . . . . . . 4 2 2 4 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, Sps, 0, -100)
    music.beamUp.play()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.spray, 200)
    music.magicWand.play()
})
let Ganar: Sprite = null
let Alien: Sprite = null
let projectile: Sprite = null
let Sps: Sprite = null
effects.clouds.startScreenEffect(20)
scene.setBackgroundImage(assets.image`myImage`)
Sps = sprites.create(assets.image`myImage1`, SpriteKind.Player)
Sps.setPosition(76, 110)
controller.moveSprite(Sps, 100, 0)
Sps.setStayInScreen(true)
game.onUpdateInterval(2000, function () {
    Alien = sprites.createProjectileFromSide(assets.image`myImage2`, 0, 50)
    Alien.x = randint(0, scene.screenWidth())
    Alien.setKind(SpriteKind.Enemy)
})
game.onUpdateInterval(30000, function () {
    Ganar = sprites.createProjectileFromSide(assets.image`myImage0`, 0, 100)
    Ganar.x = randint(0, scene.screenWidth())
    Ganar.setKind(SpriteKind.Enemy)
})
