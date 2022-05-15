import {Recipe} from "./recipe.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredients/ingredients.model";
import {ShoppingListService} from "../shoping-list/shopping-list.service";

@Injectable()
export class RecipeService{
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] =[
    new Recipe(
      'Negresa',
      'For those who have gluten intolerance, most sweets are forbidden, but not this 3-ingredient blackberry, without flour. You prepare it very quickly, cheaply and with a little hassle.',
      'http://www.gustoase.net/wp-content/uploads/2019/07/bun-21.jpg',
      [ new Ingredient('Chocolate flakes',0.2),
        new Ingredient('Eggs',4),
        new Ingredient('Baking powder',4)
      ]
    ),
    new Recipe(
      'Saucy bean baked eggs',
      'Make these five-ingredient baked eggs with tomatoes and beans using storecupboard staples. It\'s a quick, easy, tasty and healthy dish',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/saucy-bean-baked-eggs-d582e18.jpg?quality=90&webp=true&resize=300,272',
    [
      new Ingredient('Cherry tomatoes',0.8),
      new Ingredient('Mixed bean salad',0.4),
      new Ingredient('Baby spinach',0.2),
      new Ingredient('Medium eggs',4),
      new Ingredient('Ham',0.05)
    ]
    )
  ];

  constructor(private slService:ShoppingListService) {

  }
  getRecipe(id:number):Recipe{
    return this.recipes[id];
  }
  getRecipes(){
    return this.recipes.slice();
  }
  addIngredToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);

  }
}
