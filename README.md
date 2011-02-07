## Instructions for setting up the code test

1. Fork this repository.
2. Clone the repository locally.
3. bundle install
4. Create the database
5. Run migrations
6. Load seed data (rake db:seed)
7. Verify that the app runs and you can get to the index page.


## Code test details

There are two models: patients and needs, with a habtm relation between them.
The goal of the test is to display a grid showing patients in the left column
and needs along the top (see below). Clicking in a cell should create a relation
between the patient and the need in the database. If successful, the cell should
display 'true' both immediately and after a page reload.

<pre>
          | Need1 | Need2 | Need 3 | ...
Patient 1 | true  |       | true   |
Patient 2 |       | true  |        |
Patient 3 |       | true  | true   |
Patient 4 | true  |       |        |
...
</pre>

The click should happen via a JQuery Ajax call, i.e. the page should not reload on a click.
Functionality is more important than elegance, however, feel free to put comments where
you would come back and refactor something later.

**After completing the code, commit the changes and send me (Prista1) a pull request.**


## If time allows

1. Use CSS to style the grid to make it look good.
2. Use HTML5 and CSS to display the need names slanted as in this image below.
3. Make #2 work on IE (7 or 8)


![Slanted](https://github.com/Prista1/code_test/raw/master/public/images/needs.png)

