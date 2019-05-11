import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ForumRoutingModule } from './forum-routing';


// components

import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';


import {reducers,effects} from './store';
import { PupularCategoriesItemComponent } from './containers/pupular-categories-item/pupular-categories-item.component';
import { CategoriesComponent } from './containers/categories/categories.component';
import { CategoryItemComponent } from './containers/category-item/category-item.component';
import { HomeComponent } from './containers/home/home.component';
import { HeaderComponent } from './containers/header/header.component';
import { RightNavBarComponent } from './containers/right-nav-bar/right-nav-bar.component';
import { BannerComponent } from './containers/banner/banner.component';
import { RoomDisplayComponent } from './components/room-display/room-display.component';
import { PostDisplayComponent } from './components/post-display/post-display.component';
import { CommnentDisplayComponent } from './components/commnent-display/commnent-display.component';
import { RoomComponent } from './containers/room/room.component';
import { PostComponent } from './containers/post/post.component';


// containers

// services


// routees

@NgModule({
  declarations: [PupularCategoriesItemComponent, CategoriesComponent, CategoryItemComponent, HomeComponent, HeaderComponent, RightNavBarComponent, BannerComponent, RoomDisplayComponent, PostDisplayComponent, CommnentDisplayComponent, RoomComponent, PostComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    ForumRoutingModule,
    StoreModule.forFeature('forum',reducers),
    EffectsModule.forFeature(effects),
  
    
  ]
})
export class ForumExploreModule { }
