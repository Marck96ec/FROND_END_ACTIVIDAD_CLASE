const fs = require('fs');

var files = fs.readdirSync("./clas");
var files2 = fs.readdirSync("./clas");

var array_extenciones = [] ;

console.log(files);

files.forEach((files, index) =>{
    extension = files.split('.').pop();
    array_extenciones.push(extension);
    
});
// console.log(array_extenciones); // todas las extenciones

//filtra que no haya extenciones repetidas

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}


var disnstic = array_extenciones.filter(onlyUnique);
//creo ficheros de cada extencion y los muevo
array_extenciones.forEach((array_extenciones, index) =>{
    var path = `./clas/clasificados/${array_extenciones}`;
    fs.mkdirSync(path,{recursive:true});

    files2.forEach((files2, index) =>{
        // console.log(files2);
        extension_file = files2.split('.').pop();
        if (extension_file == array_extenciones) {
            fs.renameSync(`./clas/${files2}`,`./clas/clasificados/${array_extenciones}/${files2}`);
        }
    });
    // fs.renameSync('./prueba.txt','./cofng.txt');
    
});

// console.log(disnstic);