// buttens met eventlistener en print functie met log
const Lion = document.querySelector(".big-five-button1");
 Lion.addEventListener('click',showSelected,printLion, e => {
                                                                                                                        ;
 });
 function printLion(){ console.log("Lion")};

const Leopard = document.querySelector(".big-five-button2");
 Leopard.addEventListener('click',showSelected,printLeopard, e => {
    
});
 function printLeopard() {console.log("Leopard")};

const Elephant = document.querySelector(".big-five-button3");
 Elephant.addEventListener('click',showSelected,printElephant, e => {
 
});
function printElephant(){console.log("Elephant")};

const Rhino = document.querySelector(".big-five-button4");
 Rhino.addEventListener('click',showSelected,printRhino, e => {
    
});
function printRhino(){console.log("Rhino")};

const Buffalo = document.querySelector(".big-five-button5");
 Buffalo.addEventListener('click',showSelected,printBuffalo, e => {
   
});
function printBuffalo(){console.log("Buffalo")};


//click registratie en toevoegen list element
function showSelected () {
   
    if(this.click){ 
       
        const ListElement = document.createElement("li");
        ListElement
        ListElement.classList.add("spotted-animals-list-item");
        ListElement
         const List = document.getElementById("spotted-animals-list");
         List
         
         List.appendChild(ListElement);
        ListElement.innerHTML = (this.value); 
       console.log(this.value);
};  };
//verwijderen van eerste list item
  const removeChild = document.getElementById("remove-first-item-button");
  removeChild.addEventListener('click',removeElement);

  function removeElement() {
    if(this.click){
    
    const parent = document.getElementById("spotted-animals-list");
    parent
    const child = parent.getElementsByClassName("spotted-animals-list-item")[0];
    child
    parent.removeChild(child);
    
    console.log();
  }};
 //verwijderen van alle list items 
  const removeAllAnimals = document.getElementById("remove-all-button");
  removeAllAnimals.addEventListener('click',removeAll);

  function removeAll() {
    if(this.click){
       const parent =  document.getElementById('spotted-animals-list');
      while(parent.firstChild){parent.removeChild(parent.firstChild);} 
    }
 };