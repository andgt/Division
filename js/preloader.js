let preloader = function() {
  let pageBody = document.querySelector(".page-body");

  window.onload = function () {
    pageBody.classList.add('loaded_hiding');
    window.setTimeout(loader, 500);
  }

  let loader = function () {
    pageBody.classList.add('loaded');
    pageBody.classList.remove('loaded_hiding');
  }
};

export default preloader()
