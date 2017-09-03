How do I get the information about the selected node in the Google Charts Org Chart widget  using AngularJS?﻿
REPLY



sourav mondal
sourav mondal
2 months ago
google.visualization.events.addListener(orgchart, 'select', function() {
  var selected = orgchart.getSelection();
});﻿
REPLY
1



lực đào kim
lực đào kim
2 months ago (edited)
ReferenceError: orgChart is not defined﻿
REPLY



sourav mondal
sourav mondal
2 months ago
what is your chart object name? here you have to pass the same name. like if your chart object name is "chart" then the code should be 

google.visualization.events.addListener(chart, 'select', function() {
  var selected = chart.getSelection();
});

replace orgchart with your chart object.﻿
Show less
REPLY
1



lực đào kim
lực đào kim
2 months ago
chart object name is "chart". But i want get value "Tiltle" as your example when a user clicks on a node﻿
REPLY



lực đào kim
lực đào kim
2 months ago
chart object name is "chart". But i want get value "Tiltle" as your example when a user clicks on a node﻿
REPLY



sourav mondal
sourav mondal
2 months ago
Update the orgChart directive 
-------------------------------------------------------

app.directive('orgChart', function () {
    function link($scope, element, attrs) {
        var chart = new google.visualization.OrgChart(element[0]);
        $scope.$watch('chartData', function (value, oldvalue) {
            if (!value || value.length == 1) {
                return;
            }
            var data = google.visualization.arrayToDataTable(value);
            var options = {
                'title': '',
                'allowHtml': true
            }
            
            chart.draw(data, options);
            google.visualization.events.addListener(chart, 'select', function () {
                var title = data.getValue(chart.getSelection()[0].row, 2);
                alert(title);
            });
        })
    }
    return {
        link: link
    };
})﻿
Show less
REPLY
1



lực đào kim
lực đào kim
2 months ago
Thanks very much, I got it now﻿
REPLY



lực đào kim
lực đào kim
2 months ago
How can I change the style with CSS?﻿




