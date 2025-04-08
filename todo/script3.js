const inputBox=document.getElementById("text");
const listcontainer=document.getElementById("list");

function add()
{
    if(inputBox.value=== '')
        {
            alert("you must write something");
        }
    else
    {
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listcontainer.appendChild(li);
        let span=document.createElement("button");
        li.appendChild(span);
    }
    inputBox.value="";
    clicksound.play();
    saveData1();

}
listcontainer.addEventListener("click",function(e){
    if(e.target.tagName=="LI")
        {
            e.target.classList.toggle("checked");
            checksound.play();
            saveData1();
        }
    else if(e.target.tagName=="BUTTON")
        {
            e.target.parentElement.remove();
            clicksound.play();
            saveData1();
        }
},false);

function saveData1()
{
    localStorage.setItem("data",listcontainer.innerHTML);
}
function showtask()
{
    listcontainer.innerHTML=localStorage.getItem("data");
}
showtask();

