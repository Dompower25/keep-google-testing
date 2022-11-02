export { DeleteNote, AddNote, AddPicture, CreateCopy, AsAList, CopyInGoogleDocument };

const { nanoid } = require('nanoid');
nanoid(7); //=> "mwZmbAB"

function DeleteNote() {
  //debager
 console.log('Mini Menu: вызвана функция Удаления заметки', `${nanoid(7)}`, typeof(nanoid(7)))
}

function AddNote() {
    //debager
  console.log('Mini Menu: вызвана функция Добавленя заметки')
}

function AddPicture() {
    //debager
  console.log('Mini Menu: вызвана функция Добавления рисунка')
}

function CreateCopy() {
    //debager
  console.log('Mini Menu: вызвана фунуия создания Копии заметки')
}

function AsAList() {
    //debager
  console.log('Mini Menu: вызвана функция В виде списка')
}

function CopyInGoogleDocument() {
    //debager
  console.log('Mini Menu: вызвана функция Копирования в Google документы')
}