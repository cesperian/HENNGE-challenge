There is not much to report on the process, it was fairly straightforward. The biggest challenge was just being patient since there was a bit of detail involved and I wanted to get the solution submitted within a reasonable amount of time.

The smaller challenges that popped up were routine and nothing particularly time consuming to address. For example; the Hyperscript package does not render svg elements, which I was not aware of until this exercise.

The largest issue that is still outstanding is compatability with IE11. I believe this can be addressed by using Babel and targeting an older version of JS, but I didn't want to delay the challenge submission. Instead I just added it as a line item to the IMPROVEMENTS todo list.

I ended up forgoing a framework and just wrote a basic MVC from scratch because I didn't want to deal with the overhead of using something like **Angular**, which seemed like overkill. The only run time dependencies used are **LoDash** (imported only one function, for sorting, not the entire library), **Axios** (for http requests) and **Materialize** (for the datepicker and a couple ui elements). The IDE I used was JetBrains' **WebStorm**.
