import $ from 'jquery';
export const showButton = () => {
    const button = document.createElement('button');
    $('#container').append(button);
    $(button).text('Змінити песика');
    $(button).attr('id', 'myButton');

}