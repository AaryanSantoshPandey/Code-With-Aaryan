console.log("Script running...")

document.querySelector('.cross').style.display = 'none';
document.querySelector('.humburger').addEventListener("click", ()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo'); 
})
