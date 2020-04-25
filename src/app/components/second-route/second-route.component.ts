import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-second-route',
  templateUrl: './second-route.component.html',
  styleUrls: ['./second-route.component.css']
})
export class SecondRouteComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.pipe((take(1))).subscribe((params) => {
      if (params.has('token')) {
        this.router.navigate(['/second-route']);
      }
    });
  }

}
