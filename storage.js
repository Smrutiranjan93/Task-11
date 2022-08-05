
// add event listener 
const form=document.getElementById('my-form');
form.addEventListener('submit',tolocalStorage);

function tolocalStorage(event){
event.preventDefault();
const name=event.target.name.value;
const email=event.target.email.value;
// localStorage.setItem('name',name);
// localStorage.setItem('email',email);
const obj={
    name:name,
    email:email
};
localStorage.setItem(obj.email,JSON.stringify(obj));
getInfoOnScreen(obj);
}

//as every user don't have a particular id,all old user get replaced by new user.

//storing multiple user
// localStorage.setItem(obj.email,JSON.stringify(obj));


function getInfoOnScreen(user){
   const parentNode =document.getElementById('listOfUsers');
   const childHTML=`<li> ${user.name} -${user.email} </li>`;
   parentNode.innerHTML=parentNode.innerHTML+childHTML;

}


 