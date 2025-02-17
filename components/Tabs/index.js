// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

let divMaster = document.querySelector('.topics')

let data = axios
    .get('https://lambda-times-backend.herokuapp.com/topics')
    .then(result => {
        result.data.topics.forEach((cv) => {
            let topic = document.createElement('div');
            topic.classList.add('tab');
            topic.textContent = `${cv}`;
            divMaster.appendChild(topic)
        })
    })
    .catch(denied => {
        console.log('error', denied)
    });

