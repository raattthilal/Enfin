import { Component, OnInit,ViewChild,AfterViewInit} from '@angular/core';
import { MatTableDataSource, MatSort,MatPaginator, PageEvent } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { WardsService } from 'app/wards.service';


@Component({
  selector: 'app-ward',
  templateUrl: './ward.component.html',
  styleUrls: ['./ward.component.scss']
})
export class WardComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  SettingData: MatTableDataSource<any>;
  perPage=10
  page=0

  displayedColumns: string[] = ['title','image','isbn','pageCount','publishedDate.$date','shortDescription','longDescription','status','authors','categories'];
  searchKey: string;
  

  constructor(private book:WardsService, private router:Router) { }
  
applyFilter() {
  this.searchKey = this.searchKey.trim().toLowerCase()
  this.book.getAllbooksSearch(this.page,this.perPage,this.searchKey).subscribe(res=>{
    this.SettingData = new MatTableDataSource(res.data.data)
    this.length=res.data.count;
  })
}
length;

onPaginate(pageEvent: PageEvent) {
  this.perPage = pageEvent.pageSize;
  this.page = pageEvent.pageIndex;
  this.getdata()
}
  ngOnInit() {
       this.getdata()  
  }
  
getdata(){

  this.book.getAllbooks(this.page,this.perPage).subscribe(res=>{
    this.SettingData = new MatTableDataSource(res.data.data)
    this.length=res.data.count;
  })
  
}


onSearchClear() {
  this.searchKey = "";
  this.applyFilter();
}


  

}