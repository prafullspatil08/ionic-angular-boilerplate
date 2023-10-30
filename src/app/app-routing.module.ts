import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./features/example-feature/example-feature.module').then((m) => m.ExampleFeatureModule),
  },
  {
    path: 'standalone',
    loadChildren: () => import('./features/standalone-component/standalone-component.component').then((m) => m.StandaloneComponentComponent),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
