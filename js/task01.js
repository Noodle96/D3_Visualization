
// 01: Append a new SVG element to your HTML document with D3 (width: 500px, height: 500px)
const svg = d3.select('body').append('svg')
    .attr('width', 500)
    .attr('height', 500)
    .attr('style', 'background-color: lightgray');

// 02: Draw circles with D3
//    Append a new SVG circle for every object in the following array:
const sandwiches = [
    { name: "Thesis", price: 7.95, size: "large" },
    { name: "Dissertation", price: 8.95, size: "large" },
    { name: "Highlander", price: 6.50, size: "small" },
    { name: "Just Tuna", price: 6.50, size: "small" },
    { name: "So-La", price: 7.95, size: "large" },
    { name: "Special", price: 12.50, size: "small" }
];

// 03 Define dynamic properties

// Set the x/y coordinates and make sure that the circles don't overlap each other
// Radius: large sandwiches should be twice as big as small ones
// Colours: use two different circle colours. One colour (fill) for cheap products < 7.00 USD and one for more expensive products
// Add a border to every circle (SVG property: stroke)

svg.selectAll('circle')
    .data(sandwiches)
    .enter()
    .append('circle')
    .attr('cx', (d, index) => 50 + index * 80)
    .attr('cy', 100)
    .attr('r', d => d.size === 'large' ? 20 : 10)
    .attr('fill', d => d.price < 7.00 ? 'green' : 'yellow')
    .attr('stroke', 'black')
    .attr('stroke-width', 2);

