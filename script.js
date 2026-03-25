

const gallery = document.getElementById("gallery");
const breedSelector = document.getElementById("breed-select");

fetch("https://dog.ceo/api/breeds/list/all")
.then(response => response.json())
.then(data => {
  const breeds = data.message;
  for (const breed in breeds) {
    const option = document.createElement('option');
    option.value = breed;
    option.textContent = breed;
    breedSelector.appendChild(option);
  }
});

breedSelector.addEventListener('change', function() {
  //const pictures = document.createElement('ul');
  const selectedBreed = breedSelector.value;
  if (selectedBreed) {
    gallery.innerHTML = "";
    //for (let i = 0; i < 9; i++) {
    fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random/9`)
    .then(response => response.json())
    .then(data => {
      const urls = data.message;
      //for (const imageURL in urls) {
      urls.forEach(imageURL => {
        const galleryItem = document.createElement('div');
        galleryItem.classList.add('gallery-item');

        const img = document.createElement('img');
        img.src = imageURL;
        img.alt = selectedBreed;
        //pictures.appendChild(img);
        galleryItem.appendChild(img);
        gallery.appendChild(galleryItem)
      });
    });
    //}
    
    //gallery.appendChild(pictures);
  }
});