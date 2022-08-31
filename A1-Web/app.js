
// let form = document.getElementById("form");
// form.addEventListener('submit', function(event){
//     event.preventDefault();
//     let form_name = document.getElementById("form-name").value;
//     let form_image = document.getElementById("form-image").value;
//     let form_gredient = document.getElementById("form-gredient").value;
//     let form_description = document.getElementById("form-description").value;

//     let f = document.createElement("div");
//     f.classList.add("recipe-card");

//     let img = document.createElement("img");
//     img.src = `${form_image}`;
//     img.classList.add("recipe-image");
//     f.appendChild(img);

//     let title = document.createElement("h3");
//     title.classList.add("recipe-header"); 
//     let title_text = document.createTextNode(form_name);
//     title.appendChild(title_text);
//     f.appendChild(title);

//     let gredient = document.createElement("div");
//     gredient.classList.add("recipe-gredient");
//     let gredient_content = document.createTextNode(form_gredient);
//     gredient.appendChild(gredient_content);
//     f.appendChild(gredient);


//     let description = document.createElement("div");
//     description.classList.add("recipe-description");
//     let description_content = document.createTextNode(form_description);
//     gredient.appendChild(description_content);
//     f.appendChild(description);

//     console.log(f);

//     panel_recipes.appendChild(f);
// });
