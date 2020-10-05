window.addEventListener('DOMContentLoaded', () => {

	const cells = document.querySelectorAll('.cell');
	let count = 0;

	function toogleClasses(item){

		const cellBlockMiddle = document.getElementById(`${item}`);
		const cellBlockRight = document.getElementById(`${+item+1}`);
		const cellBlockLeft = document.getElementById(`${item-1}`);
		const cellBlockTop = document.getElementById(`${item-10}`);
		const cellBlockBottom = document.getElementById(`${+item+10}`);


		if (cellBlockMiddle!=null)  cellBlockMiddle.classList.toggle('changed');
		if (cellBlockRight!=null)  cellBlockRight.classList.toggle('changed');
		if (cellBlockLeft!=null)  cellBlockLeft.classList.toggle('changed');
		if (cellBlockTop!=null)  cellBlockTop.classList.toggle('changed');
		if (cellBlockBottom!=null)  cellBlockBottom.classList.toggle('changed');
		
		count++;

	}

	function checkWin(){

		for (let i = 0; i < cells.length; i++) {

			if (cells[i].classList.value === "cell")  {
				return false;
			}
		}

		alert(`Completed for ${count} clicks`);
		refreshCount();
	}
	
	function refreshCount() {
		
		count = -1;
	}


    cells.forEach(item => {

    	item.addEventListener('click', () => {

    		toogleClasses((item.id));
    		checkWin(count);
    	})
    });
})
