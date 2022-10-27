$("document").ready(function () {
  $.get("https://fourtonfish.com/https://fourtonfish.com/hellosalut/?lang=fr/?lang=fr", function (data) {
    $("DIV#hello").text(data.hello);
  });
});
