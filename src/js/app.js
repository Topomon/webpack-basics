import { inMouse } from './scripts'

export const init = () => {
	document.addEventListener('mousemove', (event)=> {

		// let centerX = mouse.offsetLeft + mouse.offsetWidth / 2;
		// let centerY = mouse.offsetTop + mouse.offsetHeight / 2;
		// console.log( centerX, centerY )
		inMouse.style.left = event.clientX + 'px';
		inMouse.style.top = event.clientY + 'px';
	});
}

