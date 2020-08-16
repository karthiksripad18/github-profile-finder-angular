import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { AuthService } from './../../services/auth.service';
import { auth } from 'firebase';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  email = null;

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService 
  ) {
    this.authService.getUser().subscribe(
      (user) => {
        this.email = user?.email;
      }
    );
   }

  ngOnInit(): void {
  }

  // Since SignOut is done over the web, we have used "async"
  async handleSignOut() {
    try {
      const res = await this.authService.signOut();
      this.router.navigateByUrl('/signin');
      this.toastr.info("You have been Logged Out");
      this.email = null;
    } catch (error) {
      this.toastr.error("Something is Wrong");
    }
  }

}
