import { inject, Injectable } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { LoginserviceService } from '../loginservice.service';

export const accessTokenGuardGuard: CanActivateFn = (route, state) => {

  const authService = inject(LoginserviceService);
  const router = inject(Router);

  // const autorizaciónToken = route.data?.['token'];

    return authService.obtenerToken().pipe(
      tap(valido => {
        if (!valido) {
          alert("Acceso Denegado, token inválido o expirado");
          router.navigate(['/login']);
        }
      })
    );
}