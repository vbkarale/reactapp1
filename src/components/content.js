import React, { Component } from 'react';
import myimg from '../images/img2.jpg'

export default class Content extends Component {

    render() {
        return (
            <div class="content d-flex justify-content-center align-items-center mt-4">
                <div class="col-md-4">
                    <div class="card mt-5">
                        <img src={myimg} class="card-img-top"></img>
                        <div class="card-body">
                            <h1 class="font-weight-light text-muted mt-3 font">Alex Smith</h1>
                            <p class="card-text text-muted mt-3 font">Applied Psychometrics Specialist</p>
                            <hr class="mt-4"></hr>
                            <div class="form-group text-center mt-4">
                                <a href="https://www.twitter.com" class="text-muted "><span class="fa-stack s1">
                                    <i class="far fa-circle fa-stack-2x"></i>
                                    <i class="fab fa-twitter fa-stack-1x"></i>
                                </span></a>
                                <a href="https://www.facebook.com" class="text-muted"><span class="fa-stack s1">
                                    <i class="far fa-circle fa-stack-2x"></i>
                                    <i class="fab fa-facebook fa-stack-1x"></i>
                                </span></a>
                                <a href="https://www.instagram.com" class="text-muted"><span class="fa-stack s1">
                                    <i class="far fa-circle fa-stack-2x"></i>
                                    <i class="fab fa-instagram fa-stack-1x"></i>
                                </span></a>
                                <a href="#" class="text-muted"><span class="fa-stack fa-1x s1">
                                    <i class="far fa-circle fa-stack-2x"></i>
                                    <i class="fas fa-envelope fa-stack-1x"></i>
                                </span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}