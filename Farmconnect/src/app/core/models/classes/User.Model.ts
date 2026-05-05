export class UserLogin{
    email:string;
    password:string;

    constructor(){
        this.email="";
        this.password="";
    }
}


export class UserModel {
  userId: number
  name: string
  email: string
  password: string
  roleId: number
  phone: string
  address: string
  createdAt: Date

  constructor(){
  this.userId=0;
  this.address="";
  this.createdAt= new Date()
  this.email="";
  this.password=""
  this.name=""
  this.roleId=0;
  this.phone=""
  }
}