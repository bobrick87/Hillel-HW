import $ from 'jquery';

import './index.css';
import image from './assets/korgi.jpg';
import image2 from './assets/dog.jpg';
import { showButton } from './button/button';

console.log("Ура, працює")

const divContainer = $('<div>').attr({'id':'container'});
const picture = document.createElement('img');
$(picture).attr('src', image);
$('body').append(divContainer);
$('#container').append(picture);

showButton();

$('#myButton').click(function () {
    $(picture).attr('src', image2);
    $(this).hide();
})
