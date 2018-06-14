import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppPage } from './app.page';
import { AppRouting } from './app.routing';

@NgModule({
    declarations: [
        AppPage,
    ],
    imports: [
        BrowserModule,
        AppRouting
    ],
    bootstrap: [
        AppPage
    ]
})
export class AppModule {
}
