let transactions = [{
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


function calculateTotalSpentByCategory(transactions) {
  const categoryTotalMap = {};
  transactions.forEach((transaction) => {
    const { category, price } = transaction;
    if (category in categoryTotalMap) {
      categoryTotalMap[category] += price;
    } else {
      categoryTotalMap[category] = price;
    }
  });
  console.log(categoryTotalMap);
  
  const result = [];
  for (const category in categoryTotalMap) {
    result.push({ category, totalSpent: categoryTotalMap[category] });
  }
  return result;
}

console.log(calculateTotalSpentByCategory(transactions));

module.exports = calculateTotalSpentByCategory;
