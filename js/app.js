const catagory = document.getElementById('catagories');
const div = document.createElement('div');
div.classList.add('d-flex', 'justify-content-between','mt-3')
div.innerHTML = `
<button class ="btn btn-light fs-5">Home</button>
<button class ="btn btn-light fs-5">Breaking News</button>
<button class ="btn btn-light fs-5">Regular News</button>
<button class ="btn btn-light fs-5">International News</button>
<button class ="btn btn-light fs-5">Sports</button>
<button class ="btn btn-light fs-5">Entertainment</button>
<button class ="btn btn-light fs-5">Culture</button>
<button class ="btn btn-light fs-5">Arts</button>
<button class ="btn btn-light fs-5">All News</button>


`;

catagory.appendChild(div);