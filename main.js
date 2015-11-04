/**
 * Created by Dylan on 11-Sep-15.
 */
var outfitdetails = (function() {
    var form = document.getElementById('searchbar');
    document.addEventListener('submit', function(e) {
        e.preventDefault();
        var elements = this.elements;
        var outfit = elements.searchTag.value;
    /* var outfit = "fclm";*/
    outfit = outfit.toLowerCase();
    var url1 = "http://census.daybreakgames.com/get/ps2:v2/outfit?alias_lower=" + outfit;
    var url;
    $.ajax({
        url: url1,
        dataType: 'jsonp'
    }).done(function (data) {
        url = "http://census.psarchives.com/outfit?id=" + data.outfit_list[0].outfit_id;
        $.ajax({
            url: url,
            dataType: 'jsonp'
        }).done(function (data) {
            var $list = $('#list');
            $.each(data.members, function (i, member) {
                $list.append($('<tr/>').html('<td>' + member.name + '</td>' + '<td>' + member.rank + '</td>' + '<td>' + member.stat_kdr + '</td>' + '<td>' + member.stat_spm + '</td>' + '<td>' + member.stat_kph + '</td>'));
            });
            var avkills, avdeaths, intdeaths, intsize, intkills;
            var $avgkills = $('#avgkills');
            var $avgdeaths = $('#avgdeaths');
            var $formed = $('#formed');
            intdeaths = numeral().unformat(data.query.deaths);
            intkills = numeral().unformat(data.query.kills);
            intsize = numeral().unformat(data.query.size);
            avkills = intkills / intsize;
            avdeaths = intdeaths / intsize;
            avdeaths = numeral(avdeaths).format('0,0');
            avkills = numeral(avkills).format('0,0');
            $avgkills.append($('<p class="inline"/>').text(avkills));
            $avgdeaths.append($('<p class="inline"/>').html(avdeaths));
            var date = data.query.formation;
            $formed.append($('<p class="inline"/>').html(date.substring(0, 10)));
            $('#tag').append($('<h2 class="inline"/>').html(data.query.tag));
            $('#outfitname').append($('<h2 class="inline"/>').html(data.query.name));
            $('#membertotal').append($('<h2 class="inline"/>').html(data.query.size));
            $('#outfitscore').append($('<p class="inline"/>').html(data.query.score));
            $('#avgscore').append($('<p class="inline"/>').html(data.query.ave_score));
            $('#outfitkills').append($('<p class="inline"/>').html(data.query.kills));
            $('#outfitdeaths').append($('<p class="inline"/>').html(data.query.deaths));
            $('#outfittime').append($('<p class="inline"/>').html(data.query.time));
            $('#avgtime').append($('<p class="inline"/>').html(data.query.ave_time));
            $('#activity').append($('<p class="inline"/>').html(data.query.activity));
            $('#avgkdr').append($('<p class="inline"/>').html(data.query.kdr));
            $('#avgspm').append($('<p class="inline"/>').html(data.query.spm));
            $('#avgkph').append($('<p class="inline"/>').html(data.query.kph));
            $('#avgbr').append($('<p class="inline"/>').html(data.query.ave_rank_score));
        });
    })
})
}());

/*var el = document.getElementById('searchTag');
el.addEventListener("click", function() {
        preventDefault();
        outfitdetails();
    });

*/