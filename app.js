import axios from 'axios';
import { createIcons, Gift, Building, Mail, UserPlus, Target } from 'lucide';
import { User } from './user';

const users = []

const addUserButton = document.getElementById('addUser');
const userBox = document.getElementById('users');
const addingBox = document.getElementById('adding-box');

getRandomUser();
getRandomUser();
getRandomUser();


addUserButton.addEventListener('click', () =>
    getRandomUser(),
)

document.body.addEventListener('click', function (e) {
    if (e.target.closest('.adding-box')) {
        getRandomUser();
    }
})


function getRandomUser() {
    axios.get("https://randomuser.me/api")
        .then((response) => {
            let picture = response.data.results[0].picture.large;
            let firstName = response.data.results[0].name.first;
            let lastName = response.data.results[0].name.last;
            let age = response.data.results[0].dob.age;
            let streetNumber = response.data.results[0].location.street.number;
            let streetName = response.data.results[0].location.street.name;
            let postcode = response.data.results[0].location.postcode;
            let city = response.data.results[0].location.city;
            let email = response.data.results[0].email;

            let newUser = new User(picture, firstName, lastName, age, streetNumber, streetName, postcode, city, email);

            users.push(newUser);

            displayTabOfUsers();
            createIcons({
                icons: {
                    Gift,
                    Building,
                    Mail,
                    UserPlus,
                },
            });
        })
        .catch((error) => {
            console.log(error)
        });
}

function displayTabOfUsers() {
    listOfUsers = ""
    for (var user of users) {
        listOfUsers += `<div class="box"> 
                        <div class="box-picture"> 
                        <img  src= ${user.picture}  alt="profil picture"> 
                        </div> 
                        <div class="box-content"> 
                        <li class="box-title"> ${user.fullName} </li> 
                        <li class="content-items"> <i class ="icon" icon-name="gift"> </i> Age : ${user.age} </li> 
                        <div class="content-items">
                        <i class = "icon" icon-name="building"></i> 
                        <div class="adress">
                        <li> ${user.adressStreet} </li>
                        <li> ${user.adressCity} </li> 
                        </div>
                        </div>
                        <li class="content-items"> <i class = "icon" icon-name="mail"></i> ${user.email} </li> 
                        </div> 
                        </div>`;
    }

    userBox.innerHTML = `${listOfUsers} <div class="adding-box">
    <i id = "userPlus" icon-name="user-plus"></i>
    </div>` ;
}

