
var Dates = HistoricalData.Dates;
var Months = HistoricalData.Months;
var NE = HistoricalData.NEPrices;
var CA = HistoricalData.CAPrices;
var LA = HistoricalData.LAPrices;
var MW = HistoricalData.MWPrices;
var GF = HistoricalData.GFPrices;
var RM = HistoricalData.RMPrices;
var WC = HistoricalData.WCPrices;
var NoCA = HistoricalData.NoCAPrices;

console.log(Dates);
console.log('---------------');
console.log(NE);
console.log('---------------');
console.log(CA);
console.log('---------------');
console.log(LA);
console.log('---------------');
console.log(MW);
console.log('---------------');
console.log(GF);
console.log('---------------');
console.log(RM);
console.log('---------------');
console.log(WC);
console.log('---------------');
console.log(NoCA);
console.log('---------------');
console.log('---------------');




// var ctx = document.getElementById('myChart').getContext('2d');
// var stackedLine = new Chart(ctx, {
//     type: 'line',
//     data: {
//         labels: Dates,
//         datasets:[{
//             label: "New England Prices",
//             data: NE,
//             backgroundColor: 'rgba(18, 78, 120, 0.7)',
//             borderColor: 'rgba(18, 78, 120, 1)',
//             fill: true},
//                {
//              label: "Central Atlantic Prices",
//               data: CA,
//               backgroundColor: 'rgba(208, 165, 192, 0.7)',
//               borderColor: 'rgba(208, 165, 192, 1)',
//               fill: true},
//                {
//              label: "Lower Atlantic Prices",
//               data: LA,
//               backgroundColor: 'rgba(233, 138, 21, 0.7)',
//               borderColor: 'rgba(233, 138, 21, 1)',
//               fill: true},
//                {
//              label: "Midwest Prices",
//               data: MW,
//               backgroundColor: 'rgba(229, 244, 227, 0.7)',
//               borderColor: 'rgba(229, 244, 227, 1)',
//               fill: true},

//                {
//              label: "Gulf Coast Prices",
//               data: GF,
//               backgroundColor: 'rgba(118, 190, 208, 0.7)',
//               borderColor:'rgba(118, 190, 208, 1)',
//               fill: true},
        
//                {
//              label: "Rocky Mountain Prices",
//               data: RM,
//               backgroundColor: 'rgba(49, 123, 34, 0.7)',
//               borderColor: 'rgba(49, 123, 34, 1)',
//               fill: true},

//                {
//              label: "West Coast Prices",
//               data: WC,
//               backgroundColor: 'rgba(165, 36, 61, 0.7)',
//               borderColor: 'rgba(247, 240, 82 1)',
//               fill: true},
//                {
//              label: "West-No Cali Prices",
//               data: NoCA,
//               backgroundColor: 'rgba(128, 78, 73, .7)',
//               borderColor: 'rgba(128, 78, 73, 1)',
//               fill: true}
//                     ],

//     options: {
//       plugins:{
//           filler: {
//             propagate: true
//           }
//       },
//       responsive: true,

//         scales:{
//             x: {
//               scaleLabel: {
//                 display: true,
//                 labelString: "Date",
//                 fontColor: '#000000'
//               }
//             },
//             y:{
//               stacked:true,
//               scaleLabel:{
//                   display: true,
//                   labelString: 'Price',
//                   fontColor: '#000000' 
//               }
//             },
//             xAxes: {
//               scaleLabel: {
//                 display: true,
//                 labelString: "Date",
//                 fontColor: '#000000'
//               }
//             },
//             yAxes:{
//               stacked:true,
//               scaleLabel:{
//                   display: true,
//                   labelString: 'Price',
//                   fontColor: '#000000' 
//               }
//             }
//           },
//         legend: {
//             display: true
//                   },
//         title: {
//             display: true,
//             text: "Historical Regular Gasoline Prices"}
    
//               }
          
//             }});

// var ctx = document.getElementById('myChart').getContext('2d');
// var stackedBar = new Chart(ctx, {
//   type: 'bar',
//   data: {
//             labels: Dates,
//             datasets:[{
//                 label: "New England Prices",
//                 data: NE,
//                 backgroundColor: 'rgba(18, 78, 120, 0.7)',
//                 borderColor: 'rgba(18, 78, 120, 1)',
//                 fill: true},
//                    {
//                  label: "Central Atlantic Prices",
//                   data: CA,
//                   backgroundColor: 'rgba(208, 165, 192, 0.7)',
//                   borderColor: 'rgba(208, 165, 192, 1)',
//                   fill: true},
//                    {
//                  label: "Lower Atlantic Prices",
//                   data: LA,
//                   backgroundColor: 'rgba(233, 138, 21, 0.7)',
//                   borderColor: 'rgba(233, 138, 21, 1)',
//                   fill: true},
//                    {
//                  label: "Midwest Prices",
//                   data: MW,
//                   backgroundColor: 'rgba(229, 244, 227, 0.7)',
//                   borderColor: 'rgba(229, 244, 227, 1)',
//                   fill: true},
    
