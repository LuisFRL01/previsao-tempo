import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookmarksPage } from './bookmarks.page';
import { StoreModule } from '@ngrx/store';
import { bookmarkReducer } from './state/bookmarks.reducer';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { BookmarksEffects } from './state/bookmarks.effects';

@NgModule({
    declarations: [
        BookmarksPage
    ],
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        StoreModule.forFeature('bookmarks', bookmarkReducer),
        EffectsModule.forFeature([BookmarksEffects]),
        ComponentsModule,
    ]
})
export class BookmarksModule { }
