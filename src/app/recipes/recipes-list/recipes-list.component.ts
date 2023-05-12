import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent {
     recipes: Recipe[] = [
      new Recipe('Recipe Test','Recipe Test Description',
      'https://www.bibbyskitchenat36.com/wp-content/uploads/2021/01/DSC_9104-1.jpg'),
      new Recipe('Recipe Test','Recipe Test Description',
      'https://www.bibbyskitchenat36.com/wp-content/uploads/2021/01/DSC_9104-1.jpg')
     ]
}
