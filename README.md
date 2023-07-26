# Product Management Panel

This project was bootstrapped with Create React App using TypeScript, styled-components, Formik, Yup, Redux, and Lodash.

## Overview

Product Management Panel is a web application built with React that provides a user-friendly interface to manage products. The panel offers functionalities for user login, product editing, and supports three different user roles: admin, customer, and employee. Users can log in using existing accounts or create new accounts with administrator privileges.

## Features

User Authentication: The panel allows users to log in using their credentials or create new accounts with admin rights.
Role-based Access Control: There are three roles available: admin, customer, and employee, each with different permissions.
Customer Functionality: Customers can add and remove products from their shopping cart.
Employee Functionality: Employees can add and edit products in the system.
Admin Functionality: Administrators have full control over products, including adding, editing, and removing them.

## Getting Started

Follow these steps to get the project up and running on your local machine:

1. Clone the repository: `git clone https://github.com/K2Ice/products-panel.git`
2. Navigate to the project directory: `cd products-panel`
3. Install dependencies: `npm install`
4. Start the development server: `npm start`

## Dependencies

The project relies on the following libraries:

- **React**
- **Typescript**
- **Redux**
- **Styled Components**
- **Formik**
- **Yup**
- **Lodash**

## Usage

1.  Upon accessing the panel, users will be presented with a login form.
2.  Existing users can enter their credentials to log in, while new users can create an account with admin permissions.
3.  Below are the login details for each type of account:
    **Customer Account:**
    Login: p.knys@gmail.com
    Password: knys1234
    **Employee Account:**
    Login: t.kowalski@gmail.com
    Password: kowalski123
    **Admin Account:**
    Login: j.nowak@gmail.com
    Password: 123nowak123

    **Creating a New Account:**

    If you choose to create a new account, it will automatically be granted admin privileges.

4.  After successful login, users will be redirected to the main dashboard.
5.  The dashboard will display different functionalities based on the user's role:

- Customers will see their shopping cart and product catalog.
- Employees will have access to product management and editing functionalities.
- Admins will have full control over product management, including adding, editing, and deleting products.
