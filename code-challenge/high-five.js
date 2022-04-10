/**
 * 
 * 
 Given a list of the scores of different students, items, where items[i] = [IDi, scorei] represents one score from a student with IDi, calculate each student's top five average.

Return the answer as an array of pairs result, where result[j] = [IDj, topFiveAveragej] represents the student with IDj and their top five average. Sort result by IDj in increasing order.

A student's top five average is calculated by taking the sum of their top five scores and dividing it by 5 using integer division.

Example 1:
Input: items = [[1,91],[1,92],[2,93],[2,97],[1,60],[2,77],[1,65],[1,87],[1,100],[2,100],[2,76]]
Output: [[1,87],[2,88]]
Explanation: 
The student with ID = 1 got scores 91, 92, 60, 65, 87, and 100. Their top five average is (100 + 92 + 91 + 87 + 65) / 5 = 87.
The student with ID = 2 got scores 93, 97, 77, 100, and 76. Their top five average is (100 + 97 + 93 + 77 + 76) / 5 = 88.6, but with integer division their average converts to 88.

Example 2:
Input: items = [[1,100],[7,100],[1,100],[7,100],[1,100],[7,100],[1,100],[7,100],[1,100],[7,100]]
Output: [[1,100],[7,100]]

Constraints:
1 <= items.length <= 1000
items[i].length == 2
1 <= IDi <= 1000
0 <= scorei <= 100
For each IDi, there will be at least five scores.

 */

export function highFive(items) {

  Array.prototype.sum = function () {
    return this.length ? this.reduce((prev, curr) => prev + curr) : 0;
  };

  const map = new Map();
  for (let val of items) {
    const key = val[0];
    let value = val[1];
    if (map.has(key)) {
      map.set(key, [value, ...map.get(key)]);
    } else {
      map.set(key, [value]);
    }
  }
  const highFiveScore = [];
  map.forEach((value, id) => {
    let topScores = value.sort((a, b) => b - a);
    let highFive = topScores.splice(0, 5).sum() / 5;
    highFiveScore.push([id, parseInt(highFive)]);
  });
  return highFiveScore.sort((a, b) => a[0] - b[0]);
}

export function executeHighFiveUseCase() {
  let items = [
    [1, 91],
    [1, 92],
    [2, 93],
    [2, 97],
    [1, 60],
    [2, 77],
    [1, 65],
    [1, 87],
    [1, 100],
    [2, 100],
    [2, 76],
  ];
  console.log(JSON.stringify(highFive(items)));

  let items2 = [[1,100],[7,100],[1,100],[7,100],[1,100],[7,100],[1,100],[7,100],[1,100],[7,100]];
  console.log(JSON.stringify(highFive(items2)));

  let items3 = [[1,84],[1,72],[1,47],[1,43],[1,78],[2,79],[2,4],[2,23],[2,88],[2,79],[3,75],[3,80],[3,38],[3,73],[3,4]];
  console.log(JSON.stringify(highFive(items3)));
}
