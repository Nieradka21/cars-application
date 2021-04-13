import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterEvent, RouterState } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthGuard } from 'src/app/services/auth.guard';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {



  constructor(private router:ActivatedRoute) {
  }

  ngOnInit() {

}



}
