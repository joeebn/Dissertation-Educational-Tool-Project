

 // Initialize Firebase, again taken from the firebase website to setup the intialisation of the database to be used in javascript.
 firebase.initializeApp(firebaseConfig);
 var firestore = firebase.firestore()

 //Accessing the database DB
 //Help setting up the firebase came from https://www.youtube.com/watch?v=FWxM1Jw76SM&t=1870s
 //Credit to The code Angle
 const db = firestore.collection("formData")


 //This is waiting for the submit button in the quiz html file to be pressed. 
let submitButton = document.getElementById("submit")


//Event listener - Listening for the submit button to be pressed to trigger the javascript cade to save to a database and process results. 
submitButton.addEventListener("click", (e) => {
    e.preventDefault()

   
    //Setting the variable values using the query selector function. If correct the variable will be 1, 
    //if answered in correct, the variable will be 0
    q1 = parseInt(document.querySelector('input[name = "q1"]:checked').value);
	q2 = parseInt(document.querySelector('input[name = "q2"]:checked').value);
	q3 = parseInt(document.querySelector('input[name = "q3"]:checked').value);
	q4 = parseInt(document.querySelector('input[name = "q4"]:checked').value);
    q5 = parseInt(document.querySelector('input[name = "q5"]:checked').value);
    q6 = parseInt(document.querySelector('input[name = "q6"]:checked').value);
    q7 = parseInt(document.querySelector('input[name = "q7"]:checked').value);
    q8 = parseInt(document.querySelector('input[name = "q8"]:checked').value);
    
    //The variable for the result. All of the questions added up.
	result = q1 + q2 + q3 + q4 + q5 + q6 + q7 +q8;

    //Inserting the grade into the quiz html file using the getElementbyID function.
    document.getElementById("grade").innerHTML = result;


    //Some of the functionality came from https://codeactually.com/interactivequiz.html
    //Credit to Code Actually
    //Creating generic feedback based on the score of the user in the quiz. 
    grading = [
        {score:0,feedback:"I recommend looking over this section again"},
        {score:1,feedback:"I recommend looking over this section again"},
        {score:2,feedback:"I think you could do better. Try again."},
        {score:3,feedback:"You're getting there with this topic. I would look over it again as there are some questions you have not managed to answer correctly."},
        {score:4,feedback:"You've 50% on this quiz. Not bas but have a look over the topic again and see if you can improve this further"},
        {score:5,feedback:"This is not a bad attempted at this quiz. There are still some sections you could improve upon. But well done"},
        {score:6,feedback:"Well done on this assessment. You have done a great job. There is still some room for improvement, so look over the topic again and see if there is anything that you missed."},
        {score:7,feedback:"Fantastic result in this section, well done. You have only missed one question. Have a look through to see where the issue is."},
        {score:8,feedback:"Well done. 100% in this assessment."}
        ];
    
        //Using a for loop to check the result against the feedback to find the feedback to be displayed on the quiz html page. 
    for(i=0; i<grading.length; i++) {
        if(result == grading[i].score) {
        result2 = grading[i].feedback;}
    }
    

    //Using the local storage to get the quiz number. And casting it as an integer
    var quiz = localStorage.getItem('quiz')
    var quiz = parseInt(quiz)

    document.getElementById("feedback").innerHTML = result2;

    //Using the local storage to get the user name to store in the database. 
    var name = localStorage.getItem("name");
    
    //Saving the following variables into the database. Console log used for testing. 
    db.doc().set({
        q1: q1,
        q2: q2,
        q3: q3,
        q4: q4,
        q5: q5,
        q6: q6,
        q7: q7,
        q8: q8,
        result: result,
        quiz: quiz,
        user: name
    }).then ( () => {
        console.log("Saved")
    }).catch((error) => {
        console.log(error)

    })
})  


 
    


