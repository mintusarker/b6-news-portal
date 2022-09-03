
// const catagory = document.getElementById('catagories');
// const div = document.createElement('div');
// div.classList.add('d-flex', 'justify-content-between','mt-3')
// div.innerHTML = `
// <button class ="btn btn-light fs-5">Breaking News</button>
// <button class ="btn btn-light fs-5">Regular News</button>
// <button class ="btn btn-light fs-5">International News</button>
// <button class ="btn btn-light fs-5">Sports</button>
// <button class ="btn btn-light fs-5">Entertainment</button>
// <button class ="btn btn-light fs-5">Culture</button>
// <button class ="btn btn-light fs-5">Arts</button>
// <button class ="btn btn-light fs-5">All News</button>

// `;

// catagory.appendChild(div);

// const loadProducts = async() =>{
//     const url = `https://openapi.programming-hero.com/api/news/categories`;
//     const res = await fetch(url);
//     const data = await res.json();
//     displayNews(data.data.news_category);
// }

// const displayNews = news => {
//   const newsContainer = document.getElementById('news-container');
//   for(const user in news){
//     const newsDiv = document.createElement('div');
//     // newsDiv.classList.add('row');
//     newsDiv.innerHTML = `
//     <div class="card mb-3" style="">
//     <div class="row g-0">
//       <div class="col-md-4">
//         <img src="..." class="img-fluid rounded-start" alt="...">
//       </div>
//       <div class="col-md-8">
//         <div class="card-body">
//           <h5 class="card-title">Card title</h5>
//           <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//           <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
//         </div>
//       </div>
//     </div>
//   </div>

//     `;
//     newsContainer.appendChild(newsDiv);
//   };
// ;}
// loadProducts();


const loadProducts = async() =>{
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    const res = await fetch(url);
    const data = await res.json();
    setDisplay(data.data.news_category);
};

const setDisplay = news =>{
  const menuContainer = document.getElementById('catagories');
  news.forEach(data =>{
    const div = document.createElement('div');
    // div.classList.add('d-flex','justify-content-between');
    div.innerHTML = `
    <p onclick="cardProducts()" class="btn bg-green-400">${data.category_name}</p>
    
    `
    
    menuContainer.appendChild(div);
  });
}
loadProducts();


const cardProducts = async() =>{
    const url = `https://openapi.programming-hero.com/api/news/category/01`;
    const res = await fetch(url);
    const data = await res.json();
    displayNews(data.data);
}

const displayNews = newses => {
  const newsContainer = document.getElementById('news-container');
  newses.forEach(news =>{
    const newsDiv = document.createElement('div');
    // newsDiv.classList.add('row');
    newsDiv.innerHTML = `
    <div class="card mb-3"style="">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="${newses[0].image_url}" class="img-fluid rounded-start" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <div class="d-flex justify-content-around mt-5 pt-4">
          <div class="card-text">picture</div>
          <div class="card-text">picture</div>
          <div><button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">More</button></div>
          
          </div>

        </div>
      </div>
    </div>
  </div>
    `;
    newsContainer.appendChild(newsDiv);
  })
;}
cardProducts()