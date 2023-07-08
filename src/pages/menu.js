import '../styles/meals-menu.css';

const createMeals = (() => {
    function mealsRecipes (name, description, time){
        this.name = name
        this.description = description
        this.time = time
    }

    mealsRecipes.prototype.createDivs = function () {
        const divMeal = document.createElement('div');
        divMeal.classList.add(this.name)

        const text1 = document.createElement('p');
        text1.textContent = this.name
        const text2 = document.createElement('p');
        text2.textContent = this.description
        const text3 = document.createElement('p');
        text3.textContent = this.time

        mainDiv.appendChild(divMeal);
        divMeal.appendChild(text1)
        divMeal.appendChild(text2)
        divMeal.appendChild(text3)

        return divMeal
    }

    const MainmealDiv = document.createElement('div');
    MainmealDiv.classList.add('meals');
    const header = document.createElement('h1');
    header.textContent = "Meals Recipes"
    const mainDiv = document.createElement('div');
    content.append(MainmealDiv);
    MainmealDiv.appendChild(header);
    MainmealDiv.appendChild(mainDiv);


    

    const CreateRecipes = (() => {
        const pasta = new mealsRecipes('Pasta', 'test test test', '20min');
        const steak = new mealsRecipes('Steak', 'test test test', '20min');
        const snichels = new mealsRecipes('Snitchels', 'test test test', '1h');
        pasta.createDivs();
        steak.createDivs();
        snichels.createDivs();
    })

    return CreateRecipes();
})
export default createMeals;