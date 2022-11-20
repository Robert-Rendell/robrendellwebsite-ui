export const IndianBeliefsPieChart = {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: "pie",
  },
  title: {
    text: "Indian Beliefs: Census 2011",
  },
  tooltip: {
    pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
  },
  accessibility: {
    point: {
      valueSuffix: "%",
    },
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: "pointer",
      dataLabels: {
        enabled: true,
        format: "<b>{point.name}</b>: {point.percentage:.1f} %",
      },
    },
  },
  series: [
    {
      name: "Percentage Population",
      colorByPoint: true,
      data: [
        {
          name: "Hinduism",
          y: 79.8,
          sliced: true,
          selected: true,
        },
        {
          name: "Islam",
          y: 14.2,
        },
        {
          name: "Christianity",
          y: 2.3,
        },
        {
          name: "Sikhism",
          y: 1.7,
        },
        {
          name: "Buddhism",
          y: 0.7,
        },
        {
          name: "Other",
          y: 1.3,
        },
      ],
    },
  ],
};
