# Todo List Web Application

## Description
This is a simple Todo List web application built using **Spring Boot**, **Thymeleaf**, and **JavaScript**. Users can add, toggle, and delete tasks, with data being managed through a **Spring Boot REST API** and stored in a database.

## Technologies Used
- **Java (Spring Boot)**: Backend logic and REST API
- **Thymeleaf**: HTML template rendering
- **Spring Data JPA**: Database management
- **JavaScript (Vanilla)**: Frontend interactions
- **CSS**: Styling

## Project Structure
```bash
├── src/main/java/com/kartmann/todolist/
│   ├── config/ThymeleafConfig.java    # Thymeleaf configuration
│   ├── controller/
│   │   ├── TodoController.java        # REST API Controller
│   │   ├── TodoViewController.java    # Handles page rendering
│   ├── model/TodoItem.java            # Entity model
│   ├── repository/TodoRepo.java       # JPA repository
│   ├── TodolistApplication.java       # Main application entry point
├── src/main/resources/
│   ├── templates/index.html           # Main HTML template
│   ├── static/
│   │   ├── styles.css                 # Stylesheet
│   │   ├── script.js                  # Frontend logic
├── pom.xml                            # Maven dependencies
```

## Installation & Running
1. Clone the repository:
   ```sh
   git clone <repository-url>
   ```
2. Navigate to the project folder and build the application:
   ```sh
   mvn clean install
   ```
3. Run the application:
   ```sh
   mvn spring-boot:run
   ```
4. Open a browser and go to:
   ```
   http://localhost:8080/
   ```

## Features
- Add tasks to the list
- Toggle task completion
- Delete tasks
- Light/Dark mode toggle
- Responsive UI

## API Endpoints
- `GET /api/todo` → Get all tasks
- `POST /api/todo` → Create a new task
- `GET /api/todo/{id}` → Get a task by ID
- `PUT /api/todo/{id}` → Update a task
- `DELETE /api/todo/{id}` → Delete a task

## Future Plans
- Implement due dates for tasks
- Improve UI/UX

## Author
Created by Anton Kartmann




