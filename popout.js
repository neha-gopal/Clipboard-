/*const items = [{"item":"Record next video", "status": 0},
{"item":"Record next video", "status": 1}];
const itemsStr = JSON.stringify(items);

console.log(items);
console.log(itemsStr); */

function fetchGoogle(){

    chrome.storage.sync.get(['text'], function(clipboard){
        const newText = clipboard.text;

        const list = document.getElementsByClassName('clipboard-items')[0];
        const listElement = document.createElement('li');
        listElement.textContent = newText;
        list.appendChild(listElement);
        
    });


}
/*
function fetchItems(){

    const itemsList = document.querySelector('ul.todo-items');
    itemsList.innerHTML = '';
    var newItemHTML = '';

    try{
        var items = localStorage.getItem('todo-items');
        var itemsArr = JSON.parse(items);
        for(var i = 0; i < itemsArr.length; i++){
            var status = '';
            if(itemsArr[i].status == 1){
                status = 'class="done"';

            }
            newItemHTML += `<li data-itemindex="${i}" ${status}>
            <span class="item">${itemsArr[i].item}</span>
            <div><span onclick="itemComplete('$(i)');">✅</span><span onclick ="itemDelete('$(i)');">❌</span></div></li>`;
            itemsArr[i];
        }

        itemsList.innerHTML = newItemHTML;
    }catch(e){
    //.
    //create a default item list..
    }
}
function saveItems(){
    var string = JSON.stringify(obj);
    localStorage.setItem('todo-items', string);
}

fetchItems(); */
fetchGoogle();