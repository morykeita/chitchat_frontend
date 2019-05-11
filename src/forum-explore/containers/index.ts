import {CategoriesComponent} from './categories/categories.component';
import {PupularCategoriesItemComponent} from './pupular-categories-item/pupular-categories-item.component';
import {CategoryItemComponent} from './category-item/category-item.component'
import {HomeComponent} from '../containers/home/home.component';

export const containers : any [] = [CategoriesComponent,PupularCategoriesItemComponent,HomeComponent];

export * from './categories/categories.component';
export * from './pupular-categories-item/pupular-categories-item.component';
export * from './category-item/category-item.component';
export * from '../containers/home/home.component';