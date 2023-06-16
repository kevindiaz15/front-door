import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { OpinionsComponent } from './pages/opinions/opinions.component';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { CreateComponent } from './user/create/create.component';
import { ProfileComponent } from './user/profile/profile.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ProductsComponent } from './pages/products/products.component';

const routes: Routes = [
  {path:'user', component:UserComponent, loadChildren:() =>
  import('./user/user.module')
  .then(m => m.UserModule)
  },
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'comentarios', component: OpinionsComponent},
  {path: 'create', component: CreateComponent},
  {path: 'user/profile', component: ProfileComponent},
  {path: 'blog', component:BlogsComponent},
  {path: 'aboutus', component: AboutusComponent},
  {path: 'products', component: ProductsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
