//Initialisation of the p5.play definiton file
//No need of importing anythig else or adding a HTML5 script link.
//Just include this file in jsconfig.json.[Create one if you dont have it]
//Feel free to edit this file to your own liking because I may not have covered all aspects of the p5.play library.

interface Anim
{
    /**
    * Creates a new animation
    * @param fileName1 First file in a sequence OR first image file
    * @param fileName2 Last file in a sequence OR second image file
    * @param Any number of image files after the first two
    */
    //constructor(fileName1: string, fileName2: string, fileNameN:string)

    /**
     * Changes the current frame.
     * @param frame Frame number (starts from 0).
    */
    changeFrame(frame: number)

    /**
     * Objects are passed by reference so to have different sprites using the same animation you need to clone it.
     * @returns Animation: A clone of the current animation
    */
    clone()

    /**
     * Draws the animation at coordinate x and y.
     * Updates the frames automatically.
     * @param x X coordinate
     * @param y Y coordinate
     * @param r Rotation in degrees
    */
    draw(x: number,y: number,r?: number)

    /**
     * Returns the current frame number.
     * @returns Number: Current frame (starts from 0)
    */
    getFrame()

    /**
     * Returns the current frame image as p5.Image.
     * @returns p5.Image: Current frame image
    */
    getFrameImage()

    /**
     * Returns the current frame height in pixels.
     * If there is no image loaded, returns 1.
     * @returns Number: Frame height
    */
    getHeight()

    /**
     * Returns the frame image at the specified frame number.
     * @param frame Frame number
     * @returns p5.Image: Frame Image
    */
    getImageAt(frame: number)

    /**
     * Returns the last frame number.
     * @returns Number: Last frame number (starts from 0)
    */
    getLastFrame()

    /**
     * Returns the current frame width in pixels.
     * If there is no image loaded, returns 1.
     * @returns Number: Frame width
    */
    getWidth()

    /**
     * Plays the animation forward or backward toward a target frame.
     * @param toFrame Frame number destination (starts from 0)
    */
    goToFrame(toFrame: number)

    /**
     * Goes to the next frame and stops.
    */
    nextFrame()

    /**
     * Plays the animation.
    */
    play()

    /**
     * Goes to the previous frame and stops.
    */
    previousFrame()

    /**
     * Rewinds the animation to the first frame.
    */
    rewind()

    /**
     * Stops the animation.
    */
    stop()

    /**
     * True if frame changed during the last draw cycle
     * @property Animation.frameChanged
     * @type boolean
    */
    frameChanged: boolean

    /**
     * Delay between frames in number of draw cycles.
     * If set to 4 the framerate of the animation would be the sketch framerate divided by 4 (60fps = 15fps)
     * @property Animation.frameDelay
     * @type number
     * @default 4
    */
    frameDelay: number

    /**
     * Array of frames (p5.Image)
     * @property Animation.images
     * @type array
    */
    images: Array

    /**
     * If set to false the animation will stop after reaching the last frame
     * @property Animation.looping
     * @type boolean
     * @default true
    */
    looping: boolean

    /**
     * True if the animation is currently playing.
     * @property Animation.playing
     * @type boolean
     * @default true
    */
    playing: boolean

    /**
     * Animation visibility.
     * @property Animation.visible
     * @type boolean
     * @default true
    */
    visible: boolean
}

/**
 * Creates a new group
*/

declare class Group
{

    /**
     * Adds a sprite to the group.
     * @param s The sprite to be added
    */
    add(s: object)

    /**
     * Checks if the the group is overlapping another group or sprite.
     * If the overlap is positive the sprites will bounce affecting each other's trajectories depending on their .velocity, .mass and .restitution.
     * @param target Group or Sprite to check against the current one
     * @returns Boolean: True if overlapping, false otherwise
    */
    bounce(target: object)

    /**
     * Removes all references to the group. Does not remove the actual sprites.
    */
    clear()

    /**
     * Checks if the the group is overlapping another group or sprite.
     * If the overlap is positive the sprites in the group will be displaced by the colliding one to the closest non-overlapping positions.
     * @param target Group or Sprite to check against the current one
     * @returns Boolean: True if overlapping, false otherwise
    */
    collide(target: object)

    /**
     * Checks if the group contains a sprite.
     * @param sprite The sprite to search
     * @returns Number:Index or -1 if not found
    */
    contains(sprite: object)

    /**
     * Checks if the the group is overlapping another group or sprite.
     * If the overlap is positive the sprites in the group will displace the colliding ones to the closest non-overlapping positions.
     * @param target Group or Sprite to check against the current one
    */
    displace(target: object)

