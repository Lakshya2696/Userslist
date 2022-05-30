import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';


// const userDetails = [

//   {SrNo:'1',firstname:'Amit',lastname:'Sharma', username:'amit93', city:'Hyderabad', dept:'IT', type:'Functional'},
//   {SrNo:'2',firstname:'Kia',lastname:'Sharma', username:'kia29', city:'Pune', dept:'SAP',type:'Cardio'},
//   {SrNo:'3',firstname:'Sumit',lastname:'Shrivastava', username:'sumit03', city:'Jaipur', dept:'SQL',type:'Strength Training'},
//   {SrNo:'4',firstname:'Shweta',lastname:'Shukla', username:'shweta07', city:'Jaipur', dept:'Law',type:'HIIT'},
//   {SrNo:'5',firstname:'Radhika',lastname:'Sharma', username:'rad17', city:'Nagpur', dept:'DBA',type:'LISS'}
  
//   ];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'letsworkout';
  
    ngOnInit(): void {
      //sessionStorage.setItem('userDetails', JSON.stringify(userDetails));
    }

}


