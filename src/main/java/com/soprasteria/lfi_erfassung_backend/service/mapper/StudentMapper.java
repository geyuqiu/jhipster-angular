package com.soprasteria.lfi_erfassung_backend.service.mapper;


import com.soprasteria.lfi_erfassung_backend.domain.*;
import com.soprasteria.lfi_erfassung_backend.service.dto.StudentDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity {@link Student} and its DTO {@link StudentDTO}.
 */
@Mapper(componentModel = "spring", uses = {UniversityMapper.class})
public interface StudentMapper extends EntityMapper<StudentDTO, Student> {

    @Mapping(source = "university.id", target = "universityId")
    @Mapping(source = "university.name", target = "universityName")
    StudentDTO toDto(Student student);

    @Mapping(source = "universityId", target = "university")
    Student toEntity(StudentDTO studentDTO);

    default Student fromId(Long id) {
        if (id == null) {
            return null;
        }
        Student student = new Student();
        student.setId(id);
        return student;
    }
}
