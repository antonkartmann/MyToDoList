package com.kartmann.todolist.repository;

import com.kartmann.todolist.model.TodoItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TodoRepo extends JpaRepository<TodoItem, Long>{

}
