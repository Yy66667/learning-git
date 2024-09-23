/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/let transactions = [{
  id: 1,
  timestamp: 1656076800000,
  price: 10,
  category: 'Food',
  itemName: 'Pizza',
},
{
  id: 2,
  timestamp: 1656076800000,
  price: 10,
  category: 'Food',
  itemName: 'burger',
}, {
  id: 3,
  timestamp: 1656076800000,
  price: 30,
  category: 'Life style',
  itemName: 'shoes',
}, {
  id: 4,
  timestamp: 1656076800000,
  price: 30,
  category: 'Food',
  itemName: 'coke',
}
]


function calculateTotalSpentByCategory(transoi) {
  const objectCollector = {};
  transoi.forEach((trs)=>{
    const {category, price} = trs;
    if(category in objectCollector){
      objectCollector[category] += price;
    }else {
      objectCollector[category] = price;
    }
  });

  const result = [];
  for (const category in objectCollector){
    result.push({category, totalSpent: objectCollector[category]})
  }
  return result;
}


module.exports = calculateTotalSpentByCategory;
