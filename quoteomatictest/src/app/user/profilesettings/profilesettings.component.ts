import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profilesettings',
  templateUrl: './profilesettings.component.html',
  styleUrls: ['./profilesettings.component.scss']
})
export class ProfilesettingsComponent implements OnInit {

  constructor(private router: ActivatedRoute, private profileservice: UserService, private route: Router) { }

  public id: any;
  public Userobject = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    role: {},
    id: '',
    username: '',
    org: '',
    org_country: '',
    org_sub1: '',
    org_sub2: '',
    org_sub3: ''
  };
  public userDefault = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    role: {},
    id: '',
    username: '',
    org: '',
    org_country: '',
    org_sub1: '',
    org_sub2: '',
    org_sub3: ''
  };
  public roles: any[] = [];
  public rolechange: any;
  public defaultUserRole: any;
  public defaultRole: {};

  ngOnInit() {
    this.Queryparams();
  }

  Queryparams() {
    this.router.queryParams.subscribe(params => {
      this.id = params.id;
    });
    this.Userdetails();
  }

  Userdetails() {
    this.profileservice.Getuser(this.id).subscribe(data => {
      this.defaultRole = data.body.body.role;
      const user = data.body.body;
      this.Userobject.firstname = user.firstname;
      this.Userobject.lastname = user.lastname;
      this.Userobject.email = user.email;
      this.Userobject.username = user.username;
      this.Userobject.role = user.role.role;
      this.Userobject.password = user.password;
      this.Userobject.org = user.org;
      this.Userobject.org_country = user.org_country;
      this.Userobject.org_sub1 = user.org_sub1;
      this.Userobject.org_sub2 = user.org_sub2;
      this.Userobject.org_sub3 = user.org_sub3;

      this.profileservice.Getroles().subscribe(roledata => {
        this.roles = roledata.body.body;
        this.defaultUserRole = this.Userobject.role;
        const index = this.roles.findIndex(x => x.role === this.Userobject.role);
        if (index > -1) {
          this.roles.splice(index, 1);
        }
      }, error => {
        console.error('error:', error);
      });
    }, error => {
      console.error('error:', error);
    });
  }

  onChange(event) {
    this.rolechange = '';
    const updaterole = this.roles.find(x => x.role === event);
    this.rolechange = updaterole;
  }

  cancle() {
    this.route.navigate(['usermanagement']);
  }

  Updateuser() {
    this.Userobject.role = this.rolechange;
    this.Userobject.id = this.id;
    this.Userobject.username = this.Userobject.email;
    const userRole = sessionStorage.getItem('Access');

    if (this.Userobject.role === null || this.Userobject.role === undefined) {
      this.userDefault.firstname = this.Userobject.firstname;
      this.userDefault.lastname = this.Userobject.lastname;
      this.userDefault.email = this.Userobject.email;
      this.userDefault.role = this.defaultRole;
      this.userDefault.id = this.Userobject.id;
      this.userDefault.username = this.Userobject.username;
      this.userDefault.org = this.Userobject.org;
      this.userDefault.org_country = this.Userobject.org_country;
      this.userDefault.org_sub1 = this.Userobject.org_sub1;
      this.userDefault.org_sub2 = this.Userobject.org_sub2;
      this.userDefault.org_sub3 = this.Userobject.org_sub3;
    

      this.profileservice.Updateuser(this.userDefault).subscribe(data => {
        this.route.navigate(['admin']);
      }, error => {
        console.error('error:', error);
      });
    } else {

      this.profileservice.Updateuser(this.Userobject).subscribe(data => {
        this.route.navigate(['admin']);
      }, error => {
        console.error('error:', error);
      });
    }
  }
}