    /**
     * Draws all the sprites in the group.
    */
    draw()

    /**
     * Gets the member at index i.
     * @param i The index of the object to retrieve
    */
    get(i: number)

    /**
     * Same as Group.contains
    */
    indexOf()

    /**
     * Returns the highest depth in a group
     * @returns Number:The depth of the sprite drawn on the top
    */
    maxDepth()

    /**
     * Returns the lowest depth in a group
     * @returns Number:The depth of the sprite drawn on the bottom
    */
    minDepth()

    /**
     * Checks if the the group is overlapping another group or sprite.
     * The check is performed using the colliders.
     * If colliders are not set they will be created automatically from the image/animation bounding box.
     * @param target Group or Sprite to check against the current one
    */
    overlap(target: object)

    /**
     * Removes a sprite from the group.
     * Does not remove the actual sprite, only the affiliation (reference).
     * @param item  The sprite to be removed
     * @returns Boolean:True if sprite was found and removed
    */
    remove(item: object)

    /**
     * Removes all the sprites in the group from the scene.
    */
    removeSprites()

    /**
     * Same as group.length
    */
    size()

    /**
     * Returns a copy of the group as standard array.
    */
    toArray()

}

declare class Camera
{

    /**
     * Creates a new Camera
     * @param x Initial x coordinate
     * @param y Initial y coordinate
     * @param zoom Magnification
    */
    constructor(x,y,zoom)

    /**
     * Deactivates the camera.
     * The canvas will be drawn normally, ignoring the camera's position and scale until Camera.on() is called.
    */
    off()
    
    /**
     * Activates the camera. The canvas will be drawn according to the camera position and scale until Camera.off() is called.
    */
    on()

    /**
     * True if the camera is active.
     * Read only property.
     * Use the methods Camera.on() and Camera.off() to enable or disable the camera.
     * @property Camera.active
     * @type boolean
    */
    active: boolean

    /**
     * MouseX translated to the camera view.
     * Offsetting and scaling the canvas will not change the sprites' position nor the mouseX and mouseY variables.
     * Use this property to read the mouse position if the camera moved or zoomed.
     * @property Camera.mouseX
     * @type number
    */
    mouseX: number

    /**
     * MouseY translated to the camera view.
     * Offsetting and scaling the canvas will not change the sprites' position nor the mouseX and mouseY variables.
     * Use this property to read the mouse position if the camera moved or zoomed.
     * @property Camera.mouseY
    */
    mouseY: number

    /**
     * X position of the Camera
     * @property Camera.x
     * @type number
    */
    x: number

    /**
     * Y position of the Camera
     * @property Camera.y
     * @type number
    */
    y: number
   
    /**
     * Camera zoom. Defines the global scale of the sketch.
     * A scale of 1 will be the normal size.
     * Setting it to 2 will make everything twice the size.
     * 0.5 will make everything half size.
     * @property Camera.zoom
     * @type number
    */
    zoom: number
}

/**
 * Displays an animation
 * @param anim Animatio to be displayed
 * @param x X coordinate
 * @param y Y coordinate
*/
declare function animation(anim, x: number, y: number): Anim

/**
 * Creates a sprite object in a rectangle shape. A Sprite is the main object in p5.play library
 * @param x X coordinate of the Sprite
 * @param y  Y coordinate of the Sprite
 * @param width Width of the Sprite
 * @param height Height of the Sprite
*/
declare function createSprite(x: number,y: number,height: number, width: number): Sprite

interface Sprite
{
    /**
     * Adds an animation to the sprite.
     * The animation should be preloaded in the preload() function using loadAnimation.
     * Animations require a identifying label (string) to change them.
     * Animations are stored in the sprite but not necessarily displayed until Sprite.changeAnimation(label) is called.
     * @param label Animation identifier
     * @param animation The preloaded animation
    */
    addAnimation(label: string,animation: any)

    /**
     * Adds an image to the sprite.
     * An image will be considered a one-frame animation.
     * The image should be preloaded in the preload() function using p5 loadImage.
     * Animations require a identifying label (string) to change them.
     * The image is stored in the sprite but not necessarily displayed until Sprite.changeAnimation(label) is called
     * @param label Image identifier
     * @param image The preloaded image
    */
    addImage(label: string,image: any)

    /**
     * Pushes the sprite in a direction defined by an angle.
     * The force is added to the current velocity.
     * @param speed Scalar speed to add
     * @param angle Direction in degrees
    */
    addSpeed(speed: number,angle: number)

    /**
     * Adds the sprite to an existing group.
     * @param group Group to be added into
    */
    addToGroup(group: object)

