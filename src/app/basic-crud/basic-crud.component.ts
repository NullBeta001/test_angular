import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-basic-crud",
  templateUrl: "./basic-crud.component.html",
  styleUrls: ["./basic-crud.component.css"],
})
export class BasicCrudComponent implements OnInit {
  name: string = "";
  address: string = "";
  phone: string = "";
  city: string = "";
  age: number = 0;

  cities = [
    { name: "Sao Paulo", state: "SP" },
    { name: "Porto Alegre", state: "RS" },
    { name: "Curitiba", state: "PR" },
    { name: "Rio de Janeiro", state: "RJ" },
  ];

  clients = [];
  constructor() {}

  ngOnInit() {}

  save() {
    this.clients.push({
      name: this.name,
      address: this.address,
      city: this.city,
      phone: this.phone,
      age: this.age,
    });
    this.cancel();
    console.log(this.clients);
  }

  cancel() {
    this.name = '';
    this.address = '';
    this.city = '';
    this.phone = '';
    this.age = 0;
  }
}
