// check whether the photo is showed
let photoVisible = false;

// display text on page depends on the user input
document.getElementById('textInput').addEventListener('input', function() {
    let inputText = this.value;
    document.getElementById('textInputOutput').innerText = inputText;
});

// random color
function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

// slider bar+ change bg color of the page
document.getElementById('slider').addEventListener('input', function() {
    let value = this.value;
    document.body.style.backgroundColor = `hsl(${value}, 100%, 50%)`;
});

// button to toggle photo 
document.getElementById('showPhotoButton').addEventListener('click', function() {
    if (photoVisible) {
        document.getElementById('photo').style.display = 'none'; 
        // Hide the photo
    } else {
        document.getElementById('photo').style.display = 'block'; 
        // Show the photo
        document.getElementById('photo').src = 'https://assets.wfcdn.com/im/89769966/resize-h445%5Ecompr-r85/2312/231261784/Dark+Blue+Dahlia+Flower+On+Canvas+Print.jpg';
        //url of the photo
    }
    // Toggle the state of the button
    photoVisible = !photoVisible;
});
