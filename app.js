 const addButton = document.querySelector('.addButton');
 var input = document.querySelector('.input');
 const container = document.querySelector('.container');



class item{
	constructor(itemName){
		this.createDiv(itemName);
	}
    createDiv(itemName){
    	
    	let input = document.createElement('input');
    	input.type = "text";
    	input.disabled = true;
    	input.value = itemName;
    	input.classList.add('item_input');

        let itemBox = document.createElement('div');
        itemBox.classList.add('item');

    	let editButton = document.createElement('button');
    	editButton.classList.add('editButton');
    	editButton.innerHTML = "EDIT";

    	let removeButton = document.createElement('button');
    	removeButton.classList.add('removeButton');
    	removeButton.innerHTML = "REMOVE";

    	container.appendChild(itemBox);

        itemBox.appendChild(input);
        itemBox.appendChild(editButton);
        itemBox.appendChild(removeButton);

        editButton.addEventListener('click', () => this.edit(input));
        removeButton.addEventListener('click', () => this.remove(inputBox));
    
}

    edit(input){
           input.disabled = !input.disabled;
    }

    remove(item){
        container.removeChild(item);
    }
}

function check(){
	if(input.value != ""){
		new item(input.value);
		input.value = "";
	}
}

addButton.addEventListener('click', check);
window.addEventListener('keydown', (e) => {
	if(e.which == 13){
		check();
	}
})