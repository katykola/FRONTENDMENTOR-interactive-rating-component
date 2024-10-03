const ratings = document.querySelectorAll('.rating-value');

const submitButton = document.querySelector('#submit-rating');
const selectedValue = document.querySelector('.selected-value');
const ratingCard = document.querySelector('.rating');
const thankYouCard = document.querySelector('.thank-you');

// Disable submit button initially
submitButton.disabled = true;

function selectedRating(){
    ratings.forEach(function(rating) {
        rating.addEventListener('click', function() {
            // Remove selected class from all elements
            ratings.forEach(function(rating) {
                rating.classList.remove('selected');
            });
            // Add selected class to the clicked element
            this.classList.add('selected');
            selectedValue.innerHTML = this.value;
              // Enable submit button
            submitButton.disabled = false;
        });
    }); 
}


selectedRating();

submitButton.addEventListener('click', function(){
        ratingCard.style.display = 'none';
        thankYouCard.style.display = 'block';

})

