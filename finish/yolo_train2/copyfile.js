
var exec = require('child_process').exec;



var fileString = `mask_894.jpg

mask_1682.jpg

mask_1601.jpg

mask_1984.jpg

mask_1681.jpg

mask_971.jpg

mask_1444.jpg

mask_1448.jpg

mask_1687.jpg

mask_1017.jpg

mask_1661.jpg

mask_1329.jpg

mask_1816.jpg

mask_1189.jpg

mask_1706.jpg

mask_1871.jpg

mask_1055.jpg

mask_1111.jpg

mask_862.jpg

mask_1104.jpg

mask_1092.jpg

mask_1283.jpg

mask_1058.jpg

mask_1746.jpg

mask_1571.jpg

mask_1124.jpg

mask_1277.jpg

mask_1255.jpg

mask_1175.jpg

mask_1160.jpg

mask_1484.jpg

mask_1910.jpg

mask_1195.jpg

mask_1163.jpg

mask_1648.jpg

mask_1133.jpg

mask_1901.jpg

mask_1293.jpg

mask_1193.jpg

mask_1375.jpg

mask_1963.jpg

mask_1251.jpg

mask_1733.jpg

mask_999.jpg

mask_1811.jpg

mask_1660.jpg

mask_1620.jpg

mask_1588.jpg

mask_961.jpg

mask_1344.jpg

mask_1465.jpg`

fileString = fileString.replace(/(^[ \t]*\n)/gm, "")


var fileList = fileString.split('\n')

console.log(fileList)


fileList.forEach(element =>{
    exec(` cp ${element} new/${element}`, function(error, stdout, stderr){
        if(error) {
            console.error('error: ' + error,'cp950');
            console.error('error: '+error)
            return;
        }
       if(stdout){
            console.log('success :'+stdout)
       }
     });

})

