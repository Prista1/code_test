## Instructions for setting up the code test

1. Fork this repository using your Github account.
2. Clone the repository to your local machine.
3. Run 'bundle install'
4. Create the database
5. Run migrations
6. Load seed data (rake db:seed)
7. Verify that the app runs and you can get to the index page.

You can contact me during this time if you have issues with the environment, 
although I have tested it on multiple machines with both Ruby 1.9.2 and 1.8.7.
You can also ask for clarifications to the instructions below. 


## Code test details

In this application a patient can have zero or more care needs. Part of the
application is a screen that lets doctors and nurses indicate which care needs
a patient has at that time.

There are two models: patients and needs, with a habtm relation between them.
The goal of the test is to display a grid showing patients in the left column
and needs along the top (see below) and allowing the user to click on a cell to
associate a patient with a need.

1. All patients and needs from the database should display in a grid as
shown below.
2. Clicking in a cell should create a relation between the corresponding patient 
and need in the database. 
3. If successful, the cell should display 'true' both immediately and after a 
page reload.  

* A patient can have multiple needs at once and a need can apply to multiple patients at once.
* There may be any number of patients and any number of needs. 
* For this test, vertical and horizontal scrolling is ok. 
* You can use the existing welcome controller. There are routes and stubs for displaying the 
page (index) and creating the relationship (set_patient_need).

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

