//JS Doc

//Grab JSON file from server
let requestURL = 'https://superintendent-vergil.github.io/comp1073-Lab4-JSON/main.json';
//New XHR object, grabs things from the server without refresh
let request = new XMLHttpRequest();
request.open('GET',requestURL);
request.responseType = 'json';
request.send();

request.onload = function(){
    let productS = request.response;
    console.log(productS);
    strangeProducts(productS);
};

function strangeProducts(jsonObj) {
    let strangeProducts = jsonObj.strangeProducts;
    for(let i = 0; i<strangeProducts.length; i++){
        //Build HTML Elements for the content
        let article = document.createElement('article');
        let h2 = document.createElement('h2');
        let img = document.createElement('img');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let ul = document.createElement('ul');

        let section = document.querySelector('section');
        img.setAttribute('src','https://superintendent-vergil.github.io/comp1073-Lab4-JSON/img/' + strangeProducts[i].image);
        img.setAttribute('alt', strangeProducts[i].image);
        h2.textContent = strangeProducts[i].name;
        p1.textContent = 'Price' + strangeProducts[i].price;
        let details = strangeProducts[i].details;
        for (let j=0; j<details.length; j++){
            let listItem = document.createElement('li');
            listItem.textContent = details[j];
            ul.appendChild(listItem);
        }
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(p1);
        article.appendChild(p2);
        article.appendChild(ul);
        section.appendChild(article);
    }

}