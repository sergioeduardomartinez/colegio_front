import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Profesor} from "./models/profesor";
import {Detail} from "./models/detail";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'colegio';
  profesores: Profesor [];
  selected: string;
  details: Detail [];
  constructor(private http:HttpClient){}

  ngOnInit(){
    this.http.get("http://localhost:8080/consultaDocente").subscribe((resp:any)=>{
      console.log(resp);
      this.profesores = resp;
    }),
      (error:any)=>{
      console.log(error)
      }
  }

  getSelect(userId: string) {


    this.http.get("http://localhost:8080/consultaProfesor?profesor="+userId).subscribe((resp:any) => {
      this.details = resp;
    }, (err: any) => {
      console.error(err);
    });
  }
}
