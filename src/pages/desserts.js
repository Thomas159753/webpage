import '../styles/meals-menu.css';

const createDesserts = (() => {
    function dessertRecipes (name, description, time){
        this.name = name
        this.description = description
        this.time = time
    }

    dessertRecipes.prototype.createDivs = function () {
        const dessertMeal = document.createElement('div');
        let str = this.name.replace(/\s+/g, '');
        dessertMeal.classList.add(str)
        const text1 = document.createElement('p');
        text1.textContent = this.name
        const text2 = document.createElement('p');
        text2.textContent = this.description
        const text3 = document.createElement('p');
        text3.textContent = this.time

        mainDiv.appendChild(dessertMeal);
        dessertMeal.appendChild(text1)
        dessertMeal.appendChild(text2)
        dessertMeal.appendChild(text3)

        return dessertMeal
    }

    const MainmealDiv = document.createElement('div');
    MainmealDiv.classList.add('desserts');
    const header = document.createElement('h1');
    header.textContent = "Dessert Recipes"
    const mainDiv = document.createElement('div');
    content.append(MainmealDiv);
    MainmealDiv.appendChild(header);
    MainmealDiv.appendChild(mainDiv);


    

    const CreateRecipes = (() => {
        const applePie = new dessertRecipes('Apple Pie', 'test test test', '20min');
        const iceCream = new dessertRecipes('Ice Cream', 'test test test', '20min');
        const bread = new dessertRecipes('Bread', 'test test test', '1h');
        applePie.createDivs();
        iceCream.createDivs();
        bread.createDivs();
    })

    return CreateRecipes();
})
export default createDesserts;