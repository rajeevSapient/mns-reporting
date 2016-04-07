var app = angular.module("weeklyReports", []);
app.controller("reportsCtrl", function($scope) {
    console.log("hey there!");

    $scope.incidentData =
        [
             {
                "name" : "Weekly Report",
                "day1" : "21-Feb-16",
                "day2" : "28-Feb-16",
                "day3" : "6-Mar-16",
                "day4" : "13-Mar-16",
                "day5" : "20-Mar-16",
                "day6" : "27-Mar-16"
            },
            {
                "name" : "Overall",
                "day1" : "Green",
                "day2" : "Green",
                "day3" : "Green",
                "day4" : "Green",
                "day5" : "Green",
                "day6" : "Green"
            },
            {
                "name" : "Incidents",
                "day1" : 69,
                "day2" : 82,
                "day3" : 87,
                "day4" : 53,
                "day5" : 68,
                "day6" : 69
            },
            {
                "name" : "Problem Records",
                "day1" : 1,
                "day2" : 5,
                "day3" : 0,
                "day4" : 3,
                "day5" : 2,
                "day6" : 2
            }
        ]
    $scope.slaView =
        [
             {
                "name" : "Incident",
                "sla" : "SLA",
                "reported" : "Reported",
                "acheived" : "Acheived",
                "breached" : "Breached"
            },
            {
                "name" : "Sev 1",
                "sla" : "4 hours",
                "reported" : "0",
                "acheived" : "0",
                "breached" : "0"
            },
            {
                "name" : "Sev 2",
                "sla" : "8 hours",
                "reported" : "1",
                "acheived" : "1",
                "breached" : "0"
            },
            {
                "name" : "Sev3/4",
                "sla" : "NA",
                "reported" : "68",
                "acheived" : "NA",
                "breached" : "NA"
            }
        ]

    $scope.incidentSummary =
        [
            {
                "totalIncidents":"Total Incidents",
                "activeIncidents":"Active Incidents",
                "nonActiveIncidents":"Non-Active Incidents"

            },
            {
                "totalIncidents":9336,
                "activeIncidents":29,
                "nonActiveIncidents":9307
            }
        ]
});
