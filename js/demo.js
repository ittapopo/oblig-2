//write to console start
function helloConsole() {
console.log("Hello");
}
// write to console end

//Google Map start
function initialize() {
   var locations = [
     ['Bryggen ' + 'https://www.visitbergen.com/', 60.397527, 5.322348, 5],
     ['Nordnes', 60.398757, 5.307241, 4],
     ['Nøstet', 60.393923, 5.315309, 3],
     ['Sydnes', 60.38947, 5.318743, 2],
     ['Festplassen', 60.391294, 5.325352, 1]
   ];

   var map = new google.maps.Map(document.getElementById('map'), {
     zoom: 14,
     center: new google.maps.LatLng(60.395025, 5.325094),
     mapTypeId: google.maps.MapTypeId.ROADMAP
   });

   var infowindow = new google.maps.InfoWindow();

   var marker, i;

   for (i = 0; i < locations.length; i++) {
     marker = new google.maps.Marker({
       position: new google.maps.LatLng(locations[i][1], locations[i][2]),
       map: map
     });

     google.maps.event.addListener(marker, 'click', (function(marker, i) {
       return function() {
         infowindow.setContent(locations[i][0]);
         infowindow.open(map, marker);
       }
     })(marker, i));
   }
}
//Google Map end

// Funskjon som innkapsler hele JSON data som et variabel og bruker variabelen til å lage et dynamisk table som henter ut verdier
// fra JSON og lager table basert på hvor mange verdier den henter ut, og til slutt legger det inn i en container
function ToalettJsonToTable() {
        var toaletter = [
            {"herre":"1","tid_sondag":"07.00 - 23.15","pissoir_only":"NULL","stellerom":"NULL","latitude":"60.3879681","tid_hverdag":"07.00 - 23.15","plassering":"NONNESETER TERMINAL, SØR","tid_lordag":"07.00 - 23.15","rullestol":"1","adresse":"Lungegårdskaien","pris":"12","id":"1","place":"NONNESETER TERMINAL, SOUTH","dame":"1","longitude":"5.334608"},{"herre":"1","tid_sondag":"NULL","pissoir_only":"NULL","stellerom":"NULL","latitude":"60.3884988","tid_hverdag":"05.30 - 23.50","plassering":"NONNESETER TERMINAL , NORD","tid_lordag":"07.00 - 23.15","rullestol":"1","adresse":"Østre Strømkai","pris":"12","id":"2","place":"NONNESETER TERMINAL , NORTH","dame":"1","longitude":"5.3345382"},{"herre":"1","tid_sondag":"NULL","pissoir_only":"NULL","stellerom":"NULL","latitude":"60.388868","tid_hverdag":"09.00 - 17.00","plassering":"SKYSS KUNDESENTER","tid_lordag":"09.00 - 15.00","rullestol":"1","adresse":"Østre Strømkai","pris":"12","id":"3","place":"SKYSS CUSTOMER CENTRE","dame":"1","longitude":"5.3337597"},{"herre":"1","tid_sondag":"07.00 - 23.00","pissoir_only":"NULL","stellerom":"NULL","latitude":"60.39041","tid_hverdag":"07.00 - 23.00","plassering":"JERNBANESTASJONEN","tid_lordag":"07.00 - 23.00","rullestol":"NULL","adresse":"Strømgaten 4","pris":"10","id":"4","place":"RAILWAY STATION","dame":"1","longitude":"5.332995"},{"herre":"1","tid_sondag":"08.30 - 22.00","pissoir_only":"NULL","stellerom":"1","latitude":"60.394554","tid_hverdag":"09.00 - 23.00","plassering":"MATHALLEN","tid_lordag":"08.30 - 22.00","rullestol":"1","adresse":"Strandkaien 3","pris":"10","id":"5","place":"FISH MARKET","dame":"1","longitude":"5.324099"},{"herre":"1","tid_sondag":"08.00 - 18.00","pissoir_only":"NULL","stellerom":"","latitude":"60.3951003","tid_hverdag":"08.00 - 18.00","plassering":"STRANDKAITERMINALEN","tid_lordag":"08.00 - 18.00","rullestol":"","adresse":"Strandkaien","pris":"10","id":"6","place":"STRANDKAI BOAT TERMINAL","dame":"1","longitude":"5.3220606"},{"herre":"1","tid_sondag":"NULL","pissoir_only":"NULL","stellerom":"NULL","latitude":"60.3913793","tid_hverdag":"08.00 - 15.00","plassering":"BERGEN KOMMUNE, INNBYGGERSERVICE","tid_lordag":"NULL","rullestol":"1","adresse":"Kaigaten 4","pris":"0","id":"7","place":"CITIZEN SERVICE CENTRE","dame":"1","longitude":"5.3290558"},{"herre":"1","tid_sondag":"NULL","pissoir_only":"NULL","stellerom":"1","latitude":"60.3891105","tid_hverdag":"09.00 - 21.00","plassering":"BERGEN STORSENTER","tid_lordag":"09.00 - 18.00","rullestol":"1","adresse":"Strømgaten 8","pris":"10","id":"8","place":"BERGEN STORSENTER","dame":"1","longitude":"5.3322315"},{"herre":"1","tid_sondag":"NULL","pissoir_only":"NULL","stellerom":"1","latitude":"60.392209","tid_hverdag":"09.00 - 21.00","plassering":"SUNDT MOTEHUS","tid_lordag":"09.00 - 18.00","rullestol":"1","adresse":"Torgallmenningen 14","pris":"10","id":"9","place":"SUNDT FASHION HOUSE","dame":"1","longitude":"5.324011"},{"herre":"1","tid_sondag":"NULL","pissoir_only":"NULL","stellerom":"1","latitude":"60.3927098","tid_hverdag":"09.00 - 20.00","plassering":"XHIBITION","tid_lordag":"09.00 - 18.00","rullestol":"1","adresse":"Småstrandgaten 3","pris":"10","id":"10","place":"XHIBITION","dame":"1","longitude":"5.3262019"},{"herre":"1","tid_sondag":"NULL","pissoir_only":"NULL","stellerom":"1","latitude":"60.3932345","tid_hverdag":"09.00 - 21.00","plassering":"GALLERIET","tid_lordag":"09.00 - 18.00","rullestol":"1","adresse":"Torgallmenningen 8","pris":"10","id":"11","place":"GALLERIET","dame":"1","longitude":"5.3252363"},{"herre":"1","tid_sondag":"NULL","pissoir_only":"NULL","stellerom":"1","latitude":"60.3944194","tid_hverdag":"10.00 - 20.00","plassering":"KLØVERHUSET","tid_lordag":"10.00 - 18.00","rullestol":"1","adresse":"Strandgaten 13 -15","pris":"10","id":"12","place":"KLØVERHUSET","dame":"1","longitude":"5.3205649"},{"herre":"1","tid_sondag":"09.00 - 18.00","pissoir_only":"NULL","stellerom":"NULL","latitude":"60.3975913","tid_hverdag":"09.00 - 18.00","plassering":"BRYGGEN BESØKSSENTER","tid_lordag":"09.00 - 18.00","rullestol":"1","adresse":"Jacobsfjorden, Bryggen","pris":"10","id":"13","place":"BRYGGEN VISITOR CENTRE","dame":"1","longitude":"5.3244317"},{"herre":"NULL","tid_sondag":"ALL","pissoir_only":"1","stellerom":"NULL","latitude":"60.3973581","tid_hverdag":"ALL","plassering":"C. SUNDTSGT","tid_lordag":"ALL","rullestol":"NULL","adresse":"C. Sundts gt","pris":"NULL","id":"14","place":"C. SUNDTSGT","dame":"NULL","longitude":"5.3132629"}]


        //  Henter ut verdier til HTML header
        // ('herre', 'tid_sondag', 'stellerom', 'pris' osv..)
        var col = [];
        for (var i = 0; i < toaletter.length; i++) {
            for (var key in toaletter[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }

        // Lager et table dynamisk
        var table = document.createElement("table");

        //  Lager et HTML table header rekke ved å bruke de verdiene som er hentet ut

        var tr = table.insertRow(-1);                   // Table rekke

        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th");      // TABLE header.
            th.innerHTML = col[i];
            tr.appendChild(th);
        }

        //  Legger til JSON data til table som rekker
        for (var i = 0; i < toaletter.length; i++) {

            tr = table.insertRow(-1);

            for (var j = 0; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = myBooks[i][col[j]];
            }
        }

        //  legger til nylige laget table med JSON data til en container
        var divContainer = document.getElementById("showData");
        divContainer.innerHTML = "";
        divContainer.appendChild(table);
    }
