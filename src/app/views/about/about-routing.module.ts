import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ViewsAboutComponent} from "./views-about/views-about.component";

const routes: Routes = [
    {
        path: '',
        component: ViewsAboutComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AboutRoutingModule {
}
