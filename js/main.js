// const body = d3.select('body');
// const p = body.append('p');
// p.text('Hello World! con js');

// d3.select('body')
// 	.append('p')
// 	.text('Hello World!');


const provinces = ['AB', 'BC', 'MB', 'NB', 'NL', 'NT', 'NS',
     'NU', 'ON', 'PE', 'QC', 'SK', 'YT'];

// const p = d3.select('body').selectAll('p')
// 	.data(provinces)
// 	.enter()
// 	.append('p')
// 	.text('Array Element');

// const p = d3.select('body').selectAll('p')
//     .data(provinces)
//     .enter()
//     .append('p')
//     .text(d => d);

// Append paragraphs and highlight one element
let p = d3.select('body').selectAll('p')
    .data(provinces)
    .enter()
  .append('p')
    .text(d => d)
    .attr('class', 'custom-paragraph')
    .style('font-weight', 'bold')
    .style('color', d => {
      if(d == 'BC')
        return 'blue';
      else
        return 'red';
    });


/*
    Example 2
*/
const numericData = [1, 2, 4, 8, 16];

// // Add <svg> element (drawing space)
const svg = d3.select('body').append('svg')
    .attr('width', 900)
    .attr('height', 50)
    .attr('style', 'background-color: lightgray');

// Add rectangle
svg.selectAll('rect')
    .data(numericData)
    .enter()
    .append('rect')
    .attr('fill', 'red')
    .attr('width', 50)
    .attr('height', 50)
    .attr('y', 0)
    .attr('x', (d, index) => index * 100);