/**
 * loads new instruments shape and/or textures into container
 * @param geometry
 * @param materials
 */
function matloader(meshToAddMaterial, initialLoadingBool, textureChanged, bodyChanged, whatChanged) {
    // initialLoading is set to true, all standard textures are loaded to the mesh
    if(initialLoadingBool === true) {
        // front body
        if(meshToAddMaterial.material.materials[0].name === 'Body front') {
            meshToAddMaterial.material.materials[0].map = THREE.ImageUtils.loadTexture('assets/textures/frontwood/oak.jpg');
        }
    
        // fretboard
        if(meshToAddMaterial.material.materials[0].name === 'Material.002') {
            meshToAddMaterial.material.materials[0].map = THREE.ImageUtils.loadTexture('assets/textures/fretboard/rosewood.jpg');
        }
        
        // bridge
        if(meshToAddMaterial.material.materials[0].name === 'Hed.001'){
            meshToAddMaterial.material.materials[0].map = THREE.ImageUtils.loadTexture('assets/textures/bridge/walnut.jpg');
        }
        
        //head top
        if(meshToAddMaterial.material.materials[0].name === 'Hed.002'){
            meshToAddMaterial.material.materials[0].map = THREE.ImageUtils.loadTexture('assets/textures/head/walnut.jpg');
        }
        
        //neck
        if(meshToAddMaterial.material.materials[0].name === 'Hed'){
            meshToAddMaterial.material.materials[0].map = THREE.ImageUtils.loadTexture('assets/textures/neckwood/mahogany.jpg');
        }

        //mechanics
        if(meshToAddMaterial.material.materials[0].name === 'Perlemor'){
            meshToAddMaterial.material.materials[0].map = THREE.ImageUtils.loadTexture('assets/textures/mechanics/silver.jpg');
        }

        //neck
        if(meshToAddMaterial.material.materials[1].name === 'Rosette'){
            meshToAddMaterial.material.materials[1].map = THREE.ImageUtils.loadTexture('assets/textures/rosette/rosette1.jpg');
        }
    
        // side body
        if(meshToAddMaterial.material.materials[2].name === 'Body side'){
            meshToAddMaterial.material.materials[2].map = THREE.ImageUtils.loadTexture('assets/textures/sidewood/walnut.jpg');
        }
        
        if(meshToAddMaterial.material.materials[4].name === 'Label'){
            meshToAddMaterial.material.materials[4].map = THREE.ImageUtils.loadTexture('assets/textures/certificate/certificate1.jpg');
            var lastInitLoaded = true;
        }

        // setting initialLoading to false
        if(lastInitLoaded) {
            initialLoading = false;
        }
    } 
    
    
    else {
        // if texture changed...
        if(textureChanged === true && bodyChanged === false) {

                    let materialsArr = meshToAddMaterial.material.materials;
                    for(let i=0; i < materialsArr.length; i++) {
                        if(materialsArr[i].name === 'Body front' && whatChanged === 'Body front'){
                            let materialToAdd = configArray['frontwood']
                            materialsArr[i].map = THREE.ImageUtils.loadTexture('assets/textures/frontwood/'+materialToAdd+'.jpg');
                        }
                        if(materialsArr[i].name === 'Hed'){
                            let materialToAdd = configArray['neckwood']
                            materialsArr[i].map = THREE.ImageUtils.loadTexture('assets/textures/neckwood/'+materialToAdd+'.jpg');
                        }
                        if(materialsArr[i].name === 'Body side' && whatChanged === 'Body side'){
                            let materialToAdd = configArray['sidewood']
                            materialsArr[i].map = THREE.ImageUtils.loadTexture('assets/textures/sidewood/'+materialToAdd+'.jpg');
                        }
                        if(materialsArr[i].name === 'Perlemor' && whatChanged === 'Perlemor') {
                            let materialToAdd = configArray['mechanics']
                            materialsArr[i].map = THREE.ImageUtils.loadTexture('assets/textures/mechanics/'+materialToAdd+'.jpg');
                        }
                    }
        }
        
        // if body changed...
        else if(textureChanged === false && bodyChanged === true) {
            // front body
            if(meshToAddMaterial.material.materials[0].name === 'Body front') {
                let materialToAdd = configArray['frontwood']
                meshToAddMaterial.material.materials[0].map = THREE.ImageUtils.loadTexture('assets/textures/frontwood/'+materialToAdd+'.jpg');
            }

            // side body
            if(meshToAddMaterial.material.materials[2].name === 'Body side'){
                let materialToAdd = configArray['sidewood']
                meshToAddMaterial.material.materials[2].map = THREE.ImageUtils.loadTexture('assets/textures/sidewood/'+materialToAdd+'.jpg');
            }

            if(meshToAddMaterial.material.materials[4].name === 'Label'){
                meshToAddMaterial.material.materials[4].map = THREE.ImageUtils.loadTexture('assets/textures/certificate/certificate1.jpg');
            }
        }
    }
    return meshToAddMaterial
}