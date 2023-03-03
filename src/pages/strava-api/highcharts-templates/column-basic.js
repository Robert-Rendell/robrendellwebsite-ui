export default {
  seriesDataTemplate: function (name, y) {
    return { name: name, data: y };
  },
  template: {
    chart: {
      type: "column",
    },
    credits: {
      enabled: false,
    },
    title: {
      text: "",
    },
    xAxis: {
      type: "category",
    },
    legend: {
      enabled: false,
    },
    series: [
      {
        name: "Browsers",
        colorByPoint: true,
        data: [
          {
            name: "Chrome",
            y: 62.74,
            drilldown: "Chrome",
          },
          {
            name: "Firefox",
            y: 10.57,
            drilldown: "Firefox",
          },
          {
            name: "Internet Explorer",
            y: 7.23,
            drilldown: "Internet Explorer",
          },
          {
            name: "Safari",
            y: 5.58,
            drilldown: "Safari",
          },
          {
            name: "Edge",
            y: 4.02,
            drilldown: "Edge",
          },
          {
            name: "Opera",
            y: 1.92,
            drilldown: "Opera",
          },
          {
            name: "Other",
            y: 7.62,
            drilldown: null,
          },
        ],
      },
    ],
  },
};