    /**
     * Pushes the sprite toward a point.
     * The force is added to the current velocity.
     * @param magnitude Scalar speed to add
     * @param pointX Direction x coordinate
     * @param pointY Direction y coordinate
    */
    attractionPoint(magnitude: number,pointX: number,pointY: number)

    /**
     * Checks if the the sprite is overlapping another sprite or a group.
     * If the overlap is positive the sprites will bounce affecting each other's trajectories depending on their .velocity, .mass and .restitution.
     * @param target Sprite or group to check against the current one
     * @returns boolean: True if overlapping, False if not
    */
    bounce(target: object)

    /**
     * Changes the displayed animation.
     * See Animation for more control over the sequence.
     * @param label Animation identifier
    */
    changeAnimation(label: string)

    /**
     * Changes the displayed image/animation.
     * Equivalent to changeAnimation.
     * @param label Image identifier
    */
    changeImage(label: string)

    /**
     * Checks if the the sprite is overlapping another sprite or a group.
     * If the overlap is positive the current sprite will be displace by the colliding one in the closest non-overlapping position.
     * @param target Sprite or group to check against the current one
    */
    collide(target: object)

    /**
     * Checks if the the sprite is overlapping another sprite or a group.
     * If the overlap is positive the current sprite will displace the colliding one to the closest non-overlapping position.
     * @param target Sprite or group to check against the current one
    */
    displace(target: object)

    /**
     * Manages the visuals of the sprite.
     * It can be overridden with a custom drawing function.
     * The 0,0 point will be the center of the sprite.
     * Example: sprite.draw = function() { ellipse(0,0,10,10) } Will display the sprite as circle.
    */
    draw()

    /**
     * Returns the label of the current animation
    */
    getAnimationLabel()

    /**
     * Returns a the bounding box of the current image
    */
    getBoundingBox()

    /**
     * Calculates the movement's direction in degrees.
     * @returns number
    */
    getDirection()

    /**
     * Calculates the scalar speed.
     * @returns number
    */
    getSpeed()

    /**
     * Limits the scalar speed.
     * @param max Max speed: positive number
    */
    limitSpeed(max: number)

    /**
     * Sets the sprite's horizontal mirroring.
     * If 1 the images displayed normally.
     * If -1 the images are flipped horizontally.
     * If no argument returns the current x mirroring.
     * @param dir either 1 or -1
     * @returns number
    */
    mirrorX(dir: number)

    /**
     * Sets the sprite's vertical mirroring.
     * If 1 the images displayed normally.
     * If -1 the images are flipped vertical.
     * If no argument returns the current y mirroring.
     * @param dir either 1 or -1
     * @returns number
    */
    mirrorY(dir: number)
    
    /**
     * Updates the sprite mouse states and triggers the mouse events: onMouseOver, onMouseOut, onMousePressed, onMouseReleased.
    */
    mouseUpdate()

    /**
     * Checks if the the sprite is overlapping another sprite or a group.
     * The check is performed using the colliders.
     * If colliders are not set they will be created automatically from the image/animation bounding box.
     * @param target Sprite or group to check against the current one
    */
    overlap(target: object)

    /**
     * Sprite or group to check against the current one.
     * @param pointX x coordinate of the point to check
     * @param pointY y coordinate of the point to check
     * @returns boolean
    */
    overlapPixel(pointX: number,pointY: number)

    /**
     * Removes the Sprite from the sketch.
     * The removed Sprite won't be drawn or updated anymore.
    */
    remove()

    /**
     * Sets a collider for the sprite.
     * In p5.play a Collider is an invisible circle or rectangle that can have any size or position relative to the sprite and which will be used to detect collisions and overlapping with other sprites, or the mouse cursor.
     * @param type Either "rectangle" or "circle"
     * @param offsetX Collider x position from the center of the sprite
     * @param offsetY Collider y position from the center of the sprite
     * @param width Collider width or radius
     * @param Collider height
    */
    setCollider(type: string,offsetX: number, offsetY: number, width: number, height: number)

    /**
     * Creates a default collider matching the size of the placeholder rectangle or the bounding box of the image.
    */
    setDefaultCollider()

    /**
     *Set the speed and direction of the sprite. The action overwrites the current velocity.
      If direction is not supplied, the current direction is maintained.
      If direction is not supplied and there is no current velocity, the current rotation angle used for the direction.
      @param speed Scalar speed
      @param angle Direction in degrees
    */
    setSpeed(speed: number,angle: number)

    /**
     * Sets the velocity vector.
     * @param x X component
     * @param y Y component
    */
    setVelocity(x: number,y: number)

