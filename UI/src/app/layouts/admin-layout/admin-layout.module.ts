import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { MaterialModule } from "../../material/material.module";
import { AdminLayoutRoutes } from './admin-layout.routing';

import { MastersComponent } from 'app/masters/masters.component';

import {MatTableModule} from '@angular/material/table'
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
 import { MatTableExporterModule } from 'mat-table-exporter';


import { WardComponent } from 'app/masters/ward/ward.component';



import {
  MatIconModule,
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule,
  MatPaginatorModule,
  MatSortModule
} from '@angular/material';


import { ChartsModule } from 'ng2-charts';




@NgModule({
  imports: [
    ChartsModule,
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatCardModule,
    MatTableExporterModule
    
 
  ],
  declarations: [
   
    MastersComponent,
    WardComponent
  ],
  entryComponents:[WardComponent]

  
 
})

export class AdminLayoutModule {}
