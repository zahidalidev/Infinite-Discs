import { Component, OnInit } from '@angular/core'

import { Frisbee } from '../frisbee'
import { FrisbeeService } from '../frisbee.service'

@Component({
  selector: 'app-frisbee-list',
  templateUrl: './frisbee-list.component.html',
  styleUrls: ['./frisbee-list.component.css'],
})
export class FrisbeeListComponent implements OnInit {
  mockData: Frisbee[]
  frisbeeService = new FrisbeeService()
  frisbeesList = {
    distance: {
      name: '',
      frisbees: [],
    },
    fairway: {
      name: '',
      frisbees: [],
    },
    midrange: {
      name: '',
      frisbees: [],
    },
    putter: {
      name: '',
      frisbees: [],
    },
  }

  ngOnInit(): void {
    this.frisbeeService.loadFrisbeeData().subscribe((frisbee) => {
      this.mockData = frisbee
    })

    this.mockData.forEach((frisbee) => {
      this.frisbeesList[frisbee.category].name = frisbee.category
      this.frisbeesList[frisbee.category].frisbees = [
        ...this.frisbeesList[frisbee.category].frisbees,
        frisbee,
      ]
    })
  }
}
