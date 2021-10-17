import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import {
  concat,
  fromEvent,
  interval,
  noop,
  observable,
  Observable,
  of,
  timer,
  merge,
  Subject,
  BehaviorSubject,
  AsyncSubject,
  ReplaySubject,
} from "rxjs";
import { delayWhen, filter, map, take, timeout } from "rxjs/operators";
import { createHttpObservable } from "../common/util";

@Component({
  selector: "about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"],
})
export class AboutComponent implements OnInit {
  ngOnInit() {
    // * Different types of Streams of data/value(s

    // This one can emits multiple values and never complete
    // document.addEventListener("click", (event) => {
    //   console.log(event);
    // });

    let counter = 0;

    // This one emits multiple values and never complete
    // setInterval(() => {
    //   console.log(counter);
    //   counter++;
    // }, 1000);

    // This one emits value once and completes
    // setTimeout(() => {
    //   console.log("finished...");
    // }, 3000);

    // * RxJs solves ways to Combine Streams to avoid callback hell

    // ! Example Problem
    // When a click event happens, wait 3 seconds to start logging counter (and increment counter by 1) on every second
    // document.addEventListener("click", (event) => {
    //   console.log(event);

    //   setTimeout(() => {
    //     console.log("Started...");

    //     setInterval(() => {
    //       console.log(counter);
    //       counter++;
    //     }, 1000);
    //   }, 3000);
    // });

    // * RxJs Observables

    // ! Add $ at the end of the variable name, to make this variable an observable
    // We can hover over the variable to see the type of this variable

    // * interval() emits stream of values on every n milliseconds
    // const interval$ = interval(1000);
    // interval$.subscribe((value) => console.log("stream interval 1 " + value));
    // interval$.subscribe((value) => console.log("stream interval 2 " + value));

    // * timer() emits the first value after n milliseconds (first argument),
    // * and emits more values on every n milliseconds from the second argument
    // first argument is the wait time before it starts the first emission
    // second argument is the time interval to emit values after the first emission
    const timer$ = timer(5000, 1000);
    timer$.subscribe((value) => console.log("stream timer 1 " + value));
    timer$.subscribe((value) => console.log("stream timer 2 " + value));
  }
}
