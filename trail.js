
// Improving the function processData and changing the previous logic to use Map for storing the received data. 

const data =  [
    'sales-funnel',
    'put-a-pin-in-it',
    'bleeding-edge',
    'data-points',
    'value-add',
    'let-s-take-this-offline',
    'circle-back',
    'sales-funnel',
    'bandwidth-constrained',
    'branding',
    'value-proposition',
    'learnings',
    'immersive-experience',
    'infographic',
    'circle-back',
    'learnings',
    'buying-cycle',
    'synergy',
    'buying-cycle',
    'plug-and-chug',
    'customer-journey',
    'impact-map',
    'agile-marketing',
    'home-stretch',
    'bandwidth-constrained',
    'market-share',
    'home-stretch',
    'let-s-take-this-offline',
    'streamline',
    'immersive-experience',
    'gamification',
    'sales-funnel',
    'gamification',
    'snackable-content',
    'two-way-street',
    'agile-marketing',
    'buying-cycle',
    'two-way-street',
    'out-of-pocket',
    'out-of-pocket',
    'customer-journey',
    'thought-leader',
    'best-practice',
    'heads-down',
    'make-it-actionable',
    'make-it-actionable',
    'penetrate-the-market',
    'out-of-pocket',
    'bleeding-edge',
    'swim-lane',
    'give-you-some-time-back',
    'make-it-actionable',
    'data-points',
    'sales-funnel',
    'gamification',
    'make-it-actionable',
    'swag',
    'swag',
    'streamline',
    'put-a-pin-in-it',
    'market-share',
    'plug-and-chug',
    'expansion-play',
    'thought-leadership',
    'put-a-pin-in-it',
    'ideate',
    'heads-down',
    'market-share',
    'bucketize-it',
    'value-add',
    'swag',
    'customer-journey',
    'two-way-street',
    'put-a-pin-in-it',
    'penetrate-the-market',
    'swag',
    'bandwidth-constrained',
    'get-value-out-of-the-conversation',
    'infographic',
    'give-you-some-time-back',
    'deep-dive',
    'penetrate-the-market',
    't-shirt-sizes',
    'granular',
    'bleeding-edge',
    'sales-funnel',
    'bucketize-it',
    'ideate',
    'value-proposition',
    'two-way-street',
    'streamline',
    'plug-and-chug',
    'best-practice',
    'agile-marketing',
    'bandwidth-constrained',
    'best-practice',
    'etc-etc',
    'bandwidth-constrained',
    'button-up-the-loose-ends',
    'heads-down'
  ]

  let dataMap=new Map();
  let count =0;

  function processData(){
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

    let dataArray = [];

    dataMap.forEach((value, key)=>{
       if(value === count){
        dataArray.push(key);
       } 
     })

    console.log(dataArray)
    return dataArray;
  }

  processData(data);