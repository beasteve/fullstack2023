const form = document.querySelector("#searchForm");

form.addEventListener("submit", async function(e){
    e.preventDefault();
    const searchTerm = form.elements.query.value;

    const res  = await axios.get(`https://api.tvmaze.com/singlesearch/shows?q=${searchTerm}`);
    makeImages(res.data)
    
});

const makeImages = (shows) =>{
    for(let result of shows){
        if(result.image){
            const img = document.createElement("IMG");
            img.src = result.image.medium;
            document.body.append(img);

        }
        
    }
}
// console.log(res.data.image.medium);