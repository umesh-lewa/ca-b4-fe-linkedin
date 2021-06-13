import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchJob'
})
export class SearchJobPipe implements PipeTransform {
  transform(jobList:any,searchTerm:string){
    let length=searchTerm.length;
    if(!jobList||!searchTerm){
        return jobList;
    }
    else{
            return jobList.filter(job=>{
                // if(topic['name'].toLowerCase().substring(0,length).indexOf(searchTerm.toLowerCase()) !==-1){
                //    return topic;
                // }
                if(job.company.toLowerCase().indexOf(searchTerm.toLocaleLowerCase())!=-1){
                  return job;
                }
                if(job.role.toLowerCase().indexOf(searchTerm.toLocaleLowerCase())!=-1){
                  return job;
                }
                if(job.SeniorityLevel.toLowerCase().indexOf(searchTerm.toLocaleLowerCase())!=-1){
                  return job;
                }
                if(job.employmentType.toLowerCase().indexOf(searchTerm.toLocaleLowerCase())!=-1){
                  return job;
                }
           });
      }
  }
}
