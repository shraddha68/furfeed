async function loadDog() {
    const dogStatus=document.getElementById('dogStatus');
    const dogImage=document.getElementById("dogImage");
    const dogFact=document.getElementById("dogFact");
    dogFact.innerText="";
    dogStatus.innerText="Dog is loading...";

    try{
        const dogPromiseImage=fetch('https://dog.ceo/api/breeds/image/random');
        const dogPromiseFact=fetch('https://dogapi.dog/api/v2/facts');

        const [dogResponseImage,dogResponseFact] =await Promise.all([dogPromiseImage,dogPromiseFact]);

        const dogDataImage=await dogResponseImage.json();
        dogImage.src=dogDataImage.message;

        const dogDataFact=await dogResponseFact.json();

        dogImage.onload=()=>{
            dogImage.style.opacity=1;
            dogFact.innerText=dogDataFact.data[0].attributes.body;
            dogStatus.innerText="Here's your dog!";
        };
    }
    catch(error){
        console.log("Error: ",error);
        dogStatus.innerText="Failed to load dog!";
    }
}

async function loadCat(){
    const catStatus=document.getElementById('catStatus');
    const catImage=document.getElementById("catImage");
    const catFact=document.getElementById('catFact');
    catFact.innerText="";
    catStatus.innerText="Cat is loading...";

    try{
        const catPromiseImage=fetch('https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg');
        const catPromiseFact=fetch('https://catfact.ninja/fact');

        const [catResponseImage, catResponseFact]=await Promise.all([catPromiseImage,catPromiseFact]);

        const catDataImage=await catResponseImage.json();
        catImage.src=catDataImage[0].url;

        const catDataFact=await catResponseFact.json();

        catImage.onload=()=>{
            catImage.style.opacity=1;
            catFact.innerText=catDataFact.fact;
            catStatus.innerText="Here's your cat!";
        };
    }
    catch(error){
        console.log("Error: ",error);
        catStatus.innerText="Failed to load cat!";
    }
}

loadDog();
loadCat();

const dogButton=document.getElementById("newDogButton");
dogButton.addEventListener("click",loadDog);
const catButton=document.getElementById("newCatButton");
catButton.addEventListener("click",loadCat);
