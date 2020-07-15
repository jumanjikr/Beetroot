import _ from 'lodash';
import $ from 'jquery';
import '../scss/index.scss';

const MAINDIV = document.querySelector(".main");

function component() {
    const element = document.createElement('div');


    element.innerHTML = _.join(['Настроить', 'компиляцию', 'Sass', 'через', 'webpack'], ' ');

    return element;
}
//JS
MAINDIV.appendChild(component());
//jQuery
$('.main').append(component());