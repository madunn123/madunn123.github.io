$('#validasi').submit(function (e) {
  e.preventDefault();

  const username = $('#username').val();
  const password = $('#password').val();

  $.ajax({
    method: 'POST',
    url: 'https://tania.ngadem.in/login',
    data: JSON.stringify({
      username,
      password,
    }),
    contentType: 'application/json; charset=utf-8',
    success: result => {
      if (result) {
        Swal.fire({
          icon: 'success',
          title: 'Login success',
          showConfirmButton: true,
        }).then(result => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            window.location.href = '../index.html';
          }
        });
      } else {
        alert('login gagal');
      }

      console.log(result);
    },
    error: result => {
      Swal.fire({
        icon: 'error',
        title: 'Login Gagal',
      });
      console.log(result);
    },
    dataType: 'json',
  });
});

$('#toggle').click(function () {
  $('section.title').slideToggle('slow');
});
