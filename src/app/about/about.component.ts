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
import { createHttpObservable, createMyHttpObservable } from "../common/util";

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
    // let counter = 0;
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
    // ! An observable is a blueprint for a stream
    // We can hover over the variable to see the type of this variable
    // * interval() emits stream of values on every n milliseconds
    // const interval$ = interval(1000);
    // interval$.subscribe((value) => console.log("stream interval 1 " + value));
    // interval$.subscribe((value) => console.log("stream interval 2 " + value));
    // * timer() emits the first value after n milliseconds (first argument),
    // * and emits more values on every n milliseconds from the second argument
    // first argument is the wait time before it starts the first emission
    // second argument is the time interval to emit values after the first emission
    // const timer$ = timer(5000, 1000);
    // timer$.subscribe((value) => console.log("stream timer 1 " + value));
    // timer$.subscribe((value) => console.log("stream timer 2 " + value));
    // * Click Stream
    // * fromEvent() returns an observable which is the definition of a stream, it's a blueprint of a stream
    // first argument, source document or a specific button in the document is
    // second argument, the event name that we want to subscribe
    // const click$ = fromEvent(document, "click");
    // click$.subscribe((event) => console.log(event));
    // ! These (interval$, timer$ and click$) are jus definitions of the streams
    // ! They are not the actual streams until it starts subscribe
    // ! After we subscribe to it, then we start to get the values emitted by these observables
    // ? What other things we can so on the subscribe method ?
    // subscribe(), returns a subscription that contains unsubscribe() method that we can use when we want to unsubscribe to an observable
    // 1st argument, next(value), is called when we receive a value from the stream
    // 2nd argument, error(err), is called when an error occurs, when this is called, the stream is closed
    // 3rd argument, complete(), is called when the stream finishes emitting values, when this is called, the stream is closed
    // const click2$ = fromEvent(document, "click");
    // click2$.subscribe(
    //   (event) => console.log("click2$ value", event),
    //   (err) => console.log("click2$ You got an error ", err),
    //   () => console.log("click2$ completed")
    // );
    // * To unsubscribe an observable
    // subscribe(), returns a subscription that contains unsubscribe() method that we can use when we want to unsubscribe to an observable
    // const click3$ = fromEvent(document, "click");
    // const subscription = click3$.subscribe(
    //   (event) => console.log("click3$ value", event),
    //   (err) => console.log("click3$ You got an error ", err),
    //   () => console.log("click3$ completed")
    // );
    // unsubscribe to this observable after 5 seconds,
    // this observable will stop emitting data after 5 seconds
    // setTimeout(() => subscription.unsubscribe(), 5000);
    //
    // * Create our own Observables
    // ! The Observer is what we use internally to implement the observable
    // ! The Observer functions, next(), error(), and complete(), will only be called when the observable is subscribed
    // * Create an HTTP Observable
    // const http$ = new Observable((observer) => {
    //   // When this observable get subscribed, fetch the data from this endpoint
    //   fetch("/api/courses")
    //     .then((response) => response.json())
    //     .then((body) => {
    //       // if we get the data, pass data to next()
    //       observer.next(body);
    //       // then we complete this observable, no more data will be emitted from this observable
    //       observer.complete();
    //     })
    //     .catch((err) => {
    //       // if we get an error, we send the error to error(), and no value will be emitted from this observable
    //       observer.error(err);
    //     });
    // });
    // * Subscribe to HTTP Observable
    // http$.subscribe(
    //   (data) => console.log("data", data),
    //   (err) => console.log("error", err),
    //   () => console.log("Done!")
    // );
    // * Using noop for No Operation
    // http$.subscribe(
    //   (data) => console.log("data", data),
    //   noop, // noop stands for No Operation
    //   () => console.log("Done!")
    // );
    // * Create helper function, createMyHttpObservable, so we can reuse it to create new HTTP Observables
    // const http$ = createMyHttpObservable("/api/courses");
    // * pipe() is allow us to chain multiple operators in order to produce a new observable
    // const courses$ = http$.pipe(map((response) => response["payload"]));
    // courses$.subscribe(
    //   (data) => console.log("courses", data),
    //   (err) => console.log("error", err),
    //   () => console.log("Done!")
    // );
  }
}
