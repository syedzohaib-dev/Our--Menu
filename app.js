const menuItems = {
    data: [
        // Breakfast items

        {
            imgURL: './assets/b1.jfif',
            heading: 'Pancakes',
            price: '$5.99',
            description: 'Fluffy pancakes served with syrup.',
            category: 'breakfast'
        },
        {
            imgURL: './assets/b2.jpg',
            heading: 'Omelette',
            price: '$6.99',
            description: 'Three-egg omelette with cheese and vegetables.',
            category: 'breakfast'
        },
        {
            imgURL: './assets/b3.jpg',
            heading: 'French Toast',
            price: '$5.49',
            description: 'French toast with powdered sugar and berries.',
            category: 'breakfast'
        },
        {
            imgURL: './assets/b4.avif',
            heading: 'Breakfast Burrito',
            price: '$7.99',
            description: 'Burrito with eggs, cheese, and sausage.',
            category: 'breakfast'
        },
        {
            imgURL: './assets/b5.jpg',
            heading: 'Bagel with Cream Cheese',
            price: '$3.49',
            description: 'Toasted bagel with cream cheese.',
            category: 'breakfast'
        },
        {
            imgURL: './assets/l1.jfif',
            heading: 'Smoothie Bowl',
            price: '$8.99',
            description: 'Smoothie bowl with granola and fruit.',
            category: 'breakfast'
        },
        // Lunch items
        {
            imgURL: './assets/l1.jfif',
            heading: 'Caesar Salad',
            price: '$7.99',
            description: 'Caesar salad with croutons and parmesan cheese.',
            category: 'lunch'
        },
        {
            imgURL: './assets/l2.jfif',
            heading: 'Club Sandwich',
            price: '$8.99',
            description: 'Turkey club sandwich with bacon, lettuce, and tomato.',
            category: 'lunch'
        },
        {
            imgURL: './assets/l3.jfif',
            heading: 'Cheeseburger',
            price: '$9.49',
            description: 'Cheeseburger with lettuce, tomato, and pickles.',
            category: 'lunch'
        },
        {
            imgURL: './assets/l4.jpg',
            heading: 'Grilled Cheese',
            price: '$5.99',
            description: 'Grilled cheese sandwich with cheddar cheese.',
            category: 'lunch'
        },
        {
            imgURL: './assets/l5.webp',
            heading: 'Chicken Wrap',
            price: '$7.49',
            description: 'Chicken wrap with lettuce and ranch dressing.',
            category: 'lunch'
        },
        {
            imgURL: './assets/l6.jpg',
            heading: 'Veggie Burger',
            price: '$8.99',
            description: 'Veggie burger with avocado and sprouts.',
            category: 'lunch'
        },
        // Shakes
        {
            imgURL: './assets/s1.jpg',
            heading: 'Chocolate Shake',
            price: '$4.99',
            description: 'Chocolate shake with whipped cream.',
            category: 'shakes'
        },
        {
            imgURL: './assets/s2.jfif',
            heading: 'Vanilla Shake',
            price: '$4.99',
            description: 'Vanilla shake with whipped cream.',
            category: 'shakes'
        },
        {
            imgURL: './assets/s3.jfif',
            heading: 'Strawberry Shake',
            price: '$4.99',
            description: 'Strawberry shake with whipped cream.',
            category: 'shakes'
        },
        {
            imgURL: './assets/s4.jfif',
            heading: 'Banana Shake',
            price: '$4.99',
            description: 'Banana shake with whipped cream.',
            category: 'shakes'
        },
        {
            imgURL: './assets/s5.jfif',
            heading: 'Oreo Shake',
            price: '$5.49',
            description: 'Oreo shake with whipped cream and cookie crumbles.',
            category: 'shakes'
        },
        {
            imgURL: './assets/s6.jfif',
            heading: 'Mint Chocolate Shake',
            price: '$5.49',
            description: 'Mint chocolate shake with whipped cream.',
            category: 'shakes'
        }
    ]
};

for (let i of menuItems.data) {
    let card = document.createElement('div')
    card.classList.add('cardBox', i.category, 'hide')

    let imgContainer = document.createElement('div')
    imgContainer.classList.add('cardImg')
    // img  tag

    let image = document.createElement('img')
    image.setAttribute('src', i.imgURL)
    imgContainer.appendChild(image)
    card.appendChild(imgContainer)

    let cardDescriptionDiv = document.createElement('div')
    cardDescriptionDiv.classList.add('cardDescription')

    let cardHeadingDiv = document.createElement('div')
    cardHeadingDiv.classList.add('cardHeading')


    let titleP = document.createElement('p')
    titleP.classList.add('title')
    titleP.textContent = i.heading

    let dollarP = document.createElement('p')
    dollarP.classList.add('dollar')
    dollarP.textContent = i.price

    let paraDiv = document.createElement('div')
    paraDiv.classList.add('cardPara')
    paraDiv.textContent = i.description

    card.append(cardDescriptionDiv)
    cardDescriptionDiv.appendChild(cardHeadingDiv)
    cardHeadingDiv.appendChild(titleP)
    cardHeadingDiv.appendChild(dollarP)
    cardDescriptionDiv.appendChild(paraDiv)


    var products = document.getElementById('products')
    products.appendChild(card)
}

function filterProduct(value) {
    let buttons = document.querySelectorAll('.button-value')
    buttons.forEach((button) => {
        if (value.toUpperCase() == button.innerText.toUpperCase()) {

            button.classList.add('active')
        } else {
            button.classList.remove('active')
        }
    })
    let elements = document.querySelectorAll('.cardBox')
    elements.forEach((element) => {
        // add some
        if (value.toLowerCase() == 'all') {
            element.classList.remove('hide')
        } else {
            // add some
            if (element.classList.contains(value.toLowerCase())) {
                element.classList.remove('hide')
            } else {
                element.classList.add('hide')
            }
        }
    })


}


window.onload = () => {
    filterProduct('all')
}






console.log(menuItems);
