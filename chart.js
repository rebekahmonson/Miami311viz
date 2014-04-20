<script type="text/javascript">
  window.onload = function () {
    
    var chart11 = new CanvasJS.Chart("11",
    {
      
      title: {
        text: "Top 5 Complaints from Oct. 2013 to March 2014"
           },

      axisX:{
        title: "Types of Complaints",
       labelFontSize: 15,
        titleFontSize: 20,
        labelAngle:-30,
        labelFontColor: "brown"
       },

       axisY: {
        title: "Number of Complaints",
        interval: 5000,
        labelFontSize: 15,
        titleFontSize: 20,
        labelFontColor: "brown" 
       },
      data: [

      {
        dataPoints: [
        { x: 10, y: 26666, label: "Bulk Trash"},
        { x: 20, y: 16387,  label: "GReen Waste Cart Request" },
        { x: 30, y: 5767,  label: "Blue Cart Recycling"},
        { x: 40, y: 5485,  label: "Abandoned Dog"},
        { x: 50, y: 5166,  label: "Dead/Missing Animal"},
        ]
      }
      ]
    });

    chart11.render();
    chart11 = {};

    var chart22 = new CanvasJS.Chart("22",
    {
      
      title: {
        text: "Blue Cart Recycling Complaints from Oct. 2013 to March 2014"
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
        interval: 250,
        labelFontSize: 15,
        titleFontSize: 20,
        labelFontColor: "brown" 
       },
      data: [

      {
        dataPoints: [
        { x: 10, y: 993, label: "Oct. 2013"},
        { x: 20, y: 695,  label: "Nov. 2013" },
        { x: 30, y: 1015,  label: "Dec. 2013"},
        { x: 40, y: 1212,  label: "Jan. 2014"},
        { x: 50, y: 913,  label: "Feb. 2014"},
        { x: 50, y: 939,  label: "March 2014"}
        ]
      }
      ]
    });

    chart22.render();
    chart22 = {};
  

  } //Close window onload
  </script>