    /**
     * Updates the sprite.
     * Called automatically at the beginning of the draw cycle.
    */
    update()

    /**
     * Reference to the current animation.
     * @property Sprite.animation
     * @type Animation
    */
    animation: Animation

    /**
     * The sprite's current collider.
     * It can either be an Axis Aligned Bounding Box (a non-rotated rectangle) or a circular collider.
     * If the sprite is checked for collision, bounce,
     * overlapping or mouse events the collider is automatically created from the width and height
     * of the sprite or from the image dimension in case of animate sprites.
     * @property Sprite.collider
     * @type object
    */
    collider: object

    /**
     * If set to true, draws an outline of the collider, the depth, and center.
     * @property Sprite.debug
     * @type boolean
     * @default false
    */
    debug: boolean,

    /**
     * Determines the rendering order within a group.
     * A sprite with lower depth will appear below the ones with higher depth.
     * @property Sprite.depth
     * @type number
    */
    depth: number

    /**
     * Friction factor, reduces the sprite's velocity.
     * The friction should be close to 0 (eg. 0.01) 0: no friction 1: full friction
     * @property Sprite.friction
     * @type number
     * @default 0
    */
    friction: number,

    /**
     * Groups the sprite belongs to, including allSprites.
     * @property Sprite.groups
     * @type Array
    */
    groups: Array

    /**
     * Height of the sprite's current image. 
     * If no images or animations are set it's the height of the placeholder rectangle.
     * @property Sprite.height
     * @type number
     * @default 100
    */
    height: number

    /**
     * If set to true the sprite won't bounce or be displaced by collisions.
     * It simulates an infinite mass or an anchored object.
     * @property Sprite.immovable
     * @type boolean
     * @default false
    */
    immovable: boolean

    /**
     * Cycles before self removal.
     * Set it to initiate a countdown, every draw cycle the property is reduced by 1 unit.
     * At 0 it will call a sprite.remove() .
     * Disabled if set to -1.
     * @property Sprite.life
     * @type number
     * @default -1
    */
    life: number

    /**
     * The mass determines the velocity transfer when sprites bounce against each other. 
     * See Sprite.bounce.
     * The higher the mass the least the sprite will be affected by collisions.
     * @property Sprite.mass
     * @type number
     * @default 1
    */
    mass: number

    /**
     * Set a limit to the sprite's scalar speed regardless of the direction. 
     * The value can only be positive. If set to -1, there's no limit.
     * @property Sprite.maxSpeed
     * @type number
     * @default -1
    */
    maxSpeed: number

    /**
     * If set to true sprite will track its mouse state. 
     * The properties mouseIsPressed and mouseIsOver will be updated.
     * Note: automatically set to true if the functions onMouseReleased or onMousePressed are set.
     * @property Sprite.mouseActive
     * @type boolean
     * @default false
    */
    mouseActive: boolean

    /**
     * True if mouse is on the sprite's collider.
     * Read only.
     * @property Sprite.mouseIsOver
     * @type boolean
    */
    mouseIsOver: boolean

    /**
     * True if mouse is pressed on the sprite's collider.
     * Read only.
     * @property Sprite.mouseIsPressed
     * @type boolean
    */
    mouseIsPressed: boolean

    /**
     * Unscaled height of the sprite.
     * If no images or animations are set it's the height of the placeholder rectangle.
     * @property Sprite.originalHeight
     * @type number
     * @default 100
    */
    originalHeight: number

    /**
     * Unscaled width of the sprite.
     * If no images or animations are set it's the width of the placeholder rectangle.
     * @property Sprite.originalWidth
     * @type number
     * @default 100
    */
    originalWidth: number

    /**
     * True if the sprite has been removed.
     * @property Sprite.removed
     * @type boolean
    */
    removed: boolean

    /**
     * Coefficient of restitution.
     * The velocity lost after bouncing.
     * 1: perfectly elastic, no energy is lost 
     * 0: perfectly inelastic, no bouncing 
     * Less than 1: inelastic, this is the most common in nature 
     * Greater than 1: hyper elastic, energy is increased like in a pinball bumper
     * @property Sprite.restituion
     * @type number
     * @default 1
    */
    restitution: number

    /**
     * Automatically lock the rotation property of the visual element (image or animation) to the sprite's movement direction and vice versa.
     * @property Sprite.rotateToDirection
     * @type boolean
     * @default false
    */
    rotateToDirection: boolean

    /**
     * Rotation in degrees of the visual element (image or animation).
     * Note: this is not the movement's direction, see getDirection.
     * @property Sprite.rotation
     * @type number
     * @default 0
    */
    rotation: number,