//                    {
//                  label: "Gulf Coast Prices",
//                   data: GF,
//                   backgroundColor: 'rgba(118, 190, 208, 0.7)',
//                   borderColor:"rgba(118, 190, 208, 1)",
//                   fill: true},
            
//                    {
//                  label: "Rocky Mountain Prices",
//                   data: RM,
//                   backgroundColor: 'rgba(49, 123, 34, 0.7)',
//                   borderColor: "rgba(49, 123, 34, 1)",
//                   fill: true},
    
//                    {
//                  label: "West Coast Prices",
//                   data: WC,
//                   backgroundColor: 'rgba(165, 36, 61, 0.7)',
//                   borderColor: 'rgba(247, 240, 82 1)',
//                   fill: true},
//                    {
//                  label: "West-No Cali Prices",
//                   data: NoCA,
//                   backgroundColor: 'rgba(128, 78, 73, .7)',
//                   borderColor: 'rgba(128, 78, 73, 1)',
//                   fill: true}
//                         ],
    
//   options: {
//             title: {
//             display: true,
//             text: "Historical Regular Gasoline Prices"},
//       scales: {
//           xAxes: [{
//               stacked: true
//                   }],
//           yAxes: [{
//               stacked: true
//                   }]
//               }
//            }
//         }
//       });


