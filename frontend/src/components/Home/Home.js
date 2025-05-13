import React from "react";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            submit: false,
        };
    }

    render() {
        return (
            <div>
                <div class="container bg-primary">
                    <div class=" text-center col-sm-8 ml-auto mr-auto">
                        <div class="col-lg-12  col-sm-6 col-12 p-3">
                            <div class="row">
                                <div class="col-lg-8 col-12 col-sm-10 offset-lg-2 offset-sm-1">
                                    <h1 class="text-white">Bayer Healthcare</h1>
                                </div>
                                <nav class="navbar navbar-expand-lg navbar-light bg-success w-100">
                                   
                                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                        <span class="navbar-toggler-icon"></span>
                                    </button>
                                    <div class="collapse navbar-collapse" id="navbarNav">
                                        <ul class="navbar-nav">
                                            <li class="nav-item active">
                                                <a class="nav-link text-white" href="#">Home <span class="sr-only">(current)</span></a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link text-white" href="#">Health Topics</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link  text-white" href="#">Resources</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link text-white" href="#">About Us</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link text-white" href="#">Contact</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link text-white" href="/login">Login</a>
                                            </li>
                                           <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Register
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="/register">Register as Patient</a>
          <a class="dropdown-item" href="/provider-register">Register as Provider</a>
        </div>
      </li>
                                        </ul>
                                    </div>
                                </nav>
                               
                                <div class=" col-12 col-sm-10 offset-lg-1 offset-sm-1">
                                    <h1 class="text-white">Your Health, Our Priority</h1>
                                    <h6 class="text-white">Explore the latest health information and resources from Bayer Healthcare</h6>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <p class="font-weight-bold">Featured Health Topics</p>
                </div>
                
            </div>
        );
    }
}

export default Home;