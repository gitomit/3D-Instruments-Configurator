# 3D-Instruments-Configurator

## Description
A client side javascript/threejs application for a guitar builder to implement
on his (singlepager-) website. With this 3D webapp the user who is interested in purchasing a customized
accoustic guitar is able to discover the many indivdual configurations available. Also the price of his setting is displayed and updated just in time.

Here you can see the configurator integrated in an anonymized
version of the singlepager-website:

![alt text](https://raw.githubusercontent.com/jroWebAndApp/3D-Instruments-Configurator/master/assets/configurator.gif)

3D models used are on the base of Luca Buonos "Ramirez Classic Guitar". All textures can be found at www.textures.com.

## Make it work
To get it running on your machine just copy the project to a (local) webserver and
navigate to the index.html file. Meshes are in JSON format in json/meshes folder. Use blender
and the [io_three plugin](https://aur.archlinux.org/packages/blender-plugin-io-three/) to import/export and edit them if needed.

## Technologies, libraries and frameworks used:
  - JQuery
  - Three JS
  - Blender
  - OrbitControls
  - TrackballControls
  - SweetAlert
