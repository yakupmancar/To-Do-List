
//ELEMAN EKLEME;
let ulDOM = document.querySelector('.list');    //ul seçilmesi
let addButon = document.querySelector('.addBtn');   //buton seçilmesi
let input = document.querySelector('.input');   //input seçilmesi

function addItem() {            //itemlerin eklenmesi için oluşturulan fonksiyon
    if (input.value == '') {
        alert('Boş öğe eklenemez');
    }
    else {
        let liDOM = document.createElement('li');
        ulDOM.append(liDOM);
        liDOM.innerHTML = input.value;
        liDOM.setAttribute('style', 'border-bottom: 1px solid #333;');  //liste elemanlarının arasına çizgi 
        liDOM.append(deleteButton());
        eventListElement(liDOM)
        input.value = "";
    }
}
addButon.addEventListener('click', addItem);    //click eventi


/************************************************************************************************************************/


//HER ELEMAN EKLENDİĞİNDE SİLME BUTONUYLA BERABER EKLENSİN;

//Mevcutta var olan liste elemanları için click(silme) eventi
let crossElements = document.querySelectorAll("img");   //çarpı işaretinin seçilmesi
crossElements.forEach(element => element.addEventListener('click', function () {    //
    let parentListItem = element.parentElement;
    parentListItem.remove();
})
);

// Yeni eklenen elemanlar için click(silme) eventi
function deleteButton() {
    let img = new Image();
    img.src = 'cross.jpg';
    img.width = 14;
    img.style = "float:right; padding-top: 5px";    //çarpı butonunu ortalamak için yazdım
    img.addEventListener('click', function () {
        let deleteElement = this.parentElement;
        deleteElement.remove();
    })
    return img;
}


/************************************************************************************************************************/


//CHECK ÖZELLİĞİ EKLEME;

//Mevcutta var olan liste elemanlarına eklemek;
var listItems = document.querySelectorAll("li");
listItems.forEach(item => item.addEventListener('click', function () {
    if (item.classList.contains('checked')) {
        item.classList.remove('checked');
    }
    else {
        item.classList.add('checked');
    }
}))

// Yeni eklenen elemanlar için check eventi
function eventListElement(listElement) {
    listElement.addEventListener('click', function () {
        if (listElement.classList.contains('checked')) {
            listElement.classList.remove('checked');
        }
        else {
            listElement.classList.add('checked');
        }
    })
    return listElement;
}
