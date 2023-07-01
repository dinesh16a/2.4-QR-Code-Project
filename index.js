import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
.prompt([
    {
        message:"type url",
        name:"URL",
    },
])
.then((answer)=>{
    const url=answer.URL;
    var qrs=qr.image(url)
    qrs.pipe(fs.createWriteStream("qr_img.png"));
})
