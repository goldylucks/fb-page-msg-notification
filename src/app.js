document.addEventListener('click', onClick)
loadFbAsync()

function onClick ({ target }) {
  const { id } = target
  if (id === 'logout') {
    return FB.logout()
  }

  if (id === 'testAPI') {
    return testAPI()
  }

}

window.fbLoginCb = function () {
  console.log('fbLoginCb')
  FB.getLoginStatus(function(response) {
    console.log('getLoginStatus', response);
  });
}

window.fbAsyncInit = function() {
  FB.init({
    appId      : '242672562803230',
    xfbml      : true,
    version    : 'v2.8'
  });

  FB.AppEvents.logPageView();

  FB.getLoginStatus(function(response) {
    console.log('getLoginStatus', response);
  });
};

function testAPI() {
  console.log('Welcome!  Fetching your information.... ');
  FB.api('/me', function(response) {
    console.log('Successful login for: ' + response.name);
  });
}

function loadFbAsync () {
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
}

console.log('app js loaded!')