package com.kartmann.todolist.controller;

import com.kartmann.todolist.model.TodoItem;
import com.kartmann.todolist.repository.TodoRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
public class TodoViewController {

    private final TodoRepo todoRepo;

    @Autowired
    public TodoViewController(TodoRepo todoRepo) {
        this.todoRepo = todoRepo;
    }

    @GetMapping("/")
    public String index(Model model) {
        model.addAttribute("todos", todoRepo.findAll());
        return "index";
    }

    @PostMapping("/todo")
    public String addTodo(@RequestParam String title) {
        TodoItem todoItem = new TodoItem();
        todoItem.setTitle(title);
        todoItem.setCompleted(false);
        todoRepo.save(todoItem);
        return "redirect:/";
    }

    @GetMapping("/todo/toggle/{id}")
    public String toggleTodo(@PathVariable Long id) {
        todoRepo.findById(id).ifPresent(todoItem -> {
            todoItem.setCompleted(!todoItem.isCompleted());
            todoRepo.save(todoItem);
        });
        return "redirect:/";
    }

    @GetMapping("/todo/delete/{id}")
    public String deleteTodo(@PathVariable Long id) {
        todoRepo.deleteById(id);
        return "redirect:/";
    }
}