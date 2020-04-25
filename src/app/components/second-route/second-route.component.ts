import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-second-route',
  templateUrl: './second-route.component.html',
  styleUrls: ['./second-route.component.css']
})
export class SecondRouteComponent implements OnInit {
  message = `We have no info about your request`;


  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    if (!!localStorage.getItem('token')) {
      this.message = 'We got your info covered!';
    }
  }

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.pipe((take(1))).subscribe((params) => {
      if (params.has('token')) {
        this.router.navigate(['/second-route']);
      }
    });
  }

}
