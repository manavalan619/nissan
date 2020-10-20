import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import {ApplicationComponent} from '../application/application.component';
import {AnnouncementComponent} from '../announcement/announcement.component';
import {UserGuideComponent} from '../user-guide/user-guide.component';
import {QualityGuideComponent} from '../quality-guide/quality-guide.component';
import { SocialFbComponent } from '../social-fb/social-fb.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
  HomeComponent,
  ApplicationComponent,
  UserGuideComponent,
  QualityGuideComponent,
  SocialFbComponent,
  AnnouncementComponent
]
  

})
export class HomeModule { }
