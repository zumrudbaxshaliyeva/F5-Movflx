const scrollButton = document.querySelector(".scrollButton");

let products = [];

window.onscroll = () => {
  console.log(window.scrollY);

  if (window.scrollY > 350) {
    scrollButton.classList.add("scrollButton__bottomAnimated");
  } else {
    scrollButton.classList.remove("scrollButton__bottomAnimated");
  }
};

scrollButton.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

//  ashagidaki itemleari dinamik etmek uchun api-dir



const token =  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ODQ0MzczMDNmMmJiNzJlN2NlMTEyZTA3MDI1NThmOCIsInN1YiI6IjY1ZmRhZmNhOTBmY2EzMDE3ZGEwNjM0MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NWWMI8o2TaRreOcu3QJkmUvaxQOmeYlklOFyPc0O7Ng";

// fetch(
//   `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=684437303f2bb72e7ce112e0702558f8`,
//   {
//     headers: {
//       "Content-type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//   }
// ).then((response) => {
//   response.json().then((response) => {
//      products = response.results;
//   });
// });

// burada sorgu atmaq hissesi bitir










const itemColumnString=`<div class="col-12 col-md-6 col-lg-3 text-white">
<div class="card" style="width: 18rem">
  <img
    src="./assets/images/ucm_poster01.jpg"
    class="card-img-top card-img-top_height"
  />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <div class="d-flex">
      <div class="vote_count">120</div>

      <div class="vote_lang ms-2">en</div>
    </div>
    <p class="card-text">
      Some quick example text to build on the card title and make up
      the bulk of the card's content.
    </p>
  </div>
</div>
</div>`






const baseImageUrl = "https://image.tmdb.org/t/p/w500/";





const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=684437303f2bb72e7ce112e0702558f8`;
const config={
  headers: {
    "Content-type": "application/json",
    Authorization: `Bearer ${token}`,
  },
}
fetch(url, config).then((response) => {
 

  response.json().then((response2) => {
      


const row=document.querySelector(".rowWillBeAdded")

    
    
    response2.results.forEach((item) => {
      console.log(item);
      
      row.insertAdjacentHTML("beforeend",  `<div class="col-12 col-md-6 col-lg-3 text-white mb-4">
      <div class="card" style="width: 18rem">
        <img
          src="${baseImageUrl}${item.poster_path}"
          class="card-img-top card-img-top_height"
        />
        <div class="card-body">
          <h5 class="card-title">${item.title}</h5>
          <div class="d-flex">
            <div class="vote_count">${item.vote_count}</div>
      
            <div class="vote_lang ms-2">${item.original_language}</div>
          </div>
          <p class="card-text">
            ${item.overview}
          </p>
        </div>
      </div>
      </div>` );

})
    
    
 
 
  });
});



















const docButton = document.querySelector(".documentary");

docButton.addEventListener("click", () => {
  console.log(products, "prooo");
  products.forEach((pro) => {
    console.log(pro.genre_ids);
  });
});
