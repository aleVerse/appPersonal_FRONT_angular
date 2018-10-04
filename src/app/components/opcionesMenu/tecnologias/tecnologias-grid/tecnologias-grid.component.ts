import { Component, OnInit } from '@angular/core';
import { TecnologiaInfo } from '../../../../model/TecnologiaInfo.model';
import { PersonalApiCRUDService } from '../../../../services/personal-api-crud.service';

@Component({
  selector: 'app-tecnologias-grid',
  templateUrl: './tecnologias-grid.component.html',
  styleUrls: ['./tecnologias-grid.component.scss']
})
export class TecnologiasGridComponent implements OnInit {

  constructor(private tecnologiasService: PersonalApiCRUDService) { }
  tecnologias: TecnologiaInfo[];
  ngOnInit() {
    this.getInfo();
  }

  getInfo(): void {
    this.tecnologiasService.getTecnologias().subscribe(info => this.tecnologias = info);
  }
}
