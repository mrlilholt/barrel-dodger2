namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
let projectile: Sprite = null
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.over(false)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    let mySprite: Sprite = null
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy = -250
    }
})
game.onUpdateInterval(1500, function () {
    projectile = sprites.createProjectileFromSide(img`
3 e e e e e e 3 
e e e e e e e e 
7 7 7 7 7 7 7 7 
e e e e e e e e 
e e e e e e e e 
7 7 7 7 7 7 7 7 
e e e e e e e e 
3 e e e e e e 3 
`, Math.randomRange(-100, -80), 0)
    info.changeScoreBy(5)
    tiles.placeOnTile(projectile, tiles.getTileLocation(9, 5))
})
