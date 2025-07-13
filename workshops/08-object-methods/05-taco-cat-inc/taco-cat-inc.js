let tacoCatInc = {
  gourmetShell: {
    'hard treat shell': {cost: 2, quantity: 100},
    'soft treat shell': {cost: 1.5, quantity: 100}
  },

  gourmetFishFilling: {
    'salmon': {cost: 5, quantity: 100},
    'tuna': {cost: 5.5, quantity: 100},
    'sardines': {cost: 1.5, quantity: 100}
  },

  gourmetVeggie: {
    'cat grass': {cost: 1, quantity: 100}
  },

  gourmetSeasoning: {
    'cat nip': {cost: 0.5, quantity: 100},
    'treat dust': {cost: 0.1, quantity: 100}
  },

  cash: 0
};

// YOUR CODE BELOW

tacoCatInc.currentInventory=function(){
let total=0;
let toArray=Object.values(this);
for (let i=0;i<toArray.length;i++){
  let currentElement=toArray[i];
  let itemType=Object.values(currentElement);
for (j=0;j<itemType.length;j++){
  let currentValue=itemType[j];
  total+=currentValue.cost * currentValue.quantity;
}

}
return total;
}
tacoCatInc.sale=function(order){
  debugger;
  let orderTotal=0;
  let   toArray2=Object.entries(order);

  for(let i=0;i<toArray2.length;i++){
    let currentElement = toArray2[i]
    let key = currentElement[0]
    let value = currentElement[1]
    let costOfItem = tacoCatInc[key][value].cost
    orderTotal+=costOfItem;
    tacoCatInc[key][value].quantity-=1;  
  }
  this.cash+=orderTotal;
  return orderTotal;


}

