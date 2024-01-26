from flask import Flask, render_template, redirect
import os

app = Flask(__name__)

@app.route('/')
def index():
    return redirect('/login')

@app.route('/login')
def login():
    return render_template('account/login.html')

@app.route('/create-account')
def create_account():
    return render_template('account/create.html')

@app.route('/dashboard')
def dashboard():
    return render_template('dashboard/home.html')

@app.route('/dashboard/to-do')
def todo():
    return render_template('dashboard/todo.html')

@app.route('/dashboard/timer')
def timer():
    return render_template('dashboard/timer.html')

@app.route('/dashboard/timetable')
def timetable():
    return render_template('dashboard/timetable.html')

@app.route('/dashboard/video-finder')
def video_finder():
    return render_template('dashboard/video-finder.html')

if __name__=='__main__':
    app.run(debug=True)