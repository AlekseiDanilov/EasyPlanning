package ru.naumen.easyplanning.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import ru.naumen.easyplanning.User;

@RestController
public class AuthenticationController {


    @Autowired
    private AuthenticationManager authenticationManager;

    @PostMapping("/api/login")
    public String login(@RequestBody User user) {

        Authentication authenticationToken =
                new UsernamePasswordAuthenticationToken(user.getLogin(), user.getPassword());
        try {
            Authentication authentication = authenticationManager.authenticate(authenticationToken);
            SecurityContextHolder.getContext().setAuthentication(authentication);
            return "authorized";
        } catch (AuthenticationException ex) {
            return "unauthorized";
        }
    }

    @GetMapping("/api/test")
    public String test() {
        return "ok";
    }

}

/*
@PostMapping("/api/articles")
    @Transactional
    public Article add(@RequestBody Article article) {
        articleService.save(article);
        return article;
    }
    @Autowired
    private AuthenticationManager authenticationManager;

    @RequestMapping(value = "login", method = RequestMethod.POST)
    public @ResponseBody LoginDetail login(@RequestBody User user) {

        Authentication authenticationToken =
                new UsernamePasswordAuthenticationToken(user.getUserName(), user.getPassword());
        try {
            Authentication authentication = authenticationManager.authenticate(authenticationToken);
            SecurityContextHolder.getContext().setAuthentication(authentication);
            return new LoginDetail().success().principal(authentication.getName());
        } catch (AuthenticationException ex) {
            return new LoginDetail().failed();
        }
    }

    @RequestMapping(value = "/postLogin", method= RequestMethod.GET)
    public String createUser() {
        return "postLogin";
    }
*/

