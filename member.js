/**
 * Created by Dylan on 16-Sep-15.
 */
var url = 'http://census.psarchives.com/outfit?id=37512545478648131';

$.ajax({ url: url, dataType: 'jsonp' }).done(function (data) {
    var $list = $('#list');
    $.each(data.members, function (i, member) {
        $list.append($('<li/>').text(member.name));
    });
});
