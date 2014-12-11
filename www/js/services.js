angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Tournaments', function($http) {
  // Might use a resource here that returns a JSON array
  //get API Data
    console.log("sending http req");
        
    var tournaments = {}

    

    $http.get('http://cricket.api.playitgame.com/v1/?category=tournament&action=get-future-tournaments&page=0&limit=10').
    success(function(data, status, headers, config) {
      $scope.posts = data;
    }).
    error(function(data, status, headers, config) {
      // log error
      console.log("Error " + data + "|" + status)
    });
    //

  // Some fake testing data
  var tournaments = {
   "error_code": 0,
   "error_message": "",
   "data": {
      "tournament_list":       [
                  {
            "tournament_id": "5004",
            "tournament_name": "2014/15 Sri Lanka v England [ODI]",
            "tournament_type_id": "4",
            "tournament_type": "INTERNATIONAL",
            "status": "N",
            "country_id": "8",
            "date_start": "2014-11-26",
            "date_end": "2014-12-16",
            "total_teams": "2",
            "has_table": "0"
         },
                  {
            "tournament_id": "5008",
            "tournament_name": "2014/15 Australia v India",
            "tournament_type_id": "4",
            "tournament_type": "INTERNATIONAL",
            "status": "N",
            "country_id": "3",
            "date_start": "2014-12-04",
            "date_end": "2015-01-07",
            "total_teams": "2",
            "has_table": "0"
         },
                  {
            "tournament_id": "2988",
            "tournament_name": "2014/15 Pakistan v New Zealand (in UAE) [ODI]",
            "tournament_type_id": "4",
            "tournament_type": "INTERNATIONAL",
            "status": "N",
            "country_id": "5",
            "date_start": "2014-12-08",
            "date_end": "2014-12-19",
            "total_teams": "2",
            "has_table": "0"
         },
                  {
            "tournament_id": "2969",
            "tournament_name": "2014/15 South Africa v West Indies",
            "tournament_type_id": "4",
            "tournament_type": "INTERNATIONAL",
            "status": "N",
            "country_id": "4",
            "date_start": "2014-12-17",
            "date_end": "2015-01-06",
            "total_teams": "2",
            "has_table": "0"
         },
                  {
            "tournament_id": "5026",
            "tournament_name": "2014/15 KFC Big Bash League",
            "tournament_type_id": "20",
            "tournament_type": "LOCAL",
            "status": "N",
            "country_id": "3",
            "date_start": "2014-12-18",
            "date_end": "2015-01-28",
            "total_teams": "8",
            "has_table": "0"
         },
                  {
            "tournament_id": "5001",
            "tournament_name": "2014/15 New Zealand v Sri Lanka",
            "tournament_type_id": "4",
            "tournament_type": "INTERNATIONAL",
            "status": "N",
            "country_id": "12",
            "date_start": "2014-12-26",
            "date_end": "2015-01-07",
            "total_teams": "2",
            "has_table": "0"
         },
                  {
            "tournament_id": "2970",
            "tournament_name": "2014/15 South Africa v West Indies [T20I]",
            "tournament_type_id": "4",
            "tournament_type": "INTERNATIONAL",
            "status": "N",
            "country_id": "4",
            "date_start": "2015-01-09",
            "date_end": "2015-01-11",
            "total_teams": "2",
            "has_table": "0"
         },
                  {
            "tournament_id": "5002",
            "tournament_name": "2014/15 New Zealand v Sri Lanka [ODI]",
            "tournament_type_id": "4",
            "tournament_type": "INTERNATIONAL",
            "status": "N",
            "country_id": "12",
            "date_start": "2015-01-11",
            "date_end": "2015-01-29",
            "total_teams": "2",
            "has_table": "0"
         },
                  {
            "tournament_id": "2971",
            "tournament_name": "2014/15 South Africa v West Indies [ODI]",
            "tournament_type_id": "4",
            "tournament_type": "INTERNATIONAL",
            "status": "N",
            "country_id": "4",
            "date_start": "2015-01-16",
            "date_end": "2015-01-28",
            "total_teams": "2",
            "has_table": "0"
         },
                  {
            "tournament_id": "5012",
            "tournament_name": "2014/15 Carlton Mid Tri Series (AUS, ENG, IND",
            "tournament_type_id": "4",
            "tournament_type": "INTERNATIONAL",
            "status": "N",
            "country_id": "3",
            "date_start": "2015-01-16",
            "date_end": "2015-02-01",
            "total_teams": "3",
            "has_table": "0"
         }
      ],
      "next_page": true
   }};

   var tList = tournaments.data.tournament_list;
   var min_date=new Date(3000,1,1); var max_date=new Date(1900,1,1);
   for(var n in tList){
    var start_date = new Date(tList[n].date_start);
    var end_date = new Date(tList[n].date_end);
    min_date = new Date(Math.min(min_date, start_date));
    max_date = new Date(Math.max(max_date, end_date));
    //console.log(n+"Min:: "+ min_date + " | " + "Max:: "+max_date);
  }

  var dateArray = [];
  //generate all days
  while(min_date<=max_date){
    dateArray.push(new Date(min_date));
    min_date.setDate(min_date.getDate() + 1);

    //console.log("MIN>>"+min_date)
  }
  
  //console.log("Date Array: \n"+dateArray.join("\n"));


  return {
    all: function() {
      return tournaments.data.tournament_list;
    },
    get: function(id) {
      // Simple index lookup
      return tournaments.data.tournament_list[id];
    },
    getDays: function(){
      return dateArray;
    },
    getTournamentDuring:function (date) {
      var matchingTournaments
    }
  }
});

function dateFormatter(strDate){
  return new Date(strDate);
}
