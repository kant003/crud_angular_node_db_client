import { Routes } from '@angular/router';
import { StudentCrudComponent } from './pages/student-crud/student-crud.component';
import { authGuard } from './core/auth/auth.guard';
import { LoginPage } from './pages/login/login.page';
import { RegisterPage } from './pages/register/register.page';
import { AuthCallbackPage } from './pages/auth-callback/auth-callback.page';

export const routes: Routes = [
  { path: 'login', component: LoginPage },
  { path: 'register', component: RegisterPage },
  { path: 'auth/callback', component: AuthCallbackPage }, // Google vuelve aquí
  { path: '', component: StudentCrudComponent, canActivate: [authGuard] },
  { path: '**', redirectTo: '' }
];