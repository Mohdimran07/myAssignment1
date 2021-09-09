//console.dir(document);
//console.dir(document.domain);
//console.dir(document.URL);
//console.log(document.title);
// document.title  = 123;
//console.dir(document.doctype);
//console.log(document.head);
//console.log(document.body);
//console.dir(document.all);
//console.dir(document.all[10]);

// GETELEMENTID // 
//var headerTitle = document.getElementById('header-title');
//console.log(headerTitle);
// headerTitle.textContent = 'Hello'; 
// headerTitle.innerText = "good bye";

// headerTitle.style.borderBottom = 'solid 3px #000';


// GETELEMENTBYCLASS //
//var items =  document.getElementsByClassName('list-group-item');
//console.log(items);
//items[0].textContent = 'hello';
//items[0].style.fontWeight = 'bold';
//items[0].style.background = 'green';

//QUERYSELECTOR //
//var header = document.querySelector('main-header');
//header.style.borderBottom = 'solid 4px #ccc';

//var input = document.querySelector('input');
//input.value = 'hello world';

//var submit = document.querySelector('input[type="submit"]');
//submit.value="SEND";

var item = document.querySelector('.list-group-item');
item.style.color = 'green';

var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color = 'green';

var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
thirdItem.style.color = 'green';

var lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'green';

//ELEMENTSBYTAGNAME //
var li = document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[1].textContent = 'Hello 2';
li[1].style.fontWeight = 'bold';

