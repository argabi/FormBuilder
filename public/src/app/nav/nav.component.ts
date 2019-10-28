import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  userName: any = "";

  constructor(private _user:UserService, private _router:Router) { 
    this._user.getName()
    .subscribe(
      data=>{this.userName = data; console.log("tttttttttttt",data);} ,
      error=>this._router.navigate(['/login'])
    )
  }

  ngOnInit() {
  }

}
