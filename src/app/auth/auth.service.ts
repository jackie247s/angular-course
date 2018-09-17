import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
    token: string;

    constructor(private router: Router) {}

    signUpUser(email, password) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(
                error => console.log(error)
            );
    }

    signInUser(email, password) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(
                response => {
                    firebase.auth().currentUser.getIdToken(true)
                        .then(
                            token => {
                                this.token = token;
                                this.router.navigate(['/']);
                            }
                        );
                }
            )
            .catch(
                error => console.log(error)
            );
    }

    logout() {
        firebase.auth().signOut();
        this.token = null;
    }

    getToken() {
        firebase.auth().currentUser.getIdToken(true)
            .then(
                token => this.token = token
            );

        return this.token;
    }

    isAuthenticated() {
        return this.token != null;
    }
}
