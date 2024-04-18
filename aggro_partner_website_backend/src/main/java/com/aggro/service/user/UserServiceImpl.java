package com.aggro.service.user;

import com.aggro.dto.AggroUserDto;
import com.aggro.model.AggroUser;
import com.aggro.repository.UserRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService{

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public AggroUserDto saveAggroUser(AggroUserDto aggroUserDto) {
        AggroUser aggroUser = this.dtoToAggroUser(aggroUserDto);

        AggroUser saveAggroUser = this.userRepository.save(aggroUser);
        return this.aggrouserToDto(saveAggroUser);
    }

    @Override
    public AggroUserDto loginUser(AggroUserDto aggroUserDto) {

        AggroUser aggroUser = this.dtoToAggroUser(aggroUserDto);

        AggroUser loginAggroUser = this.userRepository.findByUsernameAndPassword(aggroUserDto.getUsername(), aggroUserDto.getPassword());

        return this.aggrouserToDto(loginAggroUser);
    }


    private AggroUser dtoToAggroUser (AggroUserDto aggroUserDto){

        AggroUser aggroUser = this.modelMapper.map(aggroUserDto, AggroUser.class);

        return aggroUser;
    }

    private AggroUserDto aggrouserToDto (AggroUser aggroUser){

        AggroUserDto aggroUserDto = this.modelMapper.map(aggroUser, AggroUserDto.class);

        return aggroUserDto;
    }

}
