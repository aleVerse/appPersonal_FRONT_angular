import { Injectable } from '@angular/core';
import { TecnologiaInfo } from '../model/TecnologiaInfo.model';
import { Observable, of } from 'rxjs';
import { TECNOLOGIASINFO_MOCK } from '../mocks/tecnologiasInfo_Mock';

@Injectable({
  providedIn: 'root'
})
export class PersonalApiCRUDService {

  constructor() { }

  getTecnologias(): Observable<TecnologiaInfo[]> {
    return of(TECNOLOGIASINFO_MOCK);
  }
}
