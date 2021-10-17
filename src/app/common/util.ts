import { Observable } from "rxjs";

export function createHttpObservable(url: string) {
  return Observable.create((observer) => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch(url, { signal })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          observer.error("Request failed with status code: " + response.status);
        }
      })
      .then((body) => {
        observer.next(body);

        observer.complete();
      })
      .catch((err) => {
        observer.error(err);
      });

    return () => controller.abort();
  });
}

export function createMyHttpObservable(url: string) {
  return new Observable((observer) => {
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          observer.error("Request failed with status code: " + response.status);
        }
      })
      .then((body) => {
        // if we get the data, pass data to next()
        observer.next(body);
        // then we complete this observable, no more data will be emitted from this observable
        observer.complete();
      })
      .catch((err) => {
        // if we get an error, we send the error to error(), and no value will be emitted from this observable
        observer.error(err);
      });
  });
}
