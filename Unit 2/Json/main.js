let string = `{
	"squadName": "Super hero squad",
	"homeTown": "Metro City",
	"formed": 2016,
	"secretBase": "Super tower",
	"active": true,
	"members": [
		{
			"name": "Molecule Man",
			"age": 29,
			"secretIdentity": "Dan Jukes",
			"powers": [
				"Radiation resistance",
				"Turning tiny",
				"Radiation blast"
			]
		},
		{
			"name": "Madame Uppercut",
			"age": 39,
			"secretIdentity": "Jane Wilson",
			"powers": [
				"Million tonne punch",
				"Damage resistance",
				"Superhuman reflexes"
			]
		},
		{
			"name": "Eternal Flame",
			"age": 1000000,
			"secretIdentity": "Unknown",
			"powers": [
				"Immortality",
				"Heat Immunity",
				"Inferno",
				"Teleportation",
				"Interdimensional travel"
			]
		}
	]
}`;

let header = document.getElementById('header');
let section = document.getElementById('section');

init(string);

function init(string) {
    let superObj = JSON.parse(string);
    createHeader(superObj);
    createSection(superObj);
}

//create the header content for the HTML
function createHeader(obj) {
    //create an h1 in the header using the JSON
    const _h1 = document.createElement('h1');
    _h1.textContent = obj['squadName'];
    header.appendChild(_h1);

    // Creates the isActive based on the boolean obj["active"]
    let isActive = '';
    if (obj['active'] == true) {
        isActive = 'They are currently active';
    } else {
        isActive = 'They are currently on vacation';
    }

    //create a subheader
    const _para = document.createElement('p');
    _para.textContent = `Home Town: ${obj['homeTown']} || Formed: ${obj['formed']} || ${isActive}`;
    header.appendChild(_para);
}

// Create information about all of the heroes in the city
function createSection(obj) {
    const _heroes = obj['members'];
    for (hero in _heroes) {
        const _article = document.createElement('article');
        const _h2 = document.createElement('h2');
        const _p1 = document.createElement('p');
        const _p2 = document.createElement('p');
        const _p3 = document.createElement('p');
        const _list = document.createElement('ul');

        _h2.textContent = _heroes[hero]['name'];
        _p1.textContent = `Secret Identity: ${_heroes[hero]['secretIdentity']}`;
        _p2.textContent = `Age: ${_heroes[hero]['age']}`;
        _p3.textContent = `Super Powers:`;

        const _powers = _heroes[hero]['powers'];
        for (power in _powers) {
            const _listItem = document.createElement('li');
            _listItem.textContent = _powers[power];
            _list.appendChild(_listItem);
        }
        _article.appendChild(_h2);
        _article.appendChild(_p1);
        _article.appendChild(_p2);
        _article.appendChild(_p3);
        _article.appendChild(_list);

        section.appendChild(_article);
    }
}
