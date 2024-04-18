package com.aggro.service.user;

import com.aggro.dto.AggroUserDto;
import com.aggro.model.AggroUser;

public interface UserService {

    public AggroUserDto saveAggroUser(AggroUserDto aggroUserDto);

    public AggroUserDto loginUser(AggroUserDto aggroUserDto);

}
