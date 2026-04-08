import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {

  // TODO: replace with real authentication (JWT, session, etc.)
  private currentUserId: string = '215fe7fd-6adc-4e12-b2b2-14aea7bc7050';

  public getUserId(): string {
    return this.currentUserId;
  }

  public isAuthenticated(): boolean {
    return !!this.currentUserId;
  }
}
