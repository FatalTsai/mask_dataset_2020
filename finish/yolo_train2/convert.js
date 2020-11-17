var fs = require('fs')
var path = require('path')


var allFile = fs.readdirSync('./')
// console.log( fs.readdirSync('./') )

var txtfileList=[];
allFile.forEach(element => {
    // console.log(element)
    if(path.extname(element) == '.txt' )
    {
        // console.log(element)
        txtfileList.push(element)
    }


});

//  console.log(txtfileList)

txtfileList.forEach( txtEle =>{


    var tmpfile = fs.readFileSync(txtEle,'utf-8')
    // console.log(tmpfile)

    var splitfile_enter= tmpfile.split('\n')
    // console.log(splitfile_enter)

    var splitfile_space=[]

    splitfile_enter.forEach( (element,index) =>{
        // console.log(index,element)

        var tmp = element.split(' ')
        splitfile_space[index] = tmp
    })

    var ansList=[];
    var invaidPtr = splitfile_space.length - 1;
    splitfile_space.forEach((element,index) =>{
        // console.log(element, element.length)
        if(element.length != 5){
            invaidPtr = index
            var tmp =[]
            for(var i=0;i<5;i++)
            {
                tmp.push(element[i])
            }

            ansList.push(tmp)
        }
        else if(index >invaidPtr){
            // do nothing
        }
        else{
            ansList.push(element)
        }
    })
    // console.log(invaidPtr)

    // console.log(ansList)

    var ans=''

    ansList.forEach(element =>
    {
        element.forEach((el,ind)=>{
            if(typeof(el)=='string' ){
                // console.log('el = ',el)
                ans+=  el.length>=8   ? el.slice(0,8) : el
                if(ind!=4)
                    ans+=' '
            }
        })
        ans+='\n'
    })

    ans = ans.replace(/(^[ \t]*\n)/gm, "")
    console.log(ans)
     fs.writeFileSync(txtEle,ans)

})