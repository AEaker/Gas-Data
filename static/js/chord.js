const dataSource = {
    chart: {
      caption: "U.S. Export/Imports of Crude Oil and Petroleum Products (Thousand Barrels) ",
      subcaption: "in Jul 2020 ",
      nodelabelposition: "outside",
      showlegend: 0,
      theme: "fusion",
      mode: "post",
      linkcolorbydominance: "1",
      animation: "0"
    },
    nodes: [
    {
        label: "India"
      },
      {
        label: "USA"
      },
      {
        label: "CHINA"
      },
      {
        label: "UAE"
      },
      {
        label: "JAPAN"
      },
      {
        label: "SOUTH KOREA"
      },
      {
        label: "CANADA"
      },
      {
        label: "UK"
      },
      {
        label: "SAUDI ARABIA"
      },
      {
          label: "COLOMBIA"
      },
      {
          label: "RUSSIA"
      },
      {
          label: "MEXICO"
      },
  
    ],
    links: [
    {
        from: "INDIA",
        to: "USA",
        value: 3486
      },
      {
        from: "USA",
        to: "INDIA",
        value: 10710
      },
      {
        from: "USA",
        to: "CHINA",
        value: 26395
      },
      {
        from: "CHINA",
        to: "USA",
        value: 4
      },
      {
        from: "USA",
        to: "UAE",
        value: 771
      },
      {
        from: "UAE",
        to: "USA",
        value: 907
      },
      {
        from: "CANADA",
        to: "USA",
        value: 123425
      },
      {
        from: "USA",
        to: "CANADA",
        value: 27720
      },
      {
        from: "USA",
        to: "UK",
        value: 12142
      },
      {
        from: "UK",
        to: "USA",
        value: 2598
      },
      {
        from: "USA",
        to: "SAUDI ARABIA",
        value: 16
      },
      {
        from: "SAUDI ARABIA",
        to: "USA",
        value: 22271
      },
      {
        from: "USA",
        to: "JAPAN",
        value: 20556
      },
      {
        from: "JAPAN",
        to: "USA",
        value: 673
      },
      {
        from: "USA",
        to: "SOUTH KOREA",
        value: 12686
      },
      {
        from: "SOUTH KOREA",
        to: "USA",
        value: 3427
      },
      {
        from: "COLOMBIA",
        to: "USA",
        value: 10275
      },
      {
        from: "USA",
        to: "COLOMBIA",
        value: 1634
      },
      {
        from: "RUSSIA",
        to: "USA",
        value: 17460
      },
      {
        from: "USA",
        to: "RUSSIA",
        value: 4
      },
      {
        from: "USA",
        to: "MEXICO",
        value: 30220
      },
      {
        from: "MEXICO",
        to: "USA",
        value: 23417
      },
      
      
  
    ]
  };
  
  FusionCharts.ready(function() {
    var myChart = new FusionCharts({
      type: "chord",
      renderAt: "chart-container",
      width: "100%",
      height: "100%",
      dataFormat: "json",
      dataSource
    }).render();
  });