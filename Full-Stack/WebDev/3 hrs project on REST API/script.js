// all required element and links
const link = "https://crudcrud.com/api/b408b1a0fc9f4a4bbd447f5eed27c93c";
const url = `${link}/services`;
const price = document.querySelector("#price");
const productName = document.querySelector("#productName");
const form = document.querySelector("#form");
const search = document.querySelector(".d-flex");
const outputList = document.querySelector("#output");
const lists = document.getElementsByTagName("li");

//adding event listeners for search item in output list
search.addEventListener("keyup", (e) => {
  const sText = e.target.value;
  Array.from(lists).forEach((item) => {
    let itemText = item.firstChild.textContent;
    if (itemText.indexOf(sText) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});

//adding to object  and sent to post axios request
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const priceValue = price.value;
  const productNameValue = productName.value;

  if (priceValue === "" || productNameValue === "") {
    alert("Please fill in all fields");
  } else {
    const productObj = {
      price: priceValue,
      productName: productNameValue,
    };

    postAxios(productObj);
  }
  form.reset();
});

//edit functionality  product
outputList.addEventListener("click", (e) => {
  if (e.target.classList.contains("edit")) {
    const text = e.target.parentElement.firstChild.textContent.split("_");
    price.value = text[1].split(".")[1];
    productName.value = text[0];
    console.log(text);
  }
});

//sending data to api
async function postAxios(productObj) {
  try {
    const response = await axios.post(url, productObj);
    console.log(response.data);
    getAxios();
  } catch (error) {
    console.log(error);
  }
}

//getting data from api
async function getAxios() {
  try {
    const response = await axios.get(url);
    const products = response.data;
    displayProducts(products);
    calculateAndDisplaySum(products);
  } catch (error) {
    console.log(error);
  }
}

//delete dat from api
async function deleteAxios(productId) {
  try {
    const deleteUrl = `${url}/${productId}`;
    const response = await axios.delete(deleteUrl);
    console.log(response.data);
    getAxios();
  } catch (error) {
    console.log(error);
  }
}

// adding product and price in html
function displayProducts(products) {
  outputList.innerHTML = "";

  products.forEach((product) => {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.innerHTML = `${product.productName} _ Rs.${product.price}<button class="btn btn-outline-danger btn-sm float-end" onclick="deleteAxios('${product._id}')">Delete</button><button class="btn btn-outline-warning btn-sm float-end edit">Edit</button>
        `;
    outputList.appendChild(li);
  });
}

//calculating the total of products price
function calculateAndDisplaySum(products) {
  let sum = 0;
  const outputList = document.querySelector("#Sum");
  products.forEach((product) => {
    sum += parseInt(product.price);
  });
  outputList.innerHTML = `Rs : ${sum}`;
}

//get data first time in display from api
getAxios();
