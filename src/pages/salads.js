import '../styles/meals-menu.css';

const createSalads = (() => {
    function SaladsRecipes (name, description, time){
        this.name = name
        this.description = description
        this.time = time
    }

    SaladsRecipes.prototype.createDivs = function () {
        const saladMeal = document.createElement('div');
        let str = this.name.replace(/\s+/g, '');
        saladMeal.classList.add(str)
        const text1 = document.createElement('p');
        text1.textContent = this.name
        const text2 = document.createElement('p');
        text2.textContent = this.description
        const text3 = document.createElement('p');
        text3.textContent = this.time

        mainDiv.appendChild(saladMeal);
        saladMeal.appendChild(text1)
        saladMeal.appendChild(text2)
        saladMeal.appendChild(text3)

        return saladMeal
    }

    const MainmealDiv = document.createElement('div');
    MainmealDiv.classList.add('salads');
    const header = document.createElement('h1');
    header.textContent = "Salads Recipes"
    const mainDiv = document.createElement('div');
    content.append(MainmealDiv);
    MainmealDiv.appendChild(header);
    MainmealDiv.appendChild(mainDiv);


    

    const CreateRecipes = (() => {
        const greekSalad = new SaladsRecipes('Greek Salad', 'test test test', '20min');
        const carrotSalad = new SaladsRecipes('Carrot Salad', 'test test test', '20min');
        const caesarsSalad = new SaladsRecipes('Caesars Salad', 'test test test', '1h');
        greekSalad.createDivs();
        carrotSalad.createDivs();
        caesarsSalad.createDivs();
    })

    return CreateRecipes();
})
export default createSalads;