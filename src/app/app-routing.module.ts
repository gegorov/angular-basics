import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';

const routes = [
    {
        path: '',
        component: HomePageComponent,
        pathMatch: 'full',
    },
    {
        path: 'about',
        loadChildren: './about-page/aboute-page.module#AboutPageModule',
    },
];
@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            preloadingStrategy: PreloadAllModules,
        }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
