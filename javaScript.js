function blogBtn() {
    window.location.href = 'blog.html';
}
// main js

let heandelCategory = async () => {
    let res = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    let data = await res.json();

    let btnDiv = document.getElementById('btnDiv')
    const categories = data.data;
    categories.forEach(categorie => {
        let div = document.createElement('div')
        div.innerHTML = `
        <button onclick="onclickHandler('${categorie.category_id}')" class="btn btn-active btn-ghost">${categorie.category}</button>
        `
        btnDiv.appendChild(div);
    });
}

// Onclick____________________________________

let onclickHandler = async (categoryId) => {
    // console.log(categoryId)
    let res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`)
    let data = await res.json();

    let cardDiv = document.getElementById('cardDiv')
    cardDiv.innerHTML = '';
    const cardData = data.data
    cardData.forEach(card => {
        let div = document.createElement('div')
        div.innerHTML = `
        <div class="card rounded bg-base-100 shadow-xl">
            <figure class="max-h-40"><img src="${card.thumbnail}" /></figure>
            <div class="card-body pr-0 flex-row">
                <div class="h-[60px] w-9"><div class="h-9 w-9"><img class="h-[100%] w-[100%] profilePic" src="${card.authors[0].profile_picture}"></div></div>
                <div>
                    <h1 class="text-xl font-semibold">${card.title}</h1>
                    <p>${card.authors[0].profile_name}</p>
                    <span></span>
                    <p>${card.others.views}</p>
                </div>
            </div>
        </div>
        `
        cardDiv.appendChild(div);
    });

}
onclickHandler('1000')
heandelCategory()