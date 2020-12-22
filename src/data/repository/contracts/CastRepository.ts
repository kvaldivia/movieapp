import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

export interface CastRepository {
  getCast(): Observable<any>;
  getActressDetails(id: string): Observable<any[]>;
}

export const CAST_REPOSITORY = new InjectionToken('CastRepository');
