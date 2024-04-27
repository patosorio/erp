# Project Name
LAUNDRY ERP

## Prerequisites
Before you begin, ensure you have met the following requirements:
* You have installed the latest version of [Python](https://www.python.org/downloads/) and [Node.js](https://nodejs.org/).
* You have a Windows/Linux/Mac machine.

## Installation

### Backend Setup (Django)

1. **Clone the repository**
    ```bash
   git clone https://github.com/patosorio/erp.git
   cd erp

2. **Set up a virtual environment**
    ```bash
    python -m venv venv
    source venv/bin/activate

3. **Install dependencies**
    ```bash
    cd backend
    pip install -r requirements.txt

3. **Set up environment variables**
    ```bash
    DEBUG=on
    SECRET_KEY=your_secret_key_here
    DATABASE_URL=sqlite:///db.sqlite3

4. **Run migrations**
    ```bash
    python manage.py makemigrations
    python manage.py migrate

5. **Create a superuser**
    ```bash
    python manage.py createsuperuser

6. **Start the development server**
    ```bash
    python manage.py runserver



### Frontend Setup (React)

1. **Navigate to directory**
    ```bash
    cd ../client

2. **Install npm packages**
    ```bash
    npm install
    

3. **Start the development server**
    ```bash
    npm start

### Usage

Accessing the web application at http://localhost:3000 and the admin panel at http://localhost:8000/admin. 