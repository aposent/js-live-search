const ul = document.querySelector('ul')
const input = document.querySelector('input')

render_fruits(fruits)

input.addEventListener('keyup', filter_fruits)

function render_fruits(list) {
    let li = ''

    if (list.length === 0) {
        li = `<li>Not results found</li>`
        ul.innerHTML = li
        return
    }

    list.forEach(fruit => {
        li += `
            <li>
                <picture>
                    <img src="${fruit.imgSrc}" alt="${fruit.name}">
                </picture>
                <h4>${fruit.name}</h4>
            </li>
        `
    });

    ul.innerHTML = li
}

function filter_fruits() {
    const key = input.value.toLocaleLowerCase()

    const filtered_fruits = fruits.filter( fruit => {
        let fruitName = fruit.name.toLowerCase()
        return fruitName.indexOf(key) > -1
    })
    
    render_fruits(filtered_fruits)
}
