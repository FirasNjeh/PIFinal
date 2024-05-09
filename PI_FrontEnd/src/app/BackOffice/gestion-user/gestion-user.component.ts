import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, map, of, tap, throwError } from 'rxjs';
import { User } from 'src/app/services/models';
import { AdminService } from 'src/app/services/services/admin/admin.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-gestion-user',
  templateUrl: './gestion-user.component.html',
  styleUrls: ['./gestion-user.component.css']
})
export class GestionUserComponent implements OnInit {
  user$: Observable<User[]> |undefined; 
  users$: Observable<User[]> |undefined; 
  searchText!: string;
  newUser :User={nom :'',prenom:'',email :'',mdp:'',cin:NaN,dateNaissance:'',numtel:NaN,profession:'',genre:'HOMME',salaire:NaN,adresse:'',role:'CLIENT'};
  users: User[] = [];
  
  user1!:Observable<User> ;
  currentPage = 1;
  itemsPerPage = 10;
  //errorMessage: Object | undefined;
  showMessageBox: boolean = false;
  errorMessage: string = "" ;
  isSuccess: boolean = true;
  searchTerm: string = '';
  
  constructor(private adminService: AdminService, private router :Router ){}

  ngOnInit(): void {
    this.getUsers();
    this.SortByRole(); 
    
  }

  
  getUsers(): void {
  
    this.user$ = this.adminService.getAllUsers().pipe(
      catchError(err => {
        this.errorMessage = err.message;
        return throwError(err);
      })
    );
  }
  onPageChange(page: number): void {
    this.currentPage = page;
    // Mettez à jour les éléments à afficher en fonction de la page actuelle
  }
  getDisplayedUsers(): User[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.users.slice(startIndex, endIndex);
  }

