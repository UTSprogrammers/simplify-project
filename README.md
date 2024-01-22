# Simplify Project

Bulding a simple productivity web application.

## Overview Technologies

This project is built using:
- Flask
- TailwindCSS
- Node JS
- PostgreSQL

## Getting Started

Please follow the steps below in order to setup this project in your local machine

### Step 1 - Clone the repo

In your teminal, navigate to the folder you desire to clone this project then run the command below. You will see a folder named `simplify-project` gets created on your local machine.

```cmd
git clone https://github.com/UTSprogrammers/simplify-project.git
```

### Step 2 - Install / activate virtual environment

If you have never installed virtual environment in your local machine before, please run this command in your terminal

```cmd
pip install virtualenv
```

Next, you need to install python dependencies in order for this project to work. You will need to go to your terminal and create a new virtual environment.

```cmd
virtualenv env
```

You will see an `env` folder gets created. Next, you will need to activate the virtual environment by running this command:
- MacOS
```cmd
source env/bin/activate
```
- Windows
```cmd
env\Scripts\activate
```

For windows user, please refer to this [link](https://mothergeo-py.readthedocs.io/en/latest/development/how-to/venv-win.html#activate-the-environment)

### Step 3 - Install Python dependencies

After your virtual environment is active, you will see `(env)` on the left-hand side of your terminal directory. Next, you will need to install all python dependencies in the `requirements.txt` file. To install all of the dependencies, you could run the command below.

```cmd
pip install -r requirements.txt
```

### Step 4 - Install Node JS dependencies

Next, you will need to install Node js dependencies as well in order for the CSS framework (Tailwind) to work. You could install the node dependencies by running the command below:

```cmd
npm install
```

### Step 5 - Run Flask

Finally, all of the depencies have been installed. Next, you will need to open two terminal in your editor (VS Code, Sublime Text, etc) to run this command separately. You need to run this command in order.

```cmd
npm run buildcss
```

```cmd
flask run --debug
```

Lastly, navigate to your terminal and you will find the project is being host at `http://127.0.0.1:5000`. Click on the link, and you will be able to see the project running.