import React, { Component } from 'react';

export default class Login extends Component {
    render() {
        return (
            <div class="container">
                <h1>Sign In</h1>
                <form>
                    <div class="form-group">
                        <label for="username">Username</label>
                        <input class="form-control" type="text" id="username" placeholder="Enter a unique username" />
                    </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input class="form-control" type="password" id="password" placeholder="Enter a password" />
                </div>
                <button class="btn btn-block btn-primary">Sign In</button>
                </form>
                <div class="alert alert-danger"></div>
                <a href="/register">Not registered? Go here</a>
            </div>
        )
    }
}