// let chartConfig = {
//   type: 'bar',
//   theme: 'classic',
//   backgroundColor: '#ffffff',
//   stacked: true,
//   title: {
//     text: 'Historical Gas Price',
//     backgroundColor: 'none',
//     fontFamily: 'arial',
//     fontSize: '20px',
//     fontWeight: 'normal',
//     textAlign: 'left'
//   },
//   legend: {
//     align: 'center',
//     margin: '5% auto auto auto',
//     backgroundColor: '#8a8a8a',
//     borderColor: '#000000',
//     fontFamily: 'arial',
//     fontSize: '10px',
//     item: {
//       fontColor: '#ffffff',
//       markerStyle: 'match'
//     },
//     layout: 'float',
//     toggleAction: 'remove'
//   },
//   plot: {
//     tooltipText: '%t: %v',
//     activeArea: true,
//     animation: {
//       delay: 500,
//       effect: 'ANIMATION_EXPAND_BOTTOM',
//       speed: 600
//     },
//     shadow: false
//   },
//   plotarea: {
//     margin: '4% 8% 14% 12%'
//   },
//   scaleX: {
//     values: Dates,
//     guide: {
//       lineColor: '#808080',
//       lineStyle: 'solid'
//     },
//     item: {
//       fontColor: '#808080',
//       fontFamily: 'arial',
//       fontSize: '12px',
//       fontWeight: 'normal',
//       offsetY: '5%'
//     },
//     lineColor: '#808080',
//     lineStyle: 'solid',
//     lineWidth: '1px',
//     tick: {
//       lineColor: '#808080',
//       lineWidth: '1px'
//     }
//   },
//   scaleY: {
//     values: '1:5:.5',
//     format: '$%v',
//     guide: {
//       alpha: 0.1,
//       lineColor: '#808080',
//       lineStyle: 'solid'
//     },
//     item: {
//       fontColor: '#808080',
//       fontFamily: 'arial',
//       fontSize: '12px',
//       fontWeight: 'normal',
//       offsetX: '-5%'
//     },
//     lineColor: '#808080',
//     lineWidth: '1px',
//     tick: {
//       lineColor: '#808080',
//       lineWidth: '1px'
//     }
//   },
//   crosshairX: {
//     lineColor: '#FFFFFF',
//     lineWidth: '2px',
//     marker: {
//       visible: false
//     },
//     offsetY: '10%',
//     plotLabel: {
//       text: '<strong>%t</strong>: $%v ',
//       fontColor: '#000000',
//       fontFamily: 'arial'
//     },
//     scaleLabel: {
//       backgroundTransparent: true,
//       offsetY: '5%'
//     }
//   },
//   tooltip: {
//     visible: false
//   },
//   series: [
//     {
//       text: 'New England Prices',
//       values: NE,
//       stack: 1,
//       backgroundColor: '#a23e48',
//       lineColor: '#a23e48',
//       lineWidth: '2px',
//       marker: {
//         type: 'circle',
//         backgroundColor: '#a23e48',
//         borderColor: '#a23e48',
//         borderWidth: '0px',
//         shadow: false,
//         size: '4px'
//       }
//     },
//     {
//       text: 'Central Atlantic Prices',
//       values: CA,
//       stack: 1,
//       backgroundColor: '#fff275',
//       lineColor: '#fff275',
//       lineWidth: '2px',
//       marker: {
//         type: 'circle',
//         backgroundColor: '#fff275',
//         borderColor: '#fff275',
//         borderWidth: '0px',
//         shadow: false,
//         size: '4px'
//       }
//     },
//     {
//       text: 'Lower Atlantic Prices',
//       values: LA,
//       stack: 1,
//       backgroundColor: '#9bc1bc',
//       lineColor: '#9bc1bc',
//       lineWidth: '2px',
//       marker: {
//         type: 'circle',
//         backgroundColor: '#9bc1bc',
//         borderColor: '#9bc1bc',
//         borderWidth: '0px',
//         shadow: false,
//         size: '4px'
//       }
//     },
//     {
//       text: 'Midwest Prices',
//       values: MW,
//       stack: 2,
//       backgroundColor: '#e3a587',
//       lineColor: '#e3a587',
//       lineWidth: '2px',
//       marker: {
//         type: 'circle',
//         backgroundColor: '#e3a587',
//         borderColor: '#e3a587',
//         borderWidth: '0px',
//         shadow: false,
//         size: '4px'
//       }
//     },
//     {
//       text: 'Gulf Coast Prices',
//       values: GF,
//       stack: 2,
//       backgroundColor: '#8b80f9',
//       lineColor: '#8b80f9',
//       lineWidth: '2px',
//       marker: {
//         type: 'circle',
//         backgroundColor: '#8b80f9',
//         borderColor: '#8b80f9',
//         borderWidth: '0px',
//         shadow: false,
//         size: '4px'
//       }
//     },
//     {
//       text: 'Rocky Mountain Prices',
//       values: RM,
//       stack: 2,
//       backgroundColor: '#5d576b',
//       lineColor: '#5d576b',
//       lineWidth: '2px',
//       marker: {
//         type: 'circle',
//         backgroundColor: '#5d576b',
//         borderColor: '#5d576b',
//         borderWidth: '0px',
//         shadow: false,
//         size: '4px'
//       }
//     },
//     {
//       text: 'West Coast Prices',
//       values: WC,
//       stack: 3,
//       backgroundColor: '#FF8C42',
//       lineColor: '#FF8C42',
//       lineWidth: '2px',
//       marker: {
//         type: 'circle',
//         backgroundColor: '#FF8C42',
//         borderColor: '#FF8C42',
//         borderWidth: '0px',
//         shadow: false,
//         size: '4px'
//       }
//     },
//     {
//       text: 'West-No Cali Prices',
//       values: NoCA,
//       stack: 3,
//       backgroundColor: '#ffc4eb',
//       lineColor: '#ffc4eb',
//       lineWidth: '2px',
//       marker: {
//         type: 'circle',
//         backgroundColor: '#ffc4eb',
//         borderColor: '#ffc4eb',
//         borderWidth: '0px',
//         shadow: false,
//         size: '4px'
//       }
//     }
    
//   ]
// };

// zingchart.render({
//   id: 'myChart',
//   data: chartConfig,
//   height: '100%',
//   width: '100%'
// });

