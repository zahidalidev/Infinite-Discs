import { Component, OnInit } from '@angular/core';

import { Frisbee } from '../frisbee';
import { FrisbeeService } from '../frisbee.service';

@Component({
  selector: 'app-frisbee-list',
  templateUrl: './frisbee-list.component.html',
  styleUrls: ['./frisbee-list.component.css'],
})
export class FrisbeeListComponent implements OnInit {
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
  };

  ngOnInit(): void {
    const frisbeeService = new FrisbeeService();
    let result: Frisbee[];
    frisbeeService.loadFrisbeeData().subscribe((frisbee) => {
      result = frisbee;
    });

    result.forEach((frisbee) => {
      this.frisbeesList[frisbee.category].name = frisbee.category;
      this.frisbeesList[frisbee.category].frisbees = [
        ...this.frisbeesList[frisbee.category].frisbees,
        frisbee,
      ];
    });

    console.log(this.frisbeesList);
  }
}
