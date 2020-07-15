;

let sample1 = new Vue({
  el: "#app_color",
  data: {
    userMsg: "",
    userColor: "",
    pColor: "",
  },

  methods: {
    onSearch: function () {
      this.pColor = this.userColor;
      this.userColor = "";

      document.querySelector(".main__p-color a").style.color = this.pColor;
      document.querySelector(".main__p-color").style.display = "block";
    },
  },
});




let sample2 = new Vue({
  el: '#app_frameworks',
  data: {
    lists: [
      {
        name: 'Vue.js',
        description: 'Vue',
        link: 'http://ru.vuejs.org/'
      },
      {
        name: 'React',
        description: 'React',
        link: 'http://facebook.github.io/react-native/'
      },
      {
        name: 'Angular',
        description: 'Angular',
        link: 'http://angular.io/'
      }
    ]
  }
});
