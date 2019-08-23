var keywords = [
    'music',
    'singers',
    'guitar',
    'piano',
    'harmonica',
    'trumpet',
    'jazz',
    'bass',
    'violin',
    'dancer'

];
var gif_data = [];
$(document).ready(function () {
    
    var html_buttons = '';
    for (var i = 0; i < keywords.length; i++) {
        html_buttons += '<button class="btn btn-primary btn-sm" onclick="get_data(\'' + keywords[i] + '\')">' + keywords[i] + '</button>';
    }
    $('.content_buttons').html(html_buttons);

});

function adding_keywords() {
    var new_keyword = $('#adding_keyword').val();
    if (new_keyword === '') return;
    if (keywords.indexOf(new_keyword) > -1) return;
    keywords.push(new_keyword);
    var new_button = '<button class="btn btn-primary btn-sm" onclick="get_data(\'' + new_keyword + '\')">' + new_keyword + '</button>';
    $('.content_buttons').append(new_button);
}
