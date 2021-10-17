import { Component, OnInit } from "@angular/core";
import { Course } from "../model/course";
import { interval, noop, Observable, of, throwError, timer } from "rxjs";
import {
  catchError,
  delay,
  delayWhen,
  finalize,
  map,
  retryWhen,
  shareReplay,
  tap,
} from "rxjs/operators";
import { createHttpObservable, createMyHttpObservable } from "../common/util";
import { Store } from "../common/store.service";

@Component({
  selector: "home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  //   beginnerCourses$: Observable<Course[]>;
  //   advancedCourses$: Observable<Course[]>;

  beginnerCourses: Course[];
  advancedCourses: Course[];

  constructor(private store: Store) {}

  ngOnInit() {
    // const courses$ = this.store.courses$;
    // this.beginnerCourses$ = this.store.selectBeginnerCourses();
    // this.advancedCourses$ = this.store.selectAdvancedCourses();

    // * Create helper function, createMyHttpObservable, so we can reuse it to create new HTTP Observables
    const http$ = createMyHttpObservable("/api/courses");

    // * pipe() is allow us to chain multiple operators in order to produce a new observable
    const courses$ = http$.pipe(map((response) => response["payload"]));

    courses$.subscribe(
      (courses) => {
        console.log("courses", courses);
        this.beginnerCourses = courses.filter(
          (course: Course) => course.category === "BEGINNER"
        );
        this.advancedCourses = courses.filter(
          (course: Course) => course.category === "ADVANCED"
        );
      },
      (err) => console.log("error", err),
      () => console.log("Done!")
    );
  }
}
