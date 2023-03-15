# @artificialmuseum/sandbox

This is the artifact creation sandbox for the [Artificial Museum](https://artificialmuseum.com).

Makers can use this sandbox to customize various features of their artifact and test them on [glitch](https://glitch.com).

All of the settings in this sandbox are the same as they are in the production version of the platform,
lighting, skybox, scale, renderer and other base scene components are setup already.
All that is left to do is to customize various aspects of the artifact.

### usage

### easy way

- go to [https://glitch.com/edit/#!/artificialmuseumsandbox](https://glitch.com/edit/#!/artificialmuseumsandbox)
- find the "Remix" Button on the top right of the page and click it
- register an account, connect a social media account or log into your existing account
- all done. edit CustomScene.js or artifact.js or [see below](#custom-files) to find out how to upload custom files

### complicated way

if you need to get the newest features from github you can use the following method:

 got to [glitch.com](https://glitch.com), register a free account or login via github account.
- click new project
- click "import from github"
- copy `https://github.com/artificialmuseum/sandbox.git` in the popup window
- press ok or the enter key
- wait for glitch to do the magic
- click the terminal in the bottom left
- once it opened, input
  `sh init-glitch.sh`
  and press the enter key on your keyboard.
- the page will refresh and you will see the directory with the files you can edit and overwrite.


# custom files

you can upload new files for the mp3, mp4, glb and skybox files,
just make sure to get the cdn url of the files after uploading them
and use the resulting url in the corresponding field of the artifact.js file:

```js
  audio: 'https://cdn.glitch.global/d54910d5-62eb-4e7e-a100-18f881ab74c4/artifact.mp3?v=1678893678952',
  video: 'https://cdn.glitch.global/d54910d5-62eb-4e7e-a100-18f881ab74c4/artifact.mp4?v=1678893692297',
  sky: 'https://cdn.glitch.global/d54910d5-62eb-4e7e-a100-18f881ab74c4/default.jpg?v=1678892582446',
  file: 'https://cdn.glitch.global/d54910d5-62eb-4e7e-a100-18f881ab74c4/theinternetsownboy.glb?v=1678891896217',
```

would work, as an example.

to find your uploaded files, use the "assets" button on the top left of the page