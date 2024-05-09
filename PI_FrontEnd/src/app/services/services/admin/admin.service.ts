import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AgeGroupStatisticsDto, GenderStatisticsDto, User } from '../../models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }
  
getAllUsers():Observable<Array<User>>{
    
  return this.http.get<Array<User>>('http://localhost:8081/api/v1/admin/all');
}
getUserById(id : number){
  return this.http.get<User>('http://localhost:8081/api/v1/admin/id/'+id);

}
CreateUser(body:User) {
  return this.http.post<User>("http://localhost:8081/api/v1/admin/create",body);
}
UpdateUser(body:User){
  const id=body.id;
  return this.http.put<User>(`http://localhost:8081/api/v1/admin/update/${id}`,body);

}
BanUser(userId :number){
  return this.http.post<void>('http://localhost:8081/api/v1/admin/ban/'+userId,null);

}
DebanUser(userId :number){
  return this.http.post<void>(`http://localhost:8081/api/v1/admin/deban/${userId}`,null);

}
SortbyName(){
  return this.http.get<User[]>("http://localhost:8081/api/v1/admin/sortbyname");

}
AgeMoyenUsers(){
  return this.http.get("http://localhost:8081/api/v1/admin/agemoyen");

}
DeleteUser(id : number){
  return this.http.delete<void>(`http://localhost:8081/api/v1/admin/delete/${id}`);
}
SortByAge(){
  return this.http.get<User[]>("http://localhost:8081/api/v1/admin/sortbyage");

}
FindByNom(nom :string){
  return this.http.get<User[]>(`http://localhost:8081/api/v1/admin/nom/${nom}`);

}
FindByPrenom(prenom :string){
  return this.http.get<User[]>(`http://localhost:8081/api/v1/admin/prenom/${prenom}`);

}
SortByRole(){
  return this.http.get<User[]>("http://localhost:8081/api/v1/admin/sortbyrole");

}
FindByPrenomAndNom(prenom :string,nom:string){
  return this.http.get<User[]>(`http://localhost:8081/api/v1/admin/nom/${nom}/prenom/${prenom}`);

}
SortBySurname(){
  return this.http.get<User[]>("http://localhost:8081/api/v1/admin/sortbysurname");

}
SortBySalaireCroissant(){
  return this.http.get<User[]>("http://localhost:8081/api/v1/admin/sortbysalairecroissant");

}
SortBySalaireDecroissant(){
  return this.http.get<User[]>("http://localhost:8081/api/v1/admin/sortbysalairedecroissant");

}
GenderStat(){
  return this.http.get<GenderStatisticsDto>("http://localhost:8081/api/v1/admin/statgenre");

}
TrancheAgeStat(){
  return this.http.get<AgeGroupStatisticsDto>("http://localhost:8081/api/v1/admin/stattrancheage");

}
FindByCin(cin :number){
  return this.http.get<User>(`http://localhost:8081/api/v1/admin/cin/${cin}`);

}
getCurrentUser(){
  return this.http.get<User>("http://localhost:8081/api/v1/admin/currentUser");
}
nbreTotalUser(){
  return this.http.get<number>("http://localhost:8081/api/v1/admin/nbretotalUtilisateur");
}
salaireMoyen(){
  return this.http.get<number>("http://localhost:8081/api/v1/admin/salairemoyen");
}
nbrConnexionJournaliere(){
  return this.http.get<number>("http://localhost:8081/api/v1/admin/nbrConnexion");
}

}
