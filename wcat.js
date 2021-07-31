let fs=require("fs");

let inputarr=process.argv.slice(2);

//segregate
let filearr=[];
let optionarr=[];

for(let i=0;i<inputarr.length;i++)
{
    let c=inputarr[i].charAt(0);
    if(c=='-')
    {
        optionarr.push(inputarr[i]);
    }
    else{
            filearr.push(inputarr[i]);
    }
   
}
//command 1
if(filearr.length==1&&optionarr.length==0)
{
    let filepath=filearr[0];
    if(fs.existsSync(filepath)==true)
    {
        let content=fs.readFileSync(filepath);
        console.log(""+content);
    }
    else{
        console.log("File does not exist");
        return;
    }
}
//command 2
else if(filearr.length!=1&&optionarr.length==0){
    let content="";
    for(let i=0;i<filearr.length;i++)
    {
        
        let filepath=filearr[i];
        if(fs.existsSync(filepath)==true)
        {
             content+=fs.readFileSync(filepath);
            
        }
        else{
            console.log("File does not exist");
            return;
        }
    }
     console.log(""+content);
}
//command 3
//-s -> make large line break to a single line break

if(optionarr.includes("-s"))
{
    let content="";
    for(let j=0;j<filearr.length;j++)
    {
        
    if(fs.existsSync(filearr[j]))
    {
    content+=""+fs.readFileSync(filearr[j])+"\r\n";
    
    }
    // console.log(content);
    }
    content=content.split("\r\n");
    let newcontent="";
    for(let i=0;i<content.length;i++)
    {
        if(content[i]!="")
        {
            newcontent=newcontent+content[i]+"\n\n";
        }
    }
    console.log(newcontent);

    }
    else{
        console.log("File does not exist");
    }

