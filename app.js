'use strict'

function Students(eMail, mobile, tuition){
    this.eMail= eMail;
    this.mobile= mobile;
    this.tuition=tuition;
    Students.allstudents.push(this);

}

Students.allstudents = [];

function random(){
    return Math.floor(Math.random()*(24-18+1)+18);
}

let table = document.getElementById('addedTable')


function renderHead(){

    let tableHead1 = document.createElement('th');
    table.appendChild(tableHead1);
    tableHead1.textContent = 'id';
    let tableHead2 = document.createElement('th');
    table.appendChild(tableHead2);
    tableHead2.textContent = 'Name';
    let tableHead3 = document.createElement('th');
    table.appendChild(tableHead3);
    tableHead3.textContent = 'Email';
    let tableHead4 = document.createElement('th');
    table.appendChild(tableHead4);
    tableHead4.textContent = 'Mobile';
    let tableHead5 = document.createElement('th');
    table.appendChild(tableHead5);
    tableHead5.textContent = 'Age';
    let tableHead6 = document.createElement('th');
    table.appendChild(tableHead6);
    tableHead6.textContent = 'Tuition';
}

let form = document.getElementById('infoForm')
form.addEventListener('submit', submitter)




renderHead()
Students.prototype.render = function(){
    let studentRow = document.createElement('tr');
    table.appendChild(studentRow);
    for ( let i=0; i< Students.allstudents.length; i++){
        let studentId = document.createElement('td');
        studentRow.appendChild(studentId);
        studentId.textContent = i+1;
        
        let studentName = document.createElement('td');
        studentRow.appendChild(studentName);
        studentName.textContent= Students.allstudents[i].eMail.split('@ltuc.com');
        
        let studentEmail = document.createElement('td');
        studentRow.appendChild(studentEmail);
        studentEmail.textContent = Students.allstudents[i].eMail;

        let mobileNumber = document.createElement('td');
        studentRow.appendChild(mobileNumber);
        mobileNumber.textContent = Students.allstudents[i].mobile;
        
        let age = document.createElement('td');
        studentRow.appendChild(age);
        age.textContent = random();
        
        let tuition = document.createElement('td');
        studentRow.appendChild(tuition);
        tuition.textContent = Students.allstudents[i].tuition;
        
        Students.allstudents = [];
    }
}

// console.log(getStudents);

if(localStorage.getItem('student')){
    let getStudents = JSON.parse(localStorage.getItem('student'));
    
    let newGet;
    
    for( let i=0; i< getStudents.length; i++){
        newGet = new Students (getStudents[i].eMail, getStudents[i].mobile, getStudents[i].tuition);
        newGet.render();
    }
}



function submitter (event){
    event.preventDefault();
    let eMail = event.target.eMail.value;
    let mobile = event.target.mobile.value;
    let tuition = event.target.fees.value;
    
   let newStudent= new Students (eMail, mobile, tuition);
    
   localStorage.setItem('student', JSON.stringify(Students.allstudents))
    
    //    newStudent.render();
    // for( let i=0; i< Students.allstudents.length+1; i++){

        

        // }
        // Students.allstudents= [];

        // console.log(Students.allstudents);
        
}

    
    
    
