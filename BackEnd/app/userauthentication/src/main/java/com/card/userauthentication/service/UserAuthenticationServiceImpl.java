package com.card.userauthentication.service;

import com.card.userauthentication.domain.User;
import com.card.userauthentication.exception.UserAlreadyExistsException;
import com.card.userauthentication.exception.UserNotFoundException;
import com.card.userauthentication.repository.UserAuthenticationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserAuthenticationServiceImpl implements IUserAuthenticationService{

    private UserAuthenticationRepository userAutheticationRepository;
    @Autowired
    public UserAuthenticationServiceImpl(UserAuthenticationRepository userAutheticationRepository){
        this.userAutheticationRepository = userAutheticationRepository;
    }

    @Override
    public User findByIdAndPassword(String username, String password) throws UserNotFoundException {
        User currentUser = this.userAutheticationRepository.findByIdAndPassword(username, password);
        if (currentUser != null) {
            return currentUser;
        } else {
            throw new UserNotFoundException("Sorry, you're not registered with us!");
        }
    }

    @Override
    public boolean saveUser(User user) throws UserAlreadyExistsException {
        boolean flag = false;
        Optional optional = userAutheticationRepository.findById(user.getId());
        if (optional.isPresent()) {
            throw new UserAlreadyExistsException("You're already registered with us! Try to login.");
        } else {
            User savedUser = userAutheticationRepository.save(user);
            flag = true;
        }
        return flag;
    }
}