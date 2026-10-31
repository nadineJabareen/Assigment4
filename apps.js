/* נאדין גברין + אור סלמן  */

// Assigment 4 : write a program that sets up an array of 10 textFiles names,and creates a new file which its content is made up of n lines of each n file ( one line from file 1, 2 lines from file 2 etc...)

//importing the module to handle files 
const fs = require('fs');  
const path = require('path');


//full paths to each:texts Folder  AND the new file that the program will creat later 
const directoryPath = path.join(__dirname, '/alltexts'); 
const newFilePath = path.join(__dirname, 'newFile.txt');

try{
//setting up an array of 10 text files names
const filearray=['text1.txt','text2.txt','text3.txt','text4.txt','text5.txt','text6.txt','text7.txt','text8.txt','text9.txt','text10.txt']

//to over write the new file after each run so it wount stack up 
fs.writeFileSync(newFilePath, '');

//looping through the files array and adding from file number n ,n lines to the new file we created, splitting each file content using split and and filtering empty lines ( file 8 is empty with out filter it would add an empty line)
for(let i=0;i<filearray.length;i++){
     const fileContent=(fs.readFileSync(`${directoryPath}/${filearray[i]}`, 'utf-8'))
    .split(/\r?\n/)
    .filter(spacing => spacing !== '');
    const linesPer_i=fileContent.slice(0,i+1);
    if (linesPer_i.length>0){
      fs.appendFileSync(newFilePath,linesPer_i.join('\n')+'\n' )
    }
}

//reading the new file and printing it to check results 
console.log(fs.readFileSync(newFilePath, 'utf-8'));    
}

catch (error) {
    console.log("something went wrong", error.message);
  }

    
