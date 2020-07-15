$(document).ready(function () {
  $("#join_us").change(function () {
    $(".js-singin").addClass("disabled");
    $(".js-joinus").removeClass("disabled");
  });
});

$(document).ready(function () {
  $("#sing_in").change(function () {
    $(".js-joinus").addClass("disabled");
    $(".js-singin").removeClass("disabled");
  });
});

$(document).ready(function () {
  $("#create_account").click(function () {
    $(".js-radiojoin").prop("checked", true);
    $(".js-singin").addClass("disabled");
    $(".js-joinus").removeClass("disabled");
  });
});

// confirm password

$("#submit").click(function () {
  $(".error").hide();
  var valueX = $("#user_password2").val();
  var valueY = $("#user_password3").val();
  if (valueX != valueY) {
    alert("Error. Password mismatch");
  }
});
