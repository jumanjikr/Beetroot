;

let sample1 = new Vue({
  el: "#app_color",
  data: {
    userColor: "",
    bgColor: "",
  },

  methods: {
    onSearch: function () {
      this.bgColor = this.userColor;
      this.userColor = "";
      document.body.style.background = this.bgColor;
      document.querySelector(".main__p-color a").style.color = this.bgColor;
      document.querySelector(".main__p-color").style.display = "block";
    },
  },
});

let sample2 = new Vue({
  el: "#app_form",
  data: {
    isVisible: true,
    history: "",
  },
  methods: {
    mouseClick: function (e) {
      let button = "";
      if (e.button === 0) {
        button = "LEFT";
      }
      if (e.button === 1) {
        button = "CENTER";
      }
      if (e.button === 2) {
        button = "RIGHT";
      }
      this.history = `Нажата   ${button}  кнопка мыши`;

      document.querySelector(".main__p-btn").style.display = "block";
    },

    showTime: function () {
      let now = new Date();
      this.history = `Текущее время: ${String(now.getHours())} : ${String(
        now.getMinutes()
      )} : ${String(now.getSeconds())}`;
      document.querySelector(".main__p-btn").style.display = "block";
    },
  },
});
