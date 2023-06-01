import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseEndPoints } from '../../models/enums/base-end-points';
import { IMedicinerequest } from 'src/app/models/medicine-Request';

@Injectable({
  providedIn: 'root'
})
export class MedicineService extends HttpService{

  constructor(private readonly http: HttpClient) {
    super(http)
  }
  private baseEndPoint = BaseEndPoints.Medicine

  addMedicine(medicine: IMedicinerequest): Observable<any>{
    return this.post(`${this.baseEndPoint}/add`, medicine);
  }
}
