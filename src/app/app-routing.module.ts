import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkExpComponent } from './work-exp/work-exp.component';


const routes: Routes = [
    //{ path: '', redirectTo: '/about', pathMatch: 'full' },
    { path: '', component: AboutMeComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'about', component: AboutMeComponent },
    { path: 'skills', component: SkillsComponent },
    { path: 'work', component: WorkExpComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
