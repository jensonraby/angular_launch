import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { FilterObj } from '../componets/home-pgm/home-pgm.component';
@Injectable()
export class SpacepgmService {

  constructor(private http: HttpClient) { }

  getProgramList(filterObj: FilterObj): Observable<any> {
    let url = `https://api.spacexdata.com/v3/launches?limit=100`;
    let params = new HttpParams();
    if (filterObj.year)
      params = params.append('launch_year', filterObj.year.toString());
    if (filterObj.successfulLanding)
      params = params.append('land_success', filterObj.successfulLanding.toString());
    if (filterObj.successfulLaunch)
      params = params.append('launch_success', filterObj.successfulLaunch.toString());
    return this.http.get(url, {
      params: params
    }).pipe(catchError(error => throwError(error)))
  }

  getFilterData() {
    return [
      {
        name: 'Launch Year ', type: 'year', value: [
          {
            name: '2006'
          },
          {
            name: '2007'
          },
          {
            name: '2008'
          },
          {
            name: '2009'
          },
          {
            name: '2010'
          },
          {
            name: '2011'
          },
          {
            name: '2012'
          },
          {
            name: '2013'
          },
          {
            name: '2014'
          },
          {
            name: '2015'
          },
          {
            name: '2016'
          },
          {
            name: '2017'
          },
          {
            name: '2018'
          },
          {
            name: '2019'
          },
          {
            name: '2021'
          },
        ]
      },
      {
        name: 'Successful Launch', type: 'suceess_launch', value: [
          {
            name: 'true'
          },
          {
            name: 'false'
          }
        ]
      },
      {
        name: 'Successful Landing', type: 'suceess_landing', value: [
          {
            name: 'true'
          },
          {
            name: 'false'
          }
        ]
      }
    ]
  }

}
