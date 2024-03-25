const scrollButton = document.querySelector(".scrollButton");

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

const baseImageUrl = "https://image.tmdb.org/t/p/w500/";

const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ODQ0MzczMDNmMmJiNzJlN2NlMTEyZTA3MDI1NThmOCIsInN1YiI6IjY1ZmRhZmNhOTBmY2EzMDE3ZGEwNjM0MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NWWMI8o2TaRreOcu3QJkmUvaxQOmeYlklOFyPc0O7Ng";

fetch(
  `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=684437303f2bb72e7ce112e0702558f8`,
  {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }
).then((response) => {
  response.json().then((response) => {
    console.log(response.results);
  });
});
