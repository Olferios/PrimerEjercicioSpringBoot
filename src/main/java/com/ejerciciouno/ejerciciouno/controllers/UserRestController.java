package com.ejerciciouno.ejerciciouno.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ejerciciouno.ejerciciouno.models.User;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/api")
public class UserRestController {
    List <User> listUsers=new ArrayList<User>();
    @PostMapping("/trayendoJson")
    public User trayendoJson(@RequestBody User user ) {
        //user.setNombre(user.getNombre())
        
        listUsers.add(user);
        for (User usuario: listUsers){
            System.out.println(usuario.getNombre());
            System.out.println(usuario.getApellido());
        }
        return user;       
    }
    

}
