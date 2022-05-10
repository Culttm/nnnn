import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ViewsMainComponent} from "./views-main/views-main.component";

const routes: Routes = [
    {
        path: '',
        component: ViewsMainComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainRoutingModule {
}
