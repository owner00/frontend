    let name = "owner00";
    const courses = ["Coding","Frontend","Backend(C#)","Design","Mobile(Java)"];

    console.log("My name is " +name);
    console.log("My courses are : ");
    console.log(courses);

    let courseSize = courses.length;
    let evenCourses = courseSize%2 == 0;
    const result = [];

    for(let i = 1;i<=200;i++) {
        if(evenCourses) {
            //push all even numbers to array
            if(i % 2 == 0) {
                result.push(i);
            }
        }
        else{
            //push all odd numbers to array
            if(i % 2 != 0) {
                result.push(i);
            }
        }
    }
    console.log(result);
    console.log("Thank you for the Hard Work.")

    document.getElementById("myName").innerHTML = name;
    document.getElementById("myCourses").innerHTML = courses;
    document.getElementById("numbers").innerHTML = result;
