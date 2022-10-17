import { ActivatedRoute } from '@angular/router'
import { Component, OnInit } from '@angular/core'

import { FrisbeeService } from '../frisbee.service'
import { Frisbee } from '../frisbee'

@Component({
  selector: 'app-frisbee-detail',
  templateUrl: './frisbee-detail.component.html',
  styleUrls: ['./frisbee-detail.component.css'],
})
export class FrisbeeDetailComponent implements OnInit {
  frisbeeService = new FrisbeeService()
  frisbeeDeails: Frisbee

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.frisbeeService.loadFrisbee(this.route.snapshot.params.id).subscribe((frisbee) => {
      this.frisbeeDeails = frisbee
    })
  }
}
