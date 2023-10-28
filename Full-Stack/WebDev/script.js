// console.log(document.domain);
// console.log(document.body);
// console.log(document.all);

// GETELEMENTBYID

// const ul=document.getElementById("header-title");
// console.log(ul.innerHTML); //in format of HTML
// console.log(ul.textContent);  // all text content without any styling
// console.log(ul.innerText); // only visible text
// ul.innerHTML="Welcome to Demo";
// const border= document.getElementById("main-header");
// const border2= document.getElementById("header-title");
// border.style.border="5px solid black"
// border2.style.border="1px solid red"

// GETELEMENTSBYCLASSNAME

// const items=document.getElementsByClassName("list-group-item");
// console.log(items);
// items[2].style.fontWeight='bold';
// for (let index = 0; index < items.length; index++) {
//     items[index].style.backgroundColor="Black";
//     items[index].style.color="white";
// }

// GETELEMENTBYTAGNAME

// const items=document.getElementsByTagName("li");
// console.log(items);
// items[2].style.fontWeight='bold';
// for (let index = 0; index < items.length; index++) {
//     items[index].style.backgroundColor="green";
//     items[index].style.color="white";
// }

// QUERYSELECTOR

// const header = document.querySelector('.title');
// console.log(header);
// header.innerHTML="Add New Things";
// const input = document.querySelector('input');
// console.log(input);
// input.value="Added";
// const submit= document.querySelector('input[type="submit"]');
// console.log(submit);
// submit.value='SEND';
// var item=document.querySelector('.list-group-item');
// item.style.color="red";
// var seconditem=document.querySelector(".list-group-item:nth-child(2)");
// seconditem.style.color="yellow";
// var lastitem=document.querySelector('.list-group-item:last-child');
// lastitem.style.backgroundColor="yellow";

// QUERYSELECTORALL

// var titles=document.querySelectorAll(".title");
// console.log(titles);
// const odd=document.querySelectorAll('li:nth-child(odd)');
// for (let index = 0; index < odd.length; index++) {
//     odd[index].style.backgroundColor="#f4f4f4"
// }
// const even=document.querySelectorAll('li:nth-child(even)');
// for (let index = 0; index < even.length; index++) {
//     even[index].style.backgroundColor="#ccc"
// }

// TRAVERSING DOM

// var itemList=document.querySelector('#items');
// console.log(itemList.parentNode);
// console.log(itemList.parentElement);
// console.log(itemList.childNodes);
// console.log(itemList.children);
// itemList.parentNode.style.backgroundColor="gray";

// CREATING ELEMENT

// var newDiv=document.createElement("div");
// // newDiv.innerHTML="Hello";
// newDiv.className="new module";
// newDiv.id="divNew";
// newDiv.setAttribute('title','hello div');
// //crate text node to div
// var DivText=document.createTextNode("Hello");
// //add text to div
// newDiv.appendChild(DivText);
// var title=document.querySelector("header .container");
// var h1=document.querySelector("header h1");
// title.insertBefore(newDiv,h1);

// var newDiv1=document.createElement("div");
// // newDiv.innerHTML="Hello";
// newDiv1.className="new module";
// newDiv1.id="divNew";
// newDiv1.setAttribute('title','hello div1');
// //crate text node to div
// var DivText1=document.createTextNode("Hello");
// //add text to div
// newDiv1.appendChild(DivText1);
// var title1=document.querySelector("#items");
// var li=document.querySelector(".list-group-item");
// title1.insertBefore(newDiv1,li);

// var button=document.getElementById('button').addEventListener('click',buttonclick);
// function buttonclick(e){
//     document.getElementById("header-title").textContent='changed';
//     console.log(e.target.id);
// }
// var form=document.getElementById('addForm');
// var itemList=document.getElementById('items');
// //form submit event
// form.addEventListener('submit', addItem);

// //remove
// itemList.addEventListener('click',removeItem)
// // add item
// function addItem(e){
//     e.preventDefault();
//     // get input value
//     var val=document.getElementById('item');

//     var li=document.createElement('li');
//     li.className="list-group-item";
//     li.appendChild(document.createTextNode(val.value));
//     //create delete button
//     var buttonDel=document.createElement('button');
//     buttonDel.className='btn btn-danger btn-sm float-right delete';
//     buttonDel.appendChild(document.createTextNode('X'));
//     li.appendChild(buttonDel)
//     var Edit=document.createElement('button');
//     Edit.className='btn btn-danger btn-sm float-right delete';
//     Edit.appendChild(document.createTextNode('Edit'));
//     li.appendChild(Edit)
//     itemList.appendChild(li)
// }

// function removeItem(e){
//     if(e.target.classList.contains('delete')){
//         if(confirm("Sure")){
//             var li=e.target.parentElement;
//             itemList.removeChild(li)
//         }
//     }
// }
// var form=document.getElementById('addForm');
// var itemList=document.getElementById('items');
// //form submit event
// form.addEventListener('submit', addItem);

// //remove
// itemList.addEventListener('click',removeItem)
// // add item
// function addItem(e){
//     e.preventDefault();
//     // get input value
//     var val=document.getElementById('item');

//     var li=document.createElement('li');
//     li.className="list-group-item";
//     li.appendChild(document.createTextNode(val.value));
//     //create delete button
//     var buttonDel=document.createElement('button');
//     buttonDel.className='btn btn-danger btn-sm float-right delete';
//     buttonDel.appendChild(document.createTextNode('X'));
//     li.appendChild(buttonDel)
//     var Edit=document.createElement('button');
//     Edit.className='btn btn-danger btn-sm float-right delete';
//     Edit.appendChild(document.createTextNode('Edit'));
//     li.appendChild(Edit)
//     itemList.appendChild(li)
// }

// function removeItem(e){
//     if(e.target.classList.contains('delete')){
//         if(confirm("Sure")){
//             var li=e.target.parentElement;
//             itemList.removeChild(li)
//         }
//     }
// }
