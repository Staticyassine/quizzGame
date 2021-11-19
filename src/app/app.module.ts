import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { MatGridListModule } from "@angular/material";
import { MatButtonModule } from "@angular/material";
import { MatCardModule } from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { QuestionFormComponent } from "./question-form/question-form.component";
import { ResultsComponent } from "./results/results.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { QuestionsComponent } from "./questions/questions.component";
import { MatSelectModule } from "@angular/material/select";
import { DatePipe } from "@angular/common";

const appRoutes: Routes = [
  { path: "welcome", component: WelcomeComponent },
  { path: ":quizId", component: QuestionsComponent },
  { path: "", redirectTo: "welcome", pathMatch: "prefix" },
];

@NgModule({
  declarations: [
    AppComponent,
    QuestionFormComponent,
    ResultsComponent,
    WelcomeComponent,
    QuestionsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    MatGridListModule,
    MatButtonModule,
    MatCardModule,
    FlexLayoutModule,
    MatInputModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatSelectModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
