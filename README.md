# @artificialmuseum/glitch

This is the artifact creation sandbox for the [Artificial Museum](https://artificialmuseum.com): glitch.com edition.

Artists can use this sandbox to customize various features of their artifact and test them on [glitch](https://glitch.com).

All of the settings in this sandbox are the same as they are in the production version of the platform,
lighting, skybox, scale, renderer and other base scene components are setup already.
All that is left to do is to customize various aspects of the artifact using artifact.js and CustomScene.js

### usage / setup

[click here](https://glitch.com/edit/#!/remix/armsandbox)
glitch will walk you through the rest of the needed steps.

you may need to create a glitch account.

if you want to use the sandbox without registering, you can use [artificialmuseum/sandbox](https://github.com/artificialmuseum/sandbox/) instead and develop your artifact locally.

# custom files

you can upload new files for the audio, video, glb and skybox files,
just make sure to get the cdn url of the files after uploading them in the glitch assets area
and use the resulting url in the corresponding field of the artifact.js file:

```js
  audio: 'https://cdn.glitch.global/d54910d5-62eb-4e7e-a100-18f881ab74c4/artifact.mp3?v=1678893678952',
  video: 'https://cdn.glitch.global/d54910d5-62eb-4e7e-a100-18f881ab74c4/artifact.mp4?v=1678893692297',
  sky: 'https://cdn.glitch.global/d54910d5-62eb-4e7e-a100-18f881ab74c4/default.jpg?v=1678892582446',
  file: 'https://cdn.glitch.global/d54910d5-62eb-4e7e-a100-18f881ab74c4/cube.glb?v=1679256200503',
```

would work, as an example.

to find your uploaded files, use the "assets" button on the top left of the page
