import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TodoModule } from './todo/todo.module';
import { CoreModule } from './core/core.module';

import { AngularFireModule } from 'angularFire2';
import { environment } from '../environments/environment';
import { AngularFireDatabase } from 'angularfire2/database';
@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        CoreModule,
        AppRoutingModule,
        TodoModule,
        AngularFireModule.initializeApp(environment.firebase)
    ],
    providers: [AngularFireDatabase],
    bootstrap: [AppComponent]
})
export class AppModule {
}
