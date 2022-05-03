const register = document.getElementById('register');
register.addEventListener('submit', regist);

function regist(e) {
  e.preventDefault();

  const username = document.getElementById('username');
  const password = document.getElementById('password');

  $.ajax({
    method: 'POST',
    url: 'https://tania.ngadem.in/register',
    data: JSON.stringify({
      username: 'ramadhan',
      password: '123456',
    }),
    contentType: 'application/json; charset=utf-8',
    success: result => {
      console.log(result);
    },
    error: result => {
      console.log(result);
    },
    dataType: 'json',
  });
};
