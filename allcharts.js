window.onload = function () {
    var chart = new CanvasJS.Chart("lineContainer",
    {
      
      title: {
        text: "Bulk Trash Complaints from Oct. 2013 to March 2014"
           },

      axisX:{
        // title: "Types of Complaints",
       labelFontSize: 15,
        titleFontSize: 20,
        labelAngle:-30,
        labelFontColor: "brown"
       },

       axisY: {
        title: "Number of Complaints",
        interval: 1000,
        labelFontSize: 15,
        titleFontSize: 20,
        labelFontColor: "brown" 
       },
      data: [

      {
        dataPoints: [
        { x: 10, y: 5822, label: "Oct. 2013"},
        { x: 20, y: 4160,  label: "Nov. 2013" },
        { x: 30, y: 4406,  label: "Dec. 2013"},
        { x: 40, y: 3814,  label: "Jan. 2014"},
        { x: 50, y: 3868,  label: "Feb. 2014"},
        { x: 50, y: 4596,  label: "March 2014"}
        ]
      }
      ]
    });

    chart.render();
  }


   window.onload = function () {
    var chart = new CanvasJS.Chart("chartContainer2",
    {
      
      title: {
        text: "Green Waste Cart Requests from Oct. 2013 to March 2014"
           },

      axisX:{
        // title: "Types of Complaints",
       labelFontSize: 15,
        titleFontSize: 20,
        labelAngle:-30,
        labelFontColor: "brown"
       },

       axisY: {
        title: "Number of Complaints",
        interval: 500,
        labelFontSize: 15,
        titleFontSize: 20,
        labelFontColor: "brown" 
       },
      data: [

      {
        dataPoints: [
        { x: 10, y: 2877, label: "Oct. 2013"},
        { x: 20, y: 2324,  label: "Nov. 2013" },
        { x: 30, y: 2690,  label: "Dec. 2013"},
        { x: 40, y: 2907,  label: "Jan. 2014"},
        { x: 50, y: 2725,  label: "Feb. 2014"},
        { x: 50, y: 2864,  label: "March 2014"}
        ]
      }
      ]
    });

    chart.render();
  }