let chartConfig = {plotarea:{margin: 'dynamic'},
  type: 'line',
  preview:{adjustLayout: true

  },
  // "plotarea":{"background-color":"#c7cbcb"},
  globals: {
    fontFamily: 'Poppins',
    fontColor: '#333'
  },
  "plotarea":{backgroundColor:"#7E7E7E"},
  title: {
    text: 'Historical Regular Gasoline Prices',
    align: 'center',
    padding: '5px'
  },
  
  legend: {
      'draggable': true, 
        align: 'center',
        margin: '5% auto auto auto',
        backgroundColor: '#8a8a8a',
        borderColor: '#000000',
        fontFamily: 'arial',
        fontSize: '16px',
        item: {
          fontColor: '#ffffff',
          markerStyle: 'match'
        },
        layout: 'float',
        toggleAction: 'remove'
      },
 
  'scale-x': {zooming:true,
    values: Months,
    'max-items':6,
    'items-overlap': false,
    "line-color": '#000000',
    "label":{
      "text":"Date",
      width: "20%",
      "font-size":22,
      'max-items':6,
    },
    "item":{angle: 310,
      "font-size":16,
      padding: "5%"
    },


  },
  'scale-y': {zooming: true,
    values: '0:5:.5',
    format: "$%v",
    "line-color": '#000000',
    "label":{
      "text":"Price",
      width: "40%",
      "font-size":22
    },
    "item":{
      padding: ".5%"}
  },
  // crosshairX: {
  //       lineColor: '#000000',
  //       lineWidth: '2px',
  //       backgroundColor:'#eeeeee',
  //       marker: {
  //         visible: false
  //       },
  //       offsetY: '10%',
  //       plotLabel: {
  //         text: '<strong>%t</strong>: $%v ',
  //         fontColor: '#000000',
  //         fontFamily: 'arial'
  //       },
  //     },
      "crosshair-x": {
        "scale-label": {
          "font-color": "#000000",
          "font-family": "Georgia",
          "font-size": 12,
          "background-color": "#eeeeee",
          "border-width": 1,
          "border-color": "#eeeeee",
          "line-style": "dashdot",
          "border-radius": "10px",
          "padding": "10%"
        },
       },

  series: [
    {
      values: NE,
      text: 'New England Prices',
      zIndex: 10,
      alphaArea: 1,
      lineColor: '#ff00d9',
      lineWidth: '6px',
      backgroundColor: '#ff00d9',
      marker: {
        size: '2px'
      },
      hoverMarker: {
        size: '10px',
        backgroundColor: '#ff00d9',
        borderColor: '#eee'
      }
    },
    {
      values: CA,
      text: ' Central Atlantic Prices',
      zIndex: 9,
      alphaArea: 1,
      lineColor: '#1f1d1c',
      lineWidth: '6px',
      backgroundColor: '#1f1d1c',
      marker: {
        size: '2px'
      },
      hoverMarker: {
        size: '10px',
        backgroundColor: '##1f1d1c',
        borderColor: '#eee'
      }
    },
    {
      values: LA,
      text: 'Lower Atlantic Prices',
      zIndex: 8,
      alphaArea: 1,
      lineColor: '#B2DC93',
      lineWidth: '6px',
      backgroundColor: '#B2DC93',
      marker: {
        size: '2px'
      },
      hoverMarker: {
        size: '10px',
        backgroundColor: '#B2DC93',
        borderColor: '#eee'
      }
    },
    {
      values: MW,
      text: 'Midwest Prices',
      zIndex: 7,
      alphaArea: 1,
      lineColor: '#6b4131',
      lineWidth: '6px',
      backgroundColor: '#6b4131',
      marker: {
        size: '2px'
      },
      hoverMarker: {
        size: '10px',
        backgroundColor: '#6b4131',
        borderColor: '#eee'
      }
    },
    {
      values: GF,
      text: 'Gulf Coast Prices',
      zIndex: 6,
      alphaArea: 1,
      lineColor: '#FF9C85',
      lineWidth: '6px',
      backgroundColor: '#FF9C85',
      marker: {
        size: '2px'
      },
      hoverMarker: {
        size: '10px',
        backgroundColor: '#FF9C85',
        borderColor: '#eee'
      }
    },
    {
      values: RM,
      text: 'Rocky Mountain Prices',
      zIndex: 5,
      alphaArea: 1,
      lineColor: '#7f7eff',
      lineWidth: '6px',
      backgroundColor: '#7f7eff',
      marker: {
        size: '2px'
      },
      hoverMarker: {
        size: '10px',
        backgroundColor: '#7f7eff',
        borderColor: '#eee'
      }
    },
    {
      values: WC,
      text: 'West Coast Prices',
      zIndex: 4,
      alphaArea: 1,
      lineColor: '#00c9b5',
      lineWidth: '6px',
      backgroundColor: '#00c9b5',
      marker: {
        size: '2px'
      },
      hoverMarker: {
        size: '10px',
        backgroundColor: '#00c9b5',
        borderColor: '#eee'
      }
    },
    {
      values: NoCA,
      text: 'West-NoCali Prices',
      zIndex: 3,
      alphaArea: 1,
      lineColor: '#ab0c37',
      lineWidth: '6px',
      backgroundColor: '#ab0c37',
      marker: {
        size: '2px'
      },
      hoverMarker: {
        size: '10px',
        backgroundColor: '#ab0c37',
        borderColor: '#eee'
      }
    }
  ]
};

// Render Method
zingchart.render({
  id: 'myChart',
  data: chartConfig,
  height: '100%',
  width: '100%',
});