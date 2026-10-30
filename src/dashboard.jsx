import { useState } from "react";

function dashboard() {
    <>
    <h1 id="Greeting">Hello, What are you gonna complete today?</h1>
    <div className="Day"></div>
    <br />
    <div className="Form-Month-Day"></div>
    <button>Add Task</button>
    <br />
    <div className="Statistics"></div>
    <br />
    <hr />
    <div className="Tasks-Week">
        <h4>Mon</h4>
        <h4>Tue</h4>
        <h4>Wed</h4>
        <h4>Thu</h4>
        <h4>Fri</h4>
        <h4>Sat</h4>
        <h4>Sun</h4>
    </div>
    <div className="Complete-Tasks"></div>
    </>
}

export default dashboard