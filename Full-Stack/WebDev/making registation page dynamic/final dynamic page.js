<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css"
      integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M"
      crossorigin="anonymous" />
    <title>DOM Practice</title>
  </head>
  <body>
    <header id="main-header" class="bg-success text-white p-4 mb-3">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h3 id="header-title">SEARCH APPOINTMENT</h3>
          </div>
          <div class="col-md-6 align-self-center">
            <input
              type="text"
              class="form-control"
              id="filter"
              placeholder="Search Appointment..." />
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <div id="main" class="card card-body">
        <h4 class="title">ADD APPOINTMENT</h4>
        <form
          id="addForm"
          class="form-inline mb-3"
          style="margin: 10px; padding: 10px">
          <input
            placeholder="Name"
            type="text"
            class="form-control mr-2"
            id="name"
            style="margin: 10px; padding: 10px" />
          <input
            placeholder="Email"
            type="email"
            class="form-control mr-2"
            id="email"
            style="margin: 10px; padding: 10px" />
          <input
            placeholder="Address"
            type="text"
            class="form-control mr-2"
            id="Address"
            style="margin: 10px; padding: 10px" />
          <input
            placeholder="Mobile Number"
            type="tel"
            class="form-control mr-2"
            id="Mobile"
            style="margin: 10px; padding: 10px" />
          <input
            placeholder="Date"
            type="datetime-local"
            class="form-control mr-2"
            id="date"
            style="margin: 10px; padding: 10px" />
          <input type="submit" class="btn btn-dark" value="Submit" />
        </form>
        <h4
          class="title"
          style="
            text-decoration: underline;
            color: red;
            margin: 10px;
            padding: 10px;
          ">
          APPOINTMENTS:
        </h4>
        <ol id="items" class="list-group"></ol>
      </div>
    </div>
    <!-- <script src="script.js"></script> -->
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/axios/1.5.1/axios.min.js"
      integrity="sha512-emSwuKiMyYedRwflbZB2ghzX8Cw8fmNVgZ6yQNNXXagFzFOaQmbvQ1vmDkddHjm5AITcBIZfC7k4ShQSjgPAmQ=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"></script>
  </body>
  <script>
    const url = "https://crudcrud.com/api/c01c9a3aca2d486e92307509a69a663b";
    const form = document.getElementById("addForm");
    const itemList = document.getElementById("items");

    form.addEventListener("submit", addAppointment);
    itemList.addEventListener("click", deleteOrEditAppointment); 

    function addAppointment(e) {
      e.preventDefault();

      const userName = document.getElementById("name");
      const userEmail = document.getElementById("email");
      const userAddress = document.getElementById("Address");
      const userTel = document.getElementById("Mobile");
      const userBookDate = document.getElementById("date");

      let obj = {
        userName: userName.value,
        userEmail: userEmail.value,
        userAddress: userAddress.value,
        userTel: userTel.value,
        userBookDate: userBookDate.value,
      };
      postAxios(obj);
      form.reset();
    }

    function postAxios(jsonString) {
      axios
        .post(`${url}/appointments`, jsonString)
        .then((res) => {
          console.log(res);
          getAxios(); // Reload the appointment list after adding
        })
        .catch((err) => {
          console.log(err);
        });
    }

    function getAxios() {
      axios
        .get(`${url}/appointments`)
        .then((res) => {
          itemList.innerHTML = ""; // Clear the existing list
          res.data.forEach((item) => {
            let li = document.createElement("li");
            li.className = "list-group-item";
            li.value = item._id;
            li.appendChild(
              document.createTextNode(
                item._id + " " + item.userName + "  " + item.userTel
              )
            );
            var btnDelete = document.createElement("button");
            btnDelete.className = "btn btn-danger btn-sm float-right delete";
            btnDelete.appendChild(document.createTextNode("Delete"));
            li.appendChild(btnDelete);

            var btnEdit = document.createElement("button");
            btnEdit.className = "btn btn-warning btn-sm float-right edit";
            btnEdit.appendChild(document.createTextNode("Edit"));
            li.appendChild(btnEdit);

            itemList.appendChild(li);
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }

    function deleteOrEditAppointment(e) {
      if (e.target.classList.contains("delete")) {
        // Handle delete button
        const li = e.target.parentElement;
        const userId = li.textContent.split(" ")[0];
        itemList.removeChild(li);
        console.log(userId);
        deleteAppointment(userId);
      } else {
        if (e.target.classList.contains("edit")) {
          const editId = e.target.parentElement.textContent.split(" ")[0];
          getAxiosForEdit(editId);
        }
      }
    }

    function editAppointment(userId, objUpdated) {
      axios
        .put(`${url}/appointments/${userId}`, objUpdated)
        .then((res) => {
          console.log(res);
          getAxios(); // Reload the appointment list after editing
        })
        .catch((err) => {
          console.log(err);
        });
    }

    function getAxiosForEdit(userId) {
      axios.get(`${url}/appointments/${userId}`).then((res) => {
        const userName = document.getElementById("name");
        const userEmail = document.getElementById("email");
        const userAddress = document.getElementById("Address");
        const userTel = document.getElementById("Mobile");
        const userBookDate = document.getElementById("date");
        userName.value = res.data.userName;
        userEmail.value = res.data.userEmail;
        userAddress.value = res.data.userAddress;
        userTel.value = res.data.userTel;
        userBookDate.value = res.data.userBookDate;
        deleteAppointment(userId);
      });
    }

    function deleteAppointment(userId) {
      axios
        .delete(`${url}/appointments/${userId}`)
        .then(() => {
          console.log(`Deleted: ${userId}`);
          getAxios(); // Reload the appointment list after deleting
        })
        .catch((err) => {
          console.log(err);
        });
    }

    getAxios();
  </script>
</html>
