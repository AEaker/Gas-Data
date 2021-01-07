// d3.csv("../Aarons stuff/cleanHistGasPrices.csv",function(data){
// console.log(data)
// var parseTime = d3.timeParse("%Y-%b-%");
// data.forEach(function(data){
//     date = parseTime(data.date)
//     console.log(date);
// }
// )
    
// })

function init(){
let dropdown= d3.select("#selDataset")
let names = ["Gasoline","Midgrade","Premium","Diesel"]
    for ( i=0; i< names.length; i++){
        var option = dropdown.append("option")
        option.attr("value",`${names[i]}`)
        option.text(`${names[i]}`)

    UpdateData("Gasoline")
}
}
let Gasoline = document.getElementById("Gasoline").innerText
let Midgrade = document.getElementById("Midgrade").innerText
let Premium = document.getElementById("Premium").innerText
let Diesel = document.getElementById("Diesel").innerText
let factor=0;
let names = ["Gasoline","Midgrade","Premium","Diesel"]
let dropdown=d3.select("#selDataset")
function init(){
    names.forEach((name)=>{
        var option= dropdown.append("option");
            option.attr("value",`${name}`);
            option.text(`${name}`);

})
    UpdateData("Gasoline");
}
function UpdateData(value){
    var name= ""
    if (value == "Gasoline"){
        factor =Gasoline
        name = value
    }
    else if (value == "Midgrade"){
        factor =Midgrade
        name = value
    }
    else if (value == "Premium"){
        factor = Premium
        var name = value
    }
    else {
        factor = Diesel
        name = value
    }

    var degrees = 5 - factor,
    radius = .5;
    var radians = degrees * Math.PI / 5;
    var x = radius * Math.cos(radians);
    var y = radius * Math.sin(radians);
    var mainPath = 'M -.0 -0.025 L .0 0.025 L ',
    pathX = String(x),
    space = ' ',
    pathY = String(y),
    pathEnd = ' Z';
    var path = mainPath.concat(pathX,space,pathY,pathEnd);
    var data = [{ type: 'scatter',
    x: [0], y:[0],
    marker: {size: 28, color:'080808'},
    showlegend: false,
    name: `${name}`,
    text: factor,
// direction: "counter-clockwise",
    hoverinfo: 'text+name'},
    { values: [40/5,40/5,40/5,40/5,40/5,40],
    rotation: 90,
    text: ['4-5','3-4', '2-3', '1-2', '0-1' ,''],
    textinfo: 'text',
    textposition:'inside',      
    marker: {colors:['#FF0000','F44336','#FF6600','#FFFF33','#30CB00','#FFFFFF']},
    hoverinfo: 'text',
    hole: .5,
    type: 'pie',
    showlegend: false
    }];

    var layout = {
    shapes:[{
    type: 'path',
        path: path,
    fillcolor: '080808',
    line: {
        color: '080808'
    }
    }],
    title: `<b> ${value}</b> <br>Current Prices in U.S`,
    height: 400,
    width: 400,
    margin: {
    l: 25, r: 25, b: 25, t: 75
    },
    xaxis: {zeroline:false, showticklabels:false, showgrid: false, range: [-1, 1]},
    yaxis: {zeroline:false, showticklabels:false, showgrid: false, range: [-1, 1]}
    };
    Plotly.newPlot('Gauge', data, layout);   

    }
   
// Event listener attached
function optionChanged(newData){
    UpdateData(newData);
   
}  


init()


  