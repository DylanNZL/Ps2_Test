/**
 * Created by Dylan on 13-Sep-15.
 */

$.ajax({
    dataType: "jsonp",
    url: 'census.psarchives.com/outfit?id=37512545478648131'
}).done(function showNames(data) {
    var newContent = '<table id="outfit_player_data"><tr><th>Player Name</th><th>Battle Rank</th><th>K/D</th><th>Score Per Minute</th><th>Kills Per Hour</th></tr>';
    for (var i = 0; i < 57; i++) { //builds up a table in var newContent
        newContent += '<tr>';
        newContent += '<td>' + members.name + '</td>';
        newContent += '<td>' + members.rank + '</td>';
        newContent += '<td>' + members.stat_kdr + '</td>';
        newContent += '<td>' + members.stat_spm + '</td>';
        newContent += '<td>' + members.kph + '</td>';
        newContent += '</tr>';
    }//end of for loop
    document.getElementById('#players_stats_names').innerHTML = newContent; });