  redirectToDetails(u:User): void{
    const idu = u.id;
    console.log('l id du user récupéré est : ' + idu);
    //la redirection vers la page du pack
    this.router.navigate(['admin/user',idu]);
  }
  getUserById(id: number): void {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      console.error("Access token not found.");
      return;
    }
    this.user1 = this.adminService.getUserById(id);
    this.user1.subscribe((data: any) => {
        console.log('User Retrieved:', data);
    });}
    BannirUser(u: User): void {
      if (u.id !== undefined) { // Vérifiez si u.id est défini
        const idu = u.id;
        if (u.banni === true) {
          this.errorMessage = "Erreur: L'utilisateur est déjà banni.";
          this.isSuccess = false;
        } else {
          this.adminService.BanUser(idu).subscribe(
            () => {
              this.errorMessage = "Utilisateur banni avec succès"; // Message de succès
              this.isSuccess = true;
              window.location.reload();
            },
            (error) => {
              console.log("Erreur lors du bannissement de l'utilisateur");
            }
          );
        }
        this.showMessageBox = true;
        
        setTimeout(() => {
          this.showMessageBox = false;
        }, 2000); // Affiche les messages pendant 2 secondes
      } 
    }
    
    
    DebannirUser(u: User): void {
      if (u.id !== undefined) { // Vérifiez si u.id est défini
        const idu = u.id;
        if (u.banni === false) {
          this.errorMessage = "Erreur: L'utilisateur n'est pas banni.";
          this.isSuccess = false;
        } else {
          this.adminService.DebanUser(idu).subscribe(
            () => {
              this.errorMessage = "Utilisateur débanni avec succès"; // Message de succès
              this.isSuccess = true;
              window.location.reload();
            },
            (error) => {
              console.log("Erreur lors du débannissement de l'utilisateur");
            }
          );
        }
        this.showMessageBox = true;
        
        setTimeout(() => {
          this.showMessageBox = false;
        }, 2000); // Affiche les messages pendant 2 secondes
      } 
    }
    deleteUser(u: User): void {
      if (u.id !== undefined) {
        const idu = u.id;
        this.adminService.DeleteUser(idu).subscribe(() => {
          this.errorMessage = "Utilisateur supprimé avec succès"; // Définir le message de succès
          this.isSuccess = true;
          this.showMessageBox = true; // Afficher la fenêtre modale
    
          setTimeout(() => {
            this.showMessageBox = false; // Cacher la fenêtre modale après 2 secondes
            window.location.reload(); // Recharger la page après que le message a été affiché
          }, 2000); // Affiche les messages pendant 2 secondes
        });
      }
    }
    SortBySalaireCroissant(): void {
      this.adminService.SortBySalaireCroissant()
        .subscribe((data: User[]) => {
          this.users = data;
        });
    }
    SortByNom(): void {
      this.adminService.SortbyName()
        .subscribe((data: User[]) => {
          // Convertir tous les noms en minuscules avant de trier
          data.forEach(user => {
            if (user.nom) {
              user.nom = user.nom.toLowerCase();
            }
          });
          // Supprimer les utilisateurs avec un nom non défini
          data = data.filter(user => user.nom);
          // Tri des noms
          this.users = data.sort((a, b) => (a.nom || '').localeCompare(b.nom || ''));
        });
    }
    
    
    SortByAge(): void {
      this.adminService.SortByAge()
        .subscribe((data: User[]) => {
          this.users = data;
        });
    }
    SortBySalaireDecroissant(): void {
      this.adminService.SortBySalaireDecroissant()
        .subscribe((data: User[]) => {
          this.users = data;
        });
    }
    SortByRole(): void {
      this.adminService.SortByRole()
        .subscribe((data: User[]) => {
          this.users = data;
        });
    }
    SortByPrenom(): void {
      this.adminService.SortByRole()
        .subscribe((data: User[]) => {
          this.users = data;
        });
    }
    triUtilisateur(event: any): void {
      const valeurSelectionnee = event.target.value;
      if (valeurSelectionnee === 'salaireCroissant') {
        this.SortBySalaireCroissant();
        console.log(this.SortBySalaireCroissant());
      }
      if (valeurSelectionnee === 'salaireDecroissant') {
        this.SortBySalaireDecroissant();
      }
      
      if (valeurSelectionnee === 'Nom') {
        this.SortByNom();
      }
      if (valeurSelectionnee === 'Age') {
        this.SortByAge();
      }
      if (valeurSelectionnee === 'Prenom') {
        this.SortByPrenom();
      }
      
    }
    
    
    rechercher(searchText: string): void {
      if (this.searchText) {
        this.adminService.FindByNom(searchText).subscribe(
          data => {
            if (data.length > 0) {
              this.users = data;
            } else {
              this.errorMessage = "Aucun utilisateur trouvé avec ce nom.";
            }
          },
          error => {
            console.error('Une erreur s\'est produite lors de la recherche : ', error);
            this.errorMessage = "Une erreur s'est produite lors de la recherche.";
          }
        );
      } else {
        // Si la barre de recherche est vide, effacer la liste des utilisateurs et le message d'erreur
        this.users = [];
        this.errorMessage = "";
      }
    }
    
    rechercherParPrenom(searchText:string): void {
     
      if (this.searchText) {
        this.adminService.FindByPrenom(searchText).subscribe(
          data =>{this.users =data;

          },
          error => {
            console.error('Une erreur s\'est produite lors de la recherche : ', error);
          }
        );
      } else {
      }
    }
    
    
    

    
  
    
  
    // createUser() {
    //   this.adminService.CreateUser(this.newUser)
    //     .subscribe(createdUser => {
    //       // Affichez les données du nouvel utilisateur dans la fenêtre
    //       alert('Nouvel utilisateur créé avec succès : ' + JSON.stringify(createdUser));
    //       // Vous pouvez également mettre à jour votre vue ou effectuer d'autres actions nécessaires ici
    //     }, error => {
    //       // Gérez les erreurs ici, par exemple :
    //       console.error('Erreur lors de la création de l\'utilisateur : ', error);
    //       alert('Erreur lors de la création de l\'utilisateur');
    //     });
    // }
    
    
 

}
