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

function load_gifs() {
    if (gif_data.length === 0) return;
    $('#gif_images').html('');
    var index = 0;
    var row_html = '<div class="row">';
    for (var i = 0; i < gif_data.length; i++) {
        index++;
        if (index === 3) {
            row_html += '<div class="col-md-4"><p>Rating: ' + gif_data[i].rating.toUpperCase() + '</p>';
            row_html += '<img src="' + gif_data[i].images.fixed_height_still.url + '" data-static="' + gif_data[i].images.fixed_height_still.url
                + '" data-gif="' + gif_data[i].images.fixed_height.url + '" data-id="1" onclick="change_gif(this)"/>';
            row_html += '</div>';
            $('#gif_images').append(row_html);
            index = 0;
            row_html = '<div class="row">';
        } else {
            row_html += '<div class="col-md-4"><p>Rating: ' + gif_data[i].rating.toUpperCase() + '</p>';
            row_html += '<img src="' + gif_data[i].images.fixed_height_still.url + '" data-static="' + gif_data[i].images.fixed_height_still.url
                + '" data-gif="' + gif_data[i].images.fixed_height.url + '" data-id="1" onclick="change_gif(this)"/>';
            row_html += '</div>';
        }
    }
    if (gif_data.length % 3 !== 0) {
        row_html += '</div>';
        $('#gif_images').append(row_html);
    }
}
function get_data(keyword) {
    var xhr = $.get("https://api.giphy.com/v1/gifs/search?api_key=OVQOUS7YZIYJaUT0rf2nzKwLZbeV9Ypz&q=" + keyword + "&limit=10&offset=0&rating=G&lang=en");
    xhr.done(function(data) {
        gif_data = data.data;
        load_gifs();
    });
}
function change_gif(evt) {
    if ($(evt).attr('data-id') === '1') {
        $(evt).attr('src', $(evt).attr('data-gif'));
        $(evt).attr('data-id', '2');
    } else {
        $(evt).attr('src', $(evt).attr('data-static'));
        $(evt).attr('data-id', '1');
    }
}
