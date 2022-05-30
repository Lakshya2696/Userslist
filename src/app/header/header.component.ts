import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userForm! : FormGroup ;
  showForm: boolean=false;
  editForm: boolean=false;
  userDetails: any;
  users :any[]=[];
  p:number=1;
  constructor(private formBuilder: FormBuilder) { }

  

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      SrNo:this.formBuilder.control(''),
     firstname: this.formBuilder.control(''),
     lastname: this.formBuilder.control(''),
     username: this.formBuilder.control(''),
     city: this.formBuilder.control(''),
     dept: this.formBuilder.control(''),
     type: this.formBuilder.control('')
    })

    this.userDetails=sessionStorage.getItem('userDetails');
    this.users=JSON.parse(this.userDetails);

  }

  handleSubmit() {
    if(!this.editForm){
    let user=this.userForm.value;
    if(this.users && this.users.length>0){
    user.SrNo= Math.max(this.users.length) + 1;
    this.users=[...this.users,user]
    }
    else{
      user.SrNo=1;
      this.users=[];
      this.users.push(user);
    }
    
    sessionStorage.setItem('userDetails',JSON.stringify(this.users));
    this.showForm=false;
  }
  else{
    let user=this.userForm.value;
    for (var item of this.users){
    if (item.SrNo===user.SrNo){
          item.SrNo=user.SrNo;
          item.firstname=user.firstname;
          item.lastname=user.lastname;
          item.username=user.username;
          item.dept=user.dept;
          item.type=user.type;
    }
    sessionStorage.setItem('userDetails',JSON.stringify(this.users));
    this.showForm=false;
  }

  }
  }

 


editUser(items:any){

this.userForm.setValue(items);
this.showForm=true;
this.editForm=true;
    
}

deleteUser(index:number){

let deleteUser= this.users[index];
this.users.splice(index,1);
sessionStorage.setItem('userDetails',JSON.stringify(this.users));

    
}

newUser(){
this.showForm=true;



}


}
