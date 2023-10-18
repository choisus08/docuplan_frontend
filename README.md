# Doc UPlan -Frontend
**Project By:** Susie Gordon

## Description
Doc UPlan is a full CRUD application developed with Vue3 and Django that compiles all doctors appointments (family, dentist, optometrist, specialist, etc.) into a calendar to improve time management, organization, and lifestyle. Users can view a list of various appointments and the calendar month of choice displaying all past and future appointments. 

## Links
- [**Github**](https://github.com/choisus08/docuplan_frontend)
- [**Deployment**](https://glittery-puppy-11f963.netlify.app/)
- [**Trello**](https://trello.com/b/v5jUhSlv/doc-uplan)
</br>

## Technologies Used
- Django
- JavaScript
- Node
- PostgreSQL
- Postman
- Python
- Vue3

## Approach
My initial approach was to make a call to the backend by successfully implementing an 'appointment' model with full CRUD capabilities. In order to fully render the CRUD functionalities, the backend url was imported to make the proper requests to load relevant data and initiate corresponding functions.

## Installation
- `Fork` and `clone` this respository
- `cd` into the directory on your local machine
- Open this repository in your code editor and run the code `npm run dev` to open the app in your browser

## Mockup of UI <br>
Desktop View </br>
<img src= "./public/mockup1.png" alt="Dekstop UI"> 
<img src="./public/mockup2.png" alt="Dekstop UI">
<img src="./public/mockup3.png" alt="Dekstop UI">
</br>
Mobile View <br>
<img src="./public/mockup4.png" alt="Mobile UI">
</br>

## Issues & Solutions
1. Full CRUD functionality was successfull in backend but a new appointment would not render in frontend 
    - Solution: Manually change the queryset in views.py (backend) to order by id 

## Future Enhancements
- Add authentication
- Add calender feature to visualize all appointments
- Add hamburger dropdown menu
- Order appointments by upcoming date

## Resources 
- https://developer.mozilla.org/en-US/
- https://vuejs.org/guide/introduction.html
- https://www.w3schools.com/
- https://www.youtube.com/@AlexMercedCoder