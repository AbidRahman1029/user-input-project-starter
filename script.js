let formContainer = document.querySelector('.form_container');
let titleInput = document.getElementById('title_input');
let mainTitle = document.getElementById('main_title');
let nounInput = document.getElementById('noun');
let verbInput = document.getElementById('verb');
let adjectiveInput = document.getElementById('adjective');
let storyResult = document.getElementById('story_result');

titleInput.oninput = function() 
{
    mainTitle.textContent = this.value;
}
formContainer.addEventListener('submit', function(event) 
{
    event.preventDefault();
    let title = titleInput.value;
    let noun = nounInput.value;
    let verb = verbInput.value;
    let adjective = adjectiveInput.value;
    if (!title || !noun || !verb || !adjective) 
    {
        alert("Please fill in all sections before submitting!");
        return;
    }
    mainTitle.textContent = title;
    let story = "Once upon a time, there was a very " + adjective + " " + noun + " who loved to " + verb + " all day long.";
    storyResult.textContent = story;
    formContainer.style.display = 'none';
}
)