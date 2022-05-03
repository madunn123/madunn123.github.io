sessionStorage.setItem(
  'token',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsImlhdCI6MTY1MTIwNTUyNiwiZXhwIjoxNjUxMjA5MTI2fQ.d-cRVz1WO6CVaC1FwLey6BQnHd-4VszMtvGZ1WEV3VY'
);

// todo list

document.querySelector('#push').onclick = function () {
  if (document.querySelector('#newtask input').value.length == 0) {
    // Swal.fire({
    //   icon: 'error',
    //   title: 'Kuntul!!!',
    //   text: 'Data tidak boleh kosong',
    //   background: 'white',
    // });
    console.log('errrorr');
  } else {
    document.querySelector('#tasks').innerHTML += `
            <div class="task d-flex my-2">
                <span id="taskname" class="form-control me-2">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete btn ms-2">
                  <i class="fa fa-trash" aria-hidden="true"></i>
                </button>
            </div>
        `;

    var current_tasks = document.querySelectorAll('.delete');
    for (var i = 0; i < current_tasks.length; i++) {
      current_tasks[i].onclick = function () {
        this.parentNode.remove();
      };
    }
  }
};
