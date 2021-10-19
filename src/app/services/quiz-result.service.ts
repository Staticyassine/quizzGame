import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
const headers = new HttpHeaders().append("Content-Type", "application/json");
@Injectable({
  providedIn: "root",
})
export class QuizResultService {
  resultStep1?;
  resultStep2 = [];

  SetresultStep1(resultStep1) {
    this.resultStep1 = resultStep1;
    console.log(this.resultStep1);
  }
  getresultStep1() {
    return this.resultStep1;
  }

  SetresultStep2(answersResult) {
    this.resultStep2.push({
      name: this.resultStep1,
      answers: answersResult,
    });
    console.log(this.resultStep2);
  }
  getresultStep2() {
    return this.resultStep2;
  }

  constructor(private http: HttpClient) {}
  baseUrl = "http://localhost:5000/text-mail";

  senddata(url, data) {
    return this.http.post(url, data);
  }

  bokabooka() {
    this.senddata(this.baseUrl, {
      to: "yassinehmaidouch@gmail.com",
      subject:
        "Quiz answer for the candidate named: " + this.resultStep2[0].name,
      text:
        "Full Name : " +
        this.resultStep2[0].name +
        "<br> answer 1: " +
        this.resultStep2[0].answers[0] +
        "<br> answer 2: " +
        this.resultStep2[0].answers[1] +
        "<br> answer 3: " +
        this.resultStep2[0].answers[2] +
        "<br> answer 4: " +
        this.resultStep2[0].answers[3],
    }).subscribe(
      (data) => {
        let res: any = data;
        console.log("First test sending email");
      },
      (err) => {
        console.log(err);
        // this.loading = false;
        //  this.buttionText = "Submit";
      },
      () => {
        // this.loading = false;
        //  this.buttionText = "Submit";
      }
    );
  }
}
