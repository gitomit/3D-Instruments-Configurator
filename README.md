# 3D-Instruments-Configurator

## Description
A client side javascript/threejs application for a local guitar builder to implement
on his singlepage-website. With this 3D webapp the user who is interested in purchasing a customized
accoustic guitar is able to discover the many indivdual configurations available and
gets the price of his personal guitar build displayed on the fly.

Here you can see the configurator integrated in an anonymized
version of the singlepage site:

![alt text](https://raw.githubusercontent.com/jroWebAndApp/3D-Instruments-Configurator/master/assets/configurator.gif)

3D models used are on the base of Luca Buonos "Ramirez Classic Guitar". All textures can be found at www.textures.com.

## Make it work
To get it running on your machine just copy the project to a (local) webserver and
navigate to the index.html file. Meshes are in JSON format in json/meshes folder. Use blender
and the io_three plugin to import/export and edit them if needed.

## Technologies, libraries and frameworks used:
  - JQuery
  - Three JS
  - Blender
  - OrbitControls
  - TrackballControls
  - SweetAlert
