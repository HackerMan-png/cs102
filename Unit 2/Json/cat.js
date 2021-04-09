let input = `{
	"title": "Cat Families",
	"intro": "This is a list of cats and their mother that we are breeding. If you are interested in adopting please contact us",
	"cats": [
	{
		"name": "Lindy",
		"breed": "Cymric",
		"color": "white",
		"kittens": [
		{
			"name": "Percy",
			"gender": "m"
		},
		{
			"name": "Thea",
			"gender": "f"
		},
		{
			"name": "Annis",
			"gender": "f"
		}
		]
	},
	{
		"name": "Mina",
		"breed": "Aphrodite Giant",
		"color": "ginger",
		"kittens": [
		{
			"name": "Doris",
			"gender": "f"
		},
		{
			"name": "Pickle",
			"gender": "f"
		},
		{
			"name": "Max",
			"gender": "m"
		}
		]
	},
	{
		"name": "Antonia",
		"breed": "Ocicat",
		"color": "leopard spotted",
		"kittens": [
		{
			"name": "Bridget",
			"gender": "f"
		},
		{
			"name": "Randolph",
			"gender": "m"
		}
		]
	}
	]
}`;

let header = document.getElementById("header");
let section = document.getElementById("section");

init(input);

function init(input) {
    let catsObj = JSON.parse(input);
    createHeader(catsObj);
    createSection(catsObj);
}

function createHeader(obj) {
    // Header
    const _h1 = document.createElement("h1");
    _h1.textContent = obj["title"];
    header.appendChild(_h1);

    // Subheader
    const _p = document.createElement("p");
    _p.textContent = obj["intro"];
    header.appendChild(_p);
}

function createSection(obj) {
    const _cats = obj["cats"];
    for (cat in _cats) {
        const _article = document.createElement("article");
        const _h2 = document.createElement("h2");
        const _p1 = document.createElement("p");
        const _p2 = document.createElement("p");
        const _list = document.createElement("ul");

        _h2.textContent = `Name: ${_cats[cat]["name"]}`;
        _p1.textContent = `Breed: ${_cats[cat]["breed"]}`;
        _p2.textContent = `Color: ${_cats[cat]["color"]}`;
		_list.textContent = `Kittens:`

        const _kittens = _cats[cat]["kittens"];
        for (kitten in _kittens) {
            const _listItem1 = document.createElement("li");
            const _listItem2 = document.createElement("li");

            _listItem1.textContent = `Name: ${_kittens[kitten]["name"]}`;
            _listItem2.textContent = `Gender: ${_kittens[kitten]["gender"]}`;

            _list.appendChild(_listItem1);
            _list.appendChild(_listItem2);
        }
        _article.appendChild(_h2);
        _article.appendChild(_p1);
        _article.appendChild(_p2);
        _article.appendChild(_list);

        section.appendChild(_article);
    }
}
