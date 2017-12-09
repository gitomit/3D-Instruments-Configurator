/**
 * loads new instruments shape into container and calls the material loader
 * @param geometry
 * @param materials
 */
function shapeloader(geometry, materials) {
    material = new THREE.MultiMaterial(materials);
    model_mesh = new THREE.Mesh(geometry, material);
    model_mesh.scale.set(5.5, 5.5, 5.5);
    model_mesh.position.set(0, -2, 0);


        try {
            matloader(model_mesh, initialLoading, textureChanged, bodyChanged)
        } catch (errMaterialLoader){
            //console.log("error loading material for mesh" + errMaterialLoader)
        }

    group.add(model_mesh);
}