// This is our own Component

import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
// importing model for this component: Question form
import { Question } from "../quiz.model";

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

  // method called, once component has received all inputs
  // initialized form controller will link model and view
  // also wire up the form controller with onChange method
  ngOnInit() {
    console.log(this.stateBtn);
  }

  onChange = () => {
    this.onChoiceMade.emit(this.text.value);

    //  this.text.setValue("");
  };
  reset() {
    this.text.setValue("");
  }
}
