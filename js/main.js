import {reader} from './modules/reader.js'
document.addEventListener("DOMContentLoaded", function (event) {
	var toRead = document.querySelector('#texto')
	reader.read(toRead)
});
