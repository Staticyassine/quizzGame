// This is our own Component

import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
// importing model for this component: Question form
import { Question } from "../quiz.model";
interface Deffect {
  value: string;
  viewValue: string;
}
// decorator used to tell Angular that class below is a component
// selector property defines custom HTML element this component will render into
@Component({
  selector: "app-question-form",
  templateUrl: "./question-form.component.html",
  styleUrls: ["./question-form.component.scss"],
})
export class QuestionFormComponent implements OnInit {
  // decorators to define input (= question) and output (= when choice is made)
  // like props in React
  @Input() question: Question;
  @Input() stateBtn;
  @Output() onChoiceMade = new EventEmitter<string>();
  value = "Designation of the manufacturing defect";
  text = new FormControl("", Validators.required);

  deffects: Deffect[] = [
    { value: "Couture-visible", viewValue: "Couture visible" },
    { value: "Couture-drapeau-NOK", viewValue: "Couture drapeau NOK" },
    { value: "Manque-profile", viewValue: "Manque profile" },
    { value: "Erreur-reference", viewValue: "Erreur reference" },
    { value: "Point-sauté", viewValue: "Point sauté" },
    { value: "Pli-couture", viewValue: "Pli couture" },
    {
      value: "Tringle-non-passee-dans-le-fourreau",
      viewValue: "Tringle non passee dans le fourreau",
    },
  ];
  changeClient(value) {
    console.log(value);
    this.onChoiceMade.emit(value);
  }
  // method called, once component has received all inputs
  // initialized form controller will link model and view
  // also wire up the form controller with onChange method
  ngOnInit() {
    console.log(this.stateBtn);
  }

  onChange = () => {
    console.log(this.text.value);

    this.onChoiceMade.emit(this.text.value);
    //  this.text.setValue("");
  };
  reset() {
    this.text.setValue("");
  }
}
