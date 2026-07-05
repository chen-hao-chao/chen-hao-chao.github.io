document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.github-stars[data-repo]').forEach(function (btn) {
    var repo = btn.getAttribute('data-repo');
    fetch('https://api.github.com/repos/' + repo)
      .then(function (res) { return res.json(); })
      .then(function (data) {
        if (data.stargazers_count !== undefined) {
          var stars = data.stargazers_count;
          if (stars > 9) {
            btn.innerHTML = '<i class="fa-brands fa-github"></i> GitHub &nbsp;★ ' + stars.toLocaleString();
          } else {
            btn.innerHTML = '<i class="fa-brands fa-github"></i> GitHub';
          }
        }
      })
      .catch(function () {
        btn.innerHTML = '<i class="fa-brands fa-github"></i> GitHub';
      });
  });
});
