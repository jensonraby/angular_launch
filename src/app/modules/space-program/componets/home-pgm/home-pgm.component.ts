import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { isBuffer } from 'util';
import { SpacepgmService } from '../../services/spacepgm.service';

export interface FilterObj {
  year: number;
  successfulLaunch: boolean;
  successfulLanding: boolean;
}

@Component({
  selector: 'app-home-pgm',
  templateUrl: './home-pgm.component.html',
  styleUrls: ['./home-pgm.component.scss']
})
export class HomePgmComponent implements OnInit {

  filters: any;
  programList: any;
  loading: boolean = false
  filterObj = {} as FilterObj;

  constructor(
    private spacepgmService: SpacepgmService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  clearfilter() {
    this.filterObj = {} as FilterObj;
    this.router.navigate(['/space-pgm']);
  }

  // action of filter click
  filterByYear(value, type) {
    if (type == 'year')
      this.filterObj.year = value;
    if (type == 'suceess_launch')
      this.filterObj.successfulLaunch = value;
    if (type == 'suceess_landing')
      this.filterObj.successfulLanding = value;
    this.router.navigate(['/space-pgm'], { queryParams: { year: this.filterObj.year, successfulLaunch: this.filterObj.successfulLaunch, successfulLanding: this.filterObj.successfulLanding } });
    this.getProgram();
  }


  //cache function and checking active class in filter
  getActiveClass(data, item) {
    if (data.type == 'year' && this.filterObj.year == item)
      return true;
    if (data.type == 'suceess_launch' && this.filterObj.successfulLaunch == item)
      return true
    if (data.type == 'suceess_landing' && this.filterObj.successfulLanding == item)
      return true
    return false;
  }

  // getting filter from url 
  getFilterParams() {
    this.route.queryParams.subscribe((params: FilterObj) => {
      this.filterObj = Object.assign({}, params);
      this.getProgram();
    });
  }

  // getting the filter data at first time 
  getFilter() {
    this.filters = this.spacepgmService.getFilterData();
  }

  //api call for getting data from server
  async getProgram() {
    this.loading = true;
    this.programList = [];
    this.programList = await this.spacepgmService.getProgramList(this.filterObj).toPromise();
    this.loading = false;
  }

  ngOnInit() {
    this.getFilter();
    this.getFilterParams();
  }

}
