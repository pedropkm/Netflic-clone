'use strict';


const header = document.querySelector('header');
const nav = document.querySelector('nav');
const navbarMenuBtn = document.querySelector('.navbar-menu-btn');


const navbarForm = document.querySelector('.navbar-form');
const navbarFormCloseBtn = document.querySelector('.navbar-form-close');
const navbarSearchBtn = document.querySelector('.navbar-search-btn');



function navIsActive() {
  header.classList.toggle('active');
  nav.classList.toggle('active');
  navbarMenuBtn.classList.toggle('active');
}

navbarMenuBtn.addEventListener('click', navIsActive);


const searchBarIsActive = () => navbarForm.classList.toggle('active');

navbarSearchBtn.addEventListener('click', searchBarIsActive);
navbarFormCloseBtn.addEventListener('click', searchBarIsActive)
const app = Vue.createApp({
  data(){ 
      return {
          showMovie: true, 
          movies: [
              {title: 'batman', duration: 3, img: './img/batman.png', isFav: true},
              {title: 'Superman', duration: 2, img: './img/superman.png', isFav: false},
              {title: 'Spiderman', duration: 4, img: './img/spiderman.png', isFav: true},
              
          ],
          title: 'batman', 
          duration: 1, 
      }
  }, 
  methods: {
      changeTitle() {
          this.title = 'Uncharted';
      }, 
      toggleShowMovie() {
          this.showMovie = !this.showMovie; 
      },
  }, 

 
  computed: {
      filteredMovie() {
          return this.movies.filter((movie) => movie.isFav); 
      }
  }
});

app.mount('#app'); 