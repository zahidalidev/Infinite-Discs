import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { FrisbeeService } from '../frisbee.service';
import { Frisbee } from '../frisbee';

@Component({
  selector: 'app-frisbee-detail',
  templateUrl: './frisbee-detail.component.html',
  styleUrls: ['./frisbee-detail.component.css'],
})
export class FrisbeeDetailComponent implements OnInit {
  frisbeeDeails: Frisbee;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    const frisbeeService = new FrisbeeService();
    frisbeeService.loadFrisbee(id).subscribe((frisbee) => {
      this.frisbeeDeails = frisbee;
    });
  }
}
