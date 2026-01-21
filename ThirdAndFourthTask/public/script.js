const list = document.getElementById("fours");
const inputAdd = document.getElementById("inputAdd");
const inputSearch = document.getElementById("inputSearch");

const getFours = async () => {
    const fours = await fetch("http://localhost:4444/fours").then(r => r.json());
    list.innerHTML = fours.map(e => `<tr><td>${e.id}</td><td>${e.fours}</td></tr>`).join('');
};

getFours();

document.getElementById("btnadd").addEventListener("click", async () => {
    try {
        const response = await fetch("http://localhost:4444/fours", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: `{"four": "[${inputAdd.value}]"}`
        });
        if (!response.ok){
            const r = await response.json();
            alert(r.message);
        }
        console.log(response)
        inputAdd.value = "";
        getFours();
    }
    catch (err) {
        console.log(err)
    }
});

document.getElementById("btnsearch").addEventListener("click", async () => {
    if (inputSearch.value == "")
        return;
    const response = await fetch("http://localhost:4444/fours/"+ inputSearch.value);
    const r = await response.json();
    console.log(r);
    if (!response.ok) 
        alert(r.message);
    else 
        alert("A keresett négyes: "+r.fours);
});