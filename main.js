function toggleSwitch() {
 const switchButton = document.getElementById('switchButton');
 const body = document.body;

 // Toggle button text
 switchButton.innerText = switchButton.innerText === 'Switch Off' ? 'Switch On' : 'Switch Off';

 // Toggle background color
 body.classList.toggle('switch-on');
}