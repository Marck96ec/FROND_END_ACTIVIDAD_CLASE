const fs = require('fs');

  console.log("El Directorio ya ha sido creado");

  var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

  var diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  var date = new Date();
  var year_actual = date.getFullYear()

  for (let year = 2017; year <= year_actual; year++) {
   
   
    meses.forEach((meses, index) =>{
       console.log(require('path'));
      // console.log(`${index} : ${meses}`);
      var path = `./test/${year}/${meses}/`;
      fs.mkdirSync(path,{recursive:true});
      var diasMes = new Date(year, index+1, 0).getDate();
      for (var dia = 1; dia <= diasMes; dia++) {
        var indice = new Date(year, index, dia).getDay();
        var fileContent = `El día número ${dia} del mes ${meses} del año ${year} es ${diasSemana[indice]}`;
        var filepath = path + 'Dia'+dia+'.txt';
        fs.writeFile(filepath, fileContent, (err) => {
            if (err) throw err;
            // console.log("The file was succesfully saved!");
        }); 

      }     
    });
  }

// if (fs.existsSync("Files")) {
// }else{
//   fs.mkdir("Files", (error)=> {
//     if (error) {
//       console.log(error.message);
//     }
//     console.log("Directorio creado");
//   });
// }

