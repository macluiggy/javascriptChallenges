class Point {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
}

function distanceBetweenPoints(a, b) {
  // your code here
  return ((a.x - b.x )**2 + (a.y - b.y )**2)**(1/2);
}
console.log(distanceBetweenPoints(new Point(4, 50), new Point(4, 4)));





var num = 8**(1/2)
console.log(num.toFixed(6));
