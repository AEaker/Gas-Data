FusionCharts.ready(function() {
    var VehicleRegistrationsChart = new FusionCharts({
        type: 'bar2d',
      renderAt: 'Vehicle',
      width: '800',
      height: '1000',
     baseFontSize: "20",
     baseFontColor:	"#000000",
     baseFontWeight:"150",
      dataFormat: 'json',
      dataSource: {
        "chart": {
          "caption": "US Automobile Registrations by State",
          "captionFontColor": "#3254c",
          "captionFontBold": "1",  
          "subCaption": "2018",
          "yAxisName": "Number of Automobiles Registered",
          "yAxisNameFontColor": "#03254c",
          "yAxisNameFontBold": "1",
          "xAxisNameFontColor": "#000000",
          "xAxisNameFontBold": "1",
          "palettecolors": "#03254c",
          "chartLeftMargin": "10",
            // "chartTopMargin": "40", 
            "labelFontBold":"1",
            "labelFontColor":"#3254c",
          "alignCaptionWithCanvas": "0",
          "yAxisPosition": "top",
          //Background image properties
          "bgImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQ_vH-HyoaE9fiUcXWZVp3QUQ4GhW9rnLlHA&usqp=CAU",
          "bgImageAlpha": "60",
          "bgImageDisplayMode": "stretch",
          //Theme
          "theme": "fusion"
        },
        "data": [{
          "label": "California",
          "value": "15065827"
        }, {
          "label": "Texas",
          "value": "8248322"
        }, {
          "label": "Florida",
          "value": "7966091"
        },
        {
            "label": "New York",
            "value": "4712779"
          },
          {
            "label": "Ohio",
            "value": "4603594"
          },
          {
            "label": "Illinois",
            "value": "4477763"
          },
          {
            "label": "Pennsylvania",
            "value": "4424183"
          },
          {
            "label": "Georgia",
            "value": "3557469"
          },
          {
            "label": "North Carolina",
            "value": "3393781"
          },
          {
            "label": "Virginia",
            "value": "3267735"
          },
          {
            "label": "Michigan",
            "value": "3023940"
          },
          {
            "label": "Washington",
            "value": "2964939"
          },
          {
            "label": "New Jersey",
            "value": "2754253"
          },
          {
            "label": "Arizona",
            "value": "2391772"
          },
          {
            "label": "Tennessee",
            "value": "2285329"
          },
          {
            "label": "Indiana",
            "value": "2248870"
          },
          {
            "label": "Massachussetts",
            "value": "2182530"
          },
          {
            "label": "Alabama",
            "value": "2161212"
          },
          {
            "label": "Missouri",
            "value": "2102216"
          },
          {
            "label": "Wisconsin",
            "value": "2087518"
          },
          {
            "label": "Minnesota",
            "value": "1976525"
          },
          {
            "label": "Maryland",
            "value": "1922463"
          },
          {
            "label": "South Carolina",
            "value": "1830186"
          },
          {
            "label": "Colorado",
            "value": "1798177"
          },
          {
            "label": "Kentucky",
            "value": "1721942"
          },
          {
            "label": "Oregon",
            "value": "1488623"
          },
          {
            "label": "Louisiana",
            "value": "1389249"
          },
          {
            "label": "Connecticut",
            "value": "1306709"
          },
          {
            "label": "Oklahoma",
            "value": "1296219"
          },
          {
            "label": "Iowa",
            "value": "1242219"
          },
          {
            "label": "Nevada",
            "value": "1073760"
          },
          {
            "label": "Kansas",
            "value": "975171"
          },
          {
            "label": "Utah",
            "value": "937421"
          },
          {
            "label": "Arkansas",
            "value": "921161"
          },
          {
            "label": "Mississippi",
            "value": "825338"
          },
          {
            "label": "Nebraska",
            "value": "683020"
          },
          {
            "label": "New Mexico",
            "value": "655766"
          },
          {
            "label": "Idaho",
            "value": "598774"
          },
          {
            "label": "West Virginia",
            "value": "560118"
          },
          {
            "label": "Hawaii",
            "value": "509492"
          },
          {
            "label": "New Hampshire",
            "value": "506959"
          },
          {
            "label": "Montana",
            "value": "452845"
          },
          {
            "label": "Delware",
            "value": "433363"
          },
          {
            "label": "Rhode Island",
            "value": "412255"
          },
          {
            "label": "Maine",
            "value": "390506"
          },
          {
            "label": "South Dakota",
            "value": "358859"
          },
          {
            "label": "Vermont",
            "value": "240048"
          },
          {
            "label": "Dist. of Col.",
            "value": "209723"
          },
          {
            "label": "Wyoming",
            "value": "203546"
          },
          {
            "label": "Alaska",
            "value": "183270"
          },
    ]
      }
    }).render();
  });
  