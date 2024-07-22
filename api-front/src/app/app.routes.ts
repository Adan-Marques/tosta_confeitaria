import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { DetalhesComponent } from './detalhes/detalhes.component';
export const routes: Routes = [

    {path:"", component:HomeComponent},
    {path:"home", component:HomeComponent},
    {path:"login", component:LoginComponent},
    {path:"carrinho", component:CarrinhoComponent},
    {path:"register", component:CadastrarComponent},
    {path:"detalhes/:id", component: DetalhesComponent},
];
