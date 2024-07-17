import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { DetalhesComponent } from './detalhes/detalhes.component';
export const routes: Routes = [

    {path:"home", component:HomeComponent},
    {path:"login", component:LoginComponent},
    {path:"carrinho", component:CarrinhoComponent},
    {path:"detalhes/:id", component: DetalhesComponent},
];
