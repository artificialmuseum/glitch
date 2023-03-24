export default {
  name: 'Artifact',
  slug: 'artifact',

  version: 1,

  /*
   * type
   *
   * which scene type to load.
   * -1 loads src/CustomScene.js
   */
  type: -1,

  /*
   * sky
   *
   * will load a skybox.jpg file from the glitch cdn
   * { type: 'string' }
   */
  sky: 'https://cdn.glitch.global/d54910d5-62eb-4e7e-a100-18f881ab74c4/default.jpg?v=1678892582446',

  /*
   * will load a glb file from the glitch cdn
   * { type: 'string' }
   */
  file: 'https://cdn.glitch.global/d54910d5-62eb-4e7e-a100-18f881ab74c4/theinternetsownboy.glb?v=1678891896217',

  /*
   * cam
   * the initial camera position
   * { type: 'vector3' }
   */
  cam: {
    // x: 0,
    y: 1.7,
    // z: -3,
  },

  /*
   * lookat
   * the position the camera looks at and rotates around
   * { type: 'Vector3' }
   */
  lookat: {
    // x: 0,
    y: 1.7,
    // z: 0,
  },

  /*
   * clip
   * when clip is true, all objects in the glb file that have "clip" in their name
   * will become clipping objects. this allows making part of the scene they obstruct invisible.
   * { type: 'boolean }
   */
  // clip: true,

  /*
   * frustumCulled
   *
   * Objects with animations will get frustum culled too early in augmented reality.
   * Try this option if parts of your object disappear when you get too close to them.
   * { type: 'boolean' }
   */
  // frustumCulled: false,

  /*
   * nosort
   *
   * Multiple overlapping transparent objects cause problems
   * when the camera rotates around them.
   * The z-index seems to "jump",
   * because three.js calculates z-depth based on position of objects.
   * nosort sometimes helps to avoid this effect.
   */
  // nosort: true,

  /*
   * audio
   *
   * loads a audio file from cdn.glitch.com and starts playing it when the scene starts.
   * { type: 'string', default: undefined }
   */
  // audio: 'https://cdn.glitch.global/...',

  /*
   * video
   *
   * loads a video file from cdn.glitch.com and projects it onto an object in the gltf file.
   * mesh object has to be named "videotarget" and should have as few vertices as possible.
   * uv mapping can be used to spread one video over multiple meshes.
   * { type: 'string', default: undefined }
   */
  // video: 'https://cdn.glitch.global/...',

  /*
   * chromaKey (greenscreen)
   *
   * use greenscreen on the video material of your 3d object.
   * can be set to true to use 0xd432 (greenscreen green in hex color format),
   * which is the default green.
   * can be set to any css color too (#ff0000, 'red')
   * { type: ['string', 'number', 'boolean'], default: false,}
   */
  // chromaKey: true, // 0xd432,

  /*
   * hideLight
   *
   * Uncomment this setting to completely disable the threejs lights.
   * This can help if you want to completely control the lighting via glb.
   * { type: 'boolean', default: false }
   */
  // hideLight: true,

  /*
   * loop
   *
   * Uncomment this setting to false to stop animations from looping.
   * { type: 'boolean', default: true }
   */
  // loop: false,

  /*
   * loopVideo
   *
   * Uncomment this setting to false to stop videos after playing once
   * { type: 'boolean', default: true }
   */
  // loopVideo: false,

  /*
   * animations
   * controls animation playback and various other settings
   * { type: 'object' }
   */
  animations: {
    /*
     * should animations loop?
     * { type: 'boolean', default: true }
     */
    // loop: false,
    /*
     * should animations autoplay?
     * { type: 'boolean', default: true }
     */
    // autoplay: false,
    /*
     * when animations are not looping, they usually should clamp when finished.
     * { type: 'boolean' }
     */
    // clampWhenFinished: true,
    /*
     * a list of animation names that should not be looping
     * { type: 'array', itemType: 'string' }
     */
    // noLoopAnimations: ['noLoopAnimationName'],
    /*
     * a list of paused animations
     * can be used to programatically start animations
     * { type: 'array', itemType: 'string' }
     */
    // pausedAnimations: ['pausedAnimationName'],
  },
}
