const dataAnalysis = async () => {
  let maxRetries=2;
  const fetchData = async () => {
    let response;
    let id;
    let data;

    try {
      ;
      response = await fetch(
        "https://one00x-data-analysis.onrender.com/assignment?email=ayushsaxena0399@gmail.com"
      );
      id = response.headers.get("x-assignment-id"); // assignment_id
      data = await response.json(); // data - array of phrases
    } catch (error) {
      if(maxRetries > 0 && response.status === 500){
      console.log('Retrying...');
      maxRetries--
      fetchData();
    } else{
      console.log(`Error occured in fetchData(): ${error}`);
    }
      
    }
   

    return [id, data]; // fetch() returns an array containing the assignment_id and data
  };

  const dataArray = await fetchData(); // storing the returned array in dataArray
  const assignment_id = dataArray[0];  // storing the assignment_id
  let dataMap=new Map();
  let count = 0;

  // function processData() - takes the dataArray for processing, generates a Map (dataMap) from the received data containing words as keys and frequency as values. 

  const processData = (data) => {
    data.forEach((element)=>{

      if(!dataMap.has(element)){

        dataMap.set(element,1);

      }
      else if(dataMap.has(element)){
        dataMap.set(element, dataMap.get(element)+1)
      }
    })

    count = 0;

    dataMap.forEach((value, key)=>{
       count = (value>=count) ? value : count;
    })

    let words = [];

    dataMap.forEach((value, key)=>{
       if(value === count){
        words.push(key);
       } 
     })

    console.log(words)
    return words;
  };

  const frequentWords = processData(dataArray[1]); // frequentWords contains the returned highest frequency words array 

  // postData() - takes answer as argument and post the data on required url, returns the response received
  const postData = async (answer) => {
    let responsePost;
    let dataPost;
    try {
      responsePost = await fetch(
        "https://one00x-data-analysis.onrender.com/assignment",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            assignment_id: assignment_id,
            answer: answer,
          }),
        }
      );

      dataPost = await responsePost.json();
    } catch (error) {
      console.log(`Error in postData: ${error} `);
    }
    return dataPost;
  };

  let responseData;

  // using for loop to post as two requests are to be made
  for (i = 0; i < frequentWords.length; i++) {
    responseData = await postData(frequentWords[i]);
    console.log(`Response for answer '${frequentWords[i]}'(${count}):`);
    console.log(responseData);
  }
};

dataAnalysis();
