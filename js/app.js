// category section----
const loadProducts = () =>{
    fetch(`https://openapi.programming-hero.com/api/news/categories`)
    .then(res => res.json())
    .then(data => setDisplay(data.data.news_category))
    .catch(error => {
      console.log('there was an error :', error);
    })
};

const setDisplay = news =>{
  const menuContainer = document.getElementById('catagories');
  news.forEach(data =>{
    const div = document.createElement('div');
    div.classList.add('cols-sm-6');
    div.innerHTML = `
    <p onclick="cardProducts('${data.category_id}')" class="btn btn-light my-4">${data.category_name}</p>
    
    `;
    menuContainer.appendChild(div);
  });
}
loadProducts();

const cardProducts = async(newsId) =>{
    spinner(true);
    const url = `https://openapi.programming-hero.com/api/news/category/${newsId}`;
    const res = await fetch(url);
    const data = await res.json();
    try{
        const res = await fetch('https://openapi.programming-hero.com/api/news/categories');
       const data = await res.json();
       console.log(data);
          }
          catch{
            console.log('There was an error!!')
      
          }
    displayNews(data.data);
    
}

// news section-----


const newsSort = (newsAll) =>{
  newsAll.sort(function(a,b){
    return b.total_view - a.total_view;
  })
};

const displayNews = newses => {
  const newsContainer = document.getElementById('news-container');
  newsContainer.innerText = '';
  newses.forEach(news =>{
    const newsDiv = document.createElement('div');
    // newsDiv.classList.add('row');
    newsDiv.innerHTML = `
    <div class="card mb-3">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="${news.thumbnail_url}" class="img-fluid" alt="...">
       </div>
        <div class="col-md-8">
          <div class="card-body">
           <h5 class="card-title">${news.title}</h5>
            <p class="card-text">${news.details. slice (0,300)}....</p>

          <div class="d-flex justify-content-between p-5 gap-5">
           <div class="d-flex gap-2">
           <img style="width:40px; hight:40px" class="rounded-circle" src="${news.author.img}">
           <h5 class="">${news.author.name ? news.author.name : "No name found"}</h5>
           </div>

            <div class="mt-4 d-inline">
            <p class="d-flex gap-2"><i class="fa-regular fa-eye"></i>${news.total_view}</i></p>
            </div>
            <div class="mt-4">
            <div onclick="loadNewsDetails('${news._id}')" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">More</div> 
        </div>
     </div>
   </div>
    `;
    newsContainer.appendChild(newsDiv);
    
  });
  spinner(false);
  }

cardProducts();

// modal details----->

const loadNewsDetails = (id) => {
  fetch(`https://openapi.programming-hero.com/api/news/${id}`)
  .then((res) =>res.json())
  .then((data) => displayNewDetails(data.data[0]))
  .catch(error => console.log(error));
};

const displayNewDetails = (data) => {

  const modalBody = document.getElementById('modal-body');
  modalBody.textContent = "";
  modalBody.innerHTML = `
  <img src="${data.image_url}"class="w-50">
  <div class="p-3">
  <div class="mt-5">Author Name : ${data.author.name ? data.author.name : "No Data Avilable"}</div>
  <div>total view : ${data.total_view ? data.total_view : "No Data Avilable"}</div>
   <div>Publish Date : ${data.publish_date ? data.publish_date : "No data Avilable"} </div>
   </div>
  `;
  const modalFooter = document.getElementById('modal-footer');
  modalFooter.innerText = data.details.slice(0, 150);
};

// spinner section------>

const spinner = (isLoading) => {
  const displaySpinner = document.getElementById('spiner');
  if(isLoading) {
    displaySpinner.classList.remove('d-none');
  }
  else{
    displaySpinner.classList.add('d-none');
  }
};
  
const arrey = [];
document.getElementById('show-number').addEventListener('click' ,function(){
 if(displayNews === 'true'){
  arrey.push(displayNews)
 }
})


// spinner();
// loadNewsDetails();
// newsSort()
// loadProducts();
// cardProducts(01)