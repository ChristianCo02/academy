import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { RestService } from '../service/rest.service';
import { PDFDocument } from 'pdf-lib';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-studenti',
  templateUrl: './studenti.component.html',
  styleUrls: ['./studenti.component.scss']
})
export class StudentiComponent {

  constructor(private service : RestService,private modalService: NgbModal, private formBuilder: FormBuilder){}

  form = this.formBuilder.group({
    nome: "",
    cognome: "",
    email: "",
    numeroTelefonico: "",
    dataAssunzione: null
  });

  open(content: any): void {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }
  listaStudenti : any[]= [];
  studente : any =""



  displayedColumns: string[] = ['id','nome', 'cognome', 'email', 'numeroTelefonico','dataAssunzione','Cv'];
  dataSource = new MatTableDataSource();

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.dataSource = new MatTableDataSource(this.listaStudenti);
  }

  ngOnInit() {
    this.service.getAllStudents().subscribe({
        next: (res: any) => {
            this.listaStudenti = res;
           console.log(this.listaStudenti);
           
        }
    });
}

saveStudente(stud : any){
  this.studente = stud;
  localStorage.setItem("studente", JSON.stringify(stud));
  console.log(this.studente);
}
cv: File | undefined;

caricaCv(event: any) {
  this.cv = event.target.files[0];
}

submitForm(): void {
  if (this.form.valid) {
    this.service.addStudente(this.form.value).subscribe({
      next :(res : any) =>{
        console.log(res.id);
        
        if (this.cv) {
          this.service.addCv(this.cv, res.id).subscribe({
            next:(res: any) =>{
              console.log("fatto");
 
              this.service.getAllStudents().subscribe({
                next: (res: any) => {
                  this.listaStudenti = res;
                }
              });
            }
          });
        }

       
        this.form.reset();
        this.cv=undefined;
      }
    })
    this.modalService.dismissAll();
  }
}





}

   
  
 
