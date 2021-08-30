const app = new PageController(new PageModel(), new PageView());


$(window).on("load", function () {
  router();
  location.hash = ""
});

$(window).on("hashchange", function () {
  router();
});
