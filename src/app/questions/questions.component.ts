import { Component, OnInit, Output } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { switchMap } from "rxjs/operators";
import { QuestionsService } from "../questions.service";
import { Quiz, Answers, Choice, Question } from "../quiz.model";
import { QuizResultService } from "src/app/services/quiz-result.service";

@Component({
  selector: "app-questions",
  templateUrl: "./questions.component.html",
  styleUrls: ["./questions.component.scss"],
})
export class QuestionsComponent implements OnInit {
  quiz: Quiz;
  answers: Answers;
  questions: Question[];
  currentQuestionIndex: number;
  answer;
  showResults = false;
  Allanswers = [];
  // inject both the active route and the questions service
  constructor(
    private route: ActivatedRoute,
    private questionsService: QuestionsService,
    private stateService: QuizResultService
  ) {}

  ngOnInit() {
    //read from the dynamic route and load the proper quiz data
    this.questionsService
      .getQuestions(this.route.snapshot.params.quizId)
      .subscribe((questions) => {
        this.questions = questions;
        this.answers = new Answers();
        this.currentQuestionIndex = 0;
      });
  }
  testvar = false;
  updateChoice(choice: Choice) {
    this.answers.values[this.currentQuestionIndex] = choice;
    this.answer = choice;
    this.Allanswers.push(choice);
    console.log(this.Allanswers);
  }

  nextOrViewResults() {
    console.log(this.testvar);
    if (this.currentQuestionIndex === this.questions.length - 1) {
      this.showResults = true;
      this.stateService.SetresultStep2(this.Allanswers);
      this.stateService.bokabooka();
      return;
    }
    this.currentQuestionIndex++;
    this.testvar = true;
  }

  reset() {
    this.quiz = undefined;
    this.questions = undefined;
    this.answers = undefined;
    this.currentQuestionIndex = undefined;
  }
}
