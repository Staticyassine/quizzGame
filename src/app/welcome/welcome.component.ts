import { Component, Input } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";

import { QuestionsService } from "../questions.service";
import { Quiz } from "../quiz.model";
import { QuizResultService } from "src/app/services/quiz-result.service";

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.scss"],
})
export class WelcomeComponent {
  private quiz: Quiz[];
  nameIsWritten = false;
  name = new FormControl("", [Validators.required]);
  onInputValueChange() {
    // this.name.setValue("");
    if (this.name.value != "") {
      this.nameIsWritten = true;
    } else {
      this.nameIsWritten = false;
    }
  }

  // addPerson() {
  //   this.stateService
  //     .create({
  //       to: "yassinehmaidouch@gmail.com",
  //       subject: "First test sending email",
  //       text: "hello world",
  //     })
  //     .subscribe((data) => {
  //       console.log(data);
  //     });
  // }

  onSubmit() {
    console.log("submit value", this.name.value);
    if (this.name.valid) {
      this.nameIsWritten = true;
      this.stateService.SetresultStep1(this.name.value);
    }
  }

  constructor(
    private questionsService: QuestionsService,
    private stateService: QuizResultService
  ) {
    this.questionsService.getQuizzes().subscribe((quiz) => {
      this.quiz = quiz;
    });
  }
}
