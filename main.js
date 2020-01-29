// 8 ducks
// 5 male
// 3 female
// 5 rubber
// 3 real
// pick 3 colors

// ARRAY OF DUCKS
const ducks = [
    {
        color: 'blue',
        isRubber: true ,
        gender: 'female',
        isMigrator: false,
        socialStatus: 'ready to mingle',
        diet: 'vegan',
        age: 47,
        featherNum: 0,
        name: 'Regina',
        imageUrl: 'https://i.pinimg.com/236x/d7/68/dd/d768dd77a468d0fb8e84c382cf69cd09--duck-duck-duck-eggs.jpg'
    },
    {
        color: 'yellow',
        isRubber: true ,
        gender: 'female',
        isMigrator: true,
        socialStatus: 'ready to fly',
        diet: 'only eggs',
        age: 77,
        featherNum: 0,
        name: 'Ruby',
        imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71Bn2jnG6gL._SX425_.jpg'
    },
    {
        color: 'green',
        isRubber: false ,
        gender: 'female',
        isMigrator: false,
        socialStatus: 'party every day',
        diet: 'vegan',
        age: 39,
        featherNum: 1000,
        name: 'Amy',
        imageUrl: 'http://www.corlaci.com/wp-content/uploads/Forest_04_08.jpg'
    },
    {
        color: 'green',
        isRubber: false ,
        gender: 'male',
        isMigrator: true,
        socialStatus: 'ready to mingle',
        diet: 'anything he can digest',
        age: 100,
        featherNum: 94,
        name: 'Aurthor',
        imageUrl: 'https://live.staticflickr.com/3115/3179800771_e0f22306b9_b.jpg'
    },
    {
        color: 'yellow',
        isRubber: false ,
        gender: 'male',
        isMigrator: false,
        socialStatus: 'married with kids',
        diet: 'meat',
        age: 52,
        featherNum: 523,
        name: 'Joshua',
        imageUrl: 'https://live.staticflickr.com/224/484421155_bf1476eb22_b.jpg'
    },
    {
        color: 'blue',
        isRubber: true ,
        gender: 'male',
        isMigrator: false,
        socialStatus: 'sleeping mostly',
        diet: 'vegan',
        age: 32,
        featherNum: 0,
        name: 'William',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJvOnluRNya1qRnw1HettOcKK-R0dFAg2rvKnyuWufw7a2wKsV'
    },
    {
        color: 'yellow',
        isRubber: true ,
        gender: 'male',
        isMigrator: false,
        socialStatus: 'chillin\'',
        diet: 'junk food',
        age: 28,
        featherNum: 0,
        name: 'Henry',
        imageUrl: 'https://www.amsterdamduckstore.com/wp-content/uploads/2015/07/yellow-crown-rubber-duck-leaning.jpg'
    },
    {
        color: 'green',
        isRubber: true ,
        gender: 'male',
        isMigrator: false,
        socialStatus: 'not ready to mingle',
        diet: 'anything good',
        age: 23,
        featherNum: 0,
        name: 'Buddy',
        imageUrl: 'https://cdn11.bigcommerce.com/s-nf2x4/products/503/images/10447/Green-Rubber-Duck-Ad-Line-3__60140.1569352483.560.850.jpg?c=2'
    },
];

// PRINT TO DOM
const duckPrinter = (divId, textToPrint) => {
    const selectedId = document.getElementById(divId);
    selectedId.innerHTML = textToPrint;
}

// DUCK BUILDER
const duckBuilder = (quacks) => {
    let domString = '';
    for (let i = 0; i < quacks.length; i++) {
        domString += '<div class="col-md-6 col-lg-4 card-separation">';
        domString += '<div class="card">';
        domString += `  <img src="${quacks[i].imageUrl}" class="card-img-top" alt="...">`;
        domString += '  <div class="card-body">';
        domString += `     <h5 class="card-title">${quacks[i].name}</h5>`;
        domString += `     <p class="card-text">${quacks[i].socialStatus}</p>`;
        domString += `     <p class="card-text">${quacks[i].diet}</p>`;
        domString += '  </div>';
        domString += '</div>';    
        domString += '</div>';    
    }
    duckPrinter('pond', domString);
};

// FILTER FUNCTIONS

const chooseColor = (e) => {
    const buttonId = e.target.id;
    const selectedDucks = [];
    for (let i = 0; i < ducks.length; i++)
        if (ducks[i].color === buttonId) {
            selectedDucks.push(ducks[i]);
        }
    duckBuilder(selectedDucks);
};


const chooseGender = (e) => {
    const buttonId = e.target.id;
    const selectedDucks = [];
    for (let i = 0; i < ducks.length; i++)
        if (ducks[i].gender === buttonId) {
            selectedDucks.push(ducks[i]);
        }
    duckBuilder(selectedDucks);
};

const chooseRubber = (e) => {
    const buttonId = e.target.id;
    const selectedDucks = [];
    for (let i = 0; i < ducks.length; i++)
        if (ducks[i].isRubber) {
            selectedDucks.push(ducks[i]);
        }
    duckBuilder(selectedDucks);
};

// EVENTS
const events = () => {
document.getElementById('blue').addEventListener('click', chooseColor);
document.getElementById('green').addEventListener('click', chooseColor);
document.getElementById('yellow').addEventListener('click', chooseColor);
document.getElementById('female').addEventListener('click', chooseGender);
document.getElementById('male').addEventListener('click', chooseGender);
document.getElementById('rubber').addEventListener('click', chooseRubber);
};

// INITIAL FUNCTION
const init = () => {
    duckBuilder(ducks);
    events();
};

init();