    /**
     * Rotation change in degrees per frame of the visual element (image or animation) .
     * Note: this is not the movement's direction, see getDirection.
     * @property Sprite.rotationSpeed
     * @type number
     * @default 0
    */
    rotationSpeed: number,

    /**
     * Determines the sprite's scale.
     * Example: 2 will be twice the native size of the visuals, 0.5 will be half.
     * Scaling up may make images blurry.
     * @property Sprite.scale
     * @type number
     * @default 1
    */
    scale: number,

    /**
     * If no image or animations are set this is color of the placeholder rectangle
     * @property Sprite.shapeColor
     * @type Color
    */
    shapeColor: string | number,

    /**
     * The Sprite's velocity in the X direction.
     * @property Sprite.velocityX
     * @type number
    */
    velocityX: number,

    /**
     * The Sprite's velocity in the Y direction.
     * @property Sprite.velocityY
     * @type number
    */
    velocityY: number,

    /**
     * Width of the sprite's current image. 
     * If no images or animations are set it's the width of the placeholder rectangle.
     * @property Sprite.width
     * @type number
     * @default 100
    */
    width: number,

    /**
     * X position of the Sprite
     * @property Sprite.x
     * @type number
    */
    x: number,

    /**
     * Y position of the Sprite
     * @property Sprite.y
     * @type number
    */
    y: number,
}



/**
 * Displays a Sprite. To be typically used in the main draw function.
 * @param Sprite Sprite to be displayed
*/

declare function drawSprite(sprite: object)
/**
 * Displays a Group of sprites. If no parameter is specified, draws all sprites in the sketch.
 * The drawing order is determined by the Sprite property "depth"
*/
declare function drawSprites()

/**
 * Returns all the sprites in the sketch as an array
 * @returns Array of Sprites
*/
declare function getSprites()

/**
 * Detects if a key is currently pressed.
 * Like p5 keyIsDown but accepts strings and codes
 * @param key Key code or character
*/
declare function keyDown(key: string | number)

/**
 * Detects if a key was pressed during the last cycle.
 * It can be used to trigger events once, when a key is pressed or released. 
 * Example: Super Mario jumping.
 * @param key Key code or character
*/
declare function keyWentDown(key: string | number)

/**
 * Detects if a key was released during the last cycle. 
 * It can be used to trigger events once, 
 * When a key is pressed or released. Example: Spaceship shooting.
 * @param key Key code or character
*/
declare function keyWentUp(key: string | number)

/**
 * Loads an animation. 
 * To be typically used in the preload() function of the sketch.
 * @param URL Link of animation
*/
declare function loadAnimation(URL: any)

/**
 * Loads a Sprite Sheet.
 * To be typically used in the preload() function of the sketch.
*/
declare function loadSpriteSheet()

/**
 * Detects if a mouse button is currently down Combines mouseIsPressed and mouseButton of p5.
 * @param buttonCode Mouse button constant LEFT, RIGHT or CENTER
*/
declare function mouseDown(buttonCode: number)

/**
 * Detects if a mouse button is currently up Combines mouseIsPressed and mouseButton of p5.
 * @param buttonCode Mouse button constant LEFT, RIGHT or CENTER
*/
declare function mouseUp(buttonCode: number)

/**
 * Detects if a mouse button was pressed during the last cycle.
 * It can be used to trigger events once, to be checked in the draw cycle.
 * @param buttonCode Mouse button constant LEFT, RIGHT or CENTER
*/
declare function mouseWentDown(buttonCode: number)

/**
 * Detects if a mouse button was released during the last cycle.
 * It can be used to trigger events once, to be checked in the draw cycle
 * @param buttonCode Mouse button constant LEFT, RIGHT or CENTER
*/
declare function mouseWentUp(buttonCode: number)

/**
 * Removes a Sprite from the sketch.
 * The removed Sprite won't be drawn or updated anymore.
 * Equivalent to Sprite.remove().
 * @param sprite Sprite to be removed
*/
declare function removeSprite(sprite:object)

/**
 * Updates all the sprites in the sketch (position, animation...).
 *  It's called automatically at every draw().
 *  It can be paused by passing a parameter true or false.
 *  Note: it does not render the sprites.
 * @param updating False to pause the update, True to resume
*/
declare function updateSprites(updating: boolean)

/**
 * Turns the quadTree on or off.
 * A quadtree is a data structure used to optimize collision detection.
 * It can improve performance when there is a large number of Sprites to be checked continuously for overlapping.
 * p5.play will create and update a quadtree automatically.
*/
declare function useQuadTree(use: boolean)

