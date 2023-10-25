const dataAnalysis = async () => {

const fetchData = async ()=>{
    
    let response;
    let id;
    let data;

    try{
        response = await fetch('https://one00x-data-analysis.onrender.com/assignment?email=ayushsaxena0399@gmail.com');
        id = response.headers.get('x-assignment-id');
        data = await response.json();
    } catch(error){
        console.log(`Error occured in fetchData(): ${error}`);
    }

return [id, data];
   
}

const dataArray = await fetchData();
let assignment_id = dataArray[0]
// console.log(assignment_id);
let count=0;

const processData = (data) => {
   let array = data.map((element)=>{
        count=0;
        data.forEach((item) => {
            if(element===item){
                count++;
            }
        });
        return count;
    });

    const maximum = Math.max(...array);
    
    let frequent=[];

    array.forEach((element,i)=>{
        if(element===maximum){
            frequent.push(data[i]);
        }
    })
    frequent.sort();

let words =[];

for(i=0;i<frequent.length-2;i++){
    if(words.length===0){
        words.push(frequent[0]);
    }
    if(frequent[i]!==frequent[i+1]){
        words.push(frequent[i+1]);
    }
}
return words;

 }

 const frequentWords = processData(dataArray[1]);
//  console.log(frequentWords);

const postData = async () => {

    let responsePost;
    let dataPost;
try{
    responsePost = await fetch('',{
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify({'post':{'assignment_id':assignment_id, 'answer':''},}),
    }); 

    dataPost = await responsePost.json(); 
    
   } catch(error){
    console.log(`Error in postData: ${error} `);
   }
return dataPost;
}

}

dataAnalysis();


 





