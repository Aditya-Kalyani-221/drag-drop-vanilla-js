console.log('script loaded');
let ele;

document.addEventListener('dragstart', (e)=> {
	console.log('in drag start event');
	ele = e.srcElement;
	//Comment the line above and uncomment the line below.
	//Below statement is also a way how we can store the dragged element.
	//e.dataTransfer.setData('ele', e.target.id);
});

document.addEventListener('dragend', (e)=> {
	console.log('in drag end event');
});

//cart area events
let cartArea = document.querySelector('.cart');

cartArea.addEventListener('dragenter', (e)=> {
	e.preventDefault();
	console.log('in drag enter event');
	cartArea.classList.add('show-border');
})

cartArea.addEventListener('dragleave', (e)=> {
	e.preventDefault();
	console.log('in drag leave event');
	cartArea.classList.remove('show-border');
})

cartArea.addEventListener('dragover', (e)=> {
	console.log('in drag over event');
	e.preventDefault();
})

cartArea.addEventListener('drop', (e)=> {
	e.preventDefault();
	console.log('in drag drop event');
	cartArea.classList.remove('show-border');
	cartArea.appendChild(ele.cloneNode(true));
	//Comment the above line
	//Uncomment the 2 lines below, this is also a way how we can use event methods to create a copy of the attribute that we saved above
	//let data = e.dataTransfer.getData('ele');
	//e.target.appendChild(document.getElementById(data).cloneNode(true));
})