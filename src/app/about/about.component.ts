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
    document.addEventListener("click", (event) => {
      console.log(event);
    });

    let counter = 0;

    // This one emits multiple values and never complete
    setInterval(() => {
      console.log(counter);
      counter++;
    }, 1000);

    // This one emits value once and completes
    setTimeout(() => {
      console.log("finished...");
    }, 3000);

    // * RxJs solves ways to Combine Streams to avoid callback hell

    // ! Example Problem
    // When a click event happens, wait 3 seconds to start logging counter (and increment counter by 1) on every second
    document.addEventListener("click", (event) => {
      console.log(event);

      setTimeout(() => {
        console.log("Started...");

        setInterval(() => {
          console.log(counter);
          counter++;
        }, 1000);
      }, 3000);
    });
  }
}
