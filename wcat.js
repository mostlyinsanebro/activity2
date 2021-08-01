let fs=require("fs");
let path=require("path");

//Taking input from CLI
let inputArr=process.argv.slice(2);

//Creating arrays for storing file paths and options
let filepathArr=[];
let optionArr=[];

//Putting the elements in filepathArr and optionArr arrays respective to them

for(let i=0;i<inputArr.length;i++)
{
    let ch=inputArr[i].charAt(0);

    if(ch=='-')
    {
        optionArr.push(inputArr[i]);
    }
    else
    {
        filepathArr.push(inputArr[i]);
    }
}

//Executing Command 1
if(optionArr.length==0)
{

//Executing Command 2
if(optionArr.length==0)
{
    let content="";

    for(let i=0;i<filepathArr.length;i++)
    {
        if(fs.existsSync(filepathArr[i])==true)
        {
        content+=fs.readFileSync(filepathArr[i]);
        }
        else
        {
            console.log("File does not exist");
            return;
        }
    }
    console.log(content);
}
}

// //Executing Command 3
if(optionArr.length==1)
{
if(optionArr.includes("-s"))
{
   
        // console.log("-s executed");
        let content="";

        for(let i=0;i<filepathArr.length;i++)
        {
            if(fs.existsSync(filepathArr[i])==true)
             content+=""+fs.readFileSync(filepathArr[i])+"\r\n";

             else
             {
                 console.log("Invalid file path passed");
                 return;
             }
       
        }
        content=content.split("\r\n");
       let finalcontent="";
       for(let i=0;i<content.length;i++)
       {
           if(content[i]!="")
           {
           finalcontent+=content[i]+"\n\n";
           }
       }
       console.log(finalcontent);
    }

//Executing Command 4
if(optionArr.includes("-n"))
{
    let content="";
    for(let i=0;i<filepathArr.length;i++)
    {
        if(fs.existsSync(filepathArr[i])==true)
        {
            content+=fs.readFileSync(filepathArr[i])+"\r\n";
        }
        else
        {
            console.log("Invalid File path passed");
            return;
        }
       
    }
    content=content.split("\r\n");
   
    let newcontent="";
    let c=1;
        for(let j=0;j<content.length;j++)
        {
            newcontent+=""+c+"."+content[j]+"\n";
            c++;
        }
        console.log(newcontent);
}

if(optionArr.includes("-b"))
{
    let content="";
    for(let i=0;i<filepathArr.length;i++)
    {
        if(fs.existsSync(filepathArr[i])==true)
        {
            content+=fs.readFileSync(filepathArr[i])+"\r\n";
        }
        else
        {
            console.log("Invalid File path passed");
            return;
        }
       
    }
    content=content.split("\r\n");
   // console.log(content);
     let newcontent="";
    let c=1;
         for(let j=0;j<content.length;j++)
         {
             if(content[j]!="")
             {
            newcontent+=""+c+"."+content[j]+"\n";
            c++;
             }
            else{
                newcontent+=""+content[j]+"\n";
            }
        }
         console.log(newcontent);
}
}



