/**
 * Created by Dylan on 13-Sep-15.
 */

$.ajax({
    dataType: "jsonp",
    url: 'http://census.psarchives.com/outfit?id=37512545478648131'
}).done(function (data) {
    var kills = 0;
    var deaths = 0;

    data.query.members.forEach(function (member) {
        kills += member.stat_kills;
        deaths += member.stat_deaths;
    });

    console.log('Ave Kills: ' + kills / data.query.members.length);
    console.log('Ave Deaths: ' + deaths / data.query.members.length);
});