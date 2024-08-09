package com.ejerciciouno.ejerciciouno.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RequestParam;

import com.ejerciciouno.ejerciciouno.models.User;


@Controller
public class UserController {
    @GetMapping("/home")
    public String home(Model model) {
        model.addAttribute("user", new User());
        return "home";
    }
    

}
