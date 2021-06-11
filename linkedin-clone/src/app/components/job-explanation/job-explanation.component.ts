import { Component, OnInit } from '@angular/core';
import { job } from '../../mockdata/job.json';

@Component({
  selector: 'app-job-explanation',
  templateUrl: './job-explanation.component.html',
  styleUrls: ['./job-explanation.component.scss']
})
export class JobExplanationComponent implements OnInit {
  // desc=`This role is permenant in our company i.e at Crafts. Inc

  // However, depending on the requirement, we may send you to work at our client's locations such as Rakuten or Fujisoft headquarters in Tokyo. This will only be done after your consent and after our projects have completed.
  
  // Details -
  
  
  // Company - Crafts. Inc
  
  // Industry - IT, CG and App development
  
  // Website - www.at-crafts.com
  
  // Job position - Python - Django developer
  
  // Requirement - Urgent (Immediate joinee preferred)
  
  
  // Minimum qualifications -
  
  // 3 years of work experience in Python with Django or Flask (can be excused if exceptional resume or git profile)
  // Basic knowledge of tools - Git, REST API etc
  // Good knowledge of HTML, CSS, Javascript and responsive design
  // Experienced to work in small teams with exposure to multiple roles in one position
  // Ability to work in for long hours at the end of a project cycle
  
  // For more information please feel free to contact us after your application.
  
  
  // For successful application, please apply and fill this form -
  
  // https://forms.gle/BCVQ6vt1Vts9E3QP9`;
  job;
  postedOn;
  constructor() { 
    this.job=job;
    this.postedOn=new Date(job.postedOn);
  }

  ngOnInit(): void {
  }

}
