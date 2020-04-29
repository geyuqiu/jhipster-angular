package com.soprasteria.lfi_erfassung_backend.service.mapper;


import com.soprasteria.lfi_erfassung_backend.domain.*;
import com.soprasteria.lfi_erfassung_backend.service.dto.UniversityDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity {@link University} and its DTO {@link UniversityDTO}.
 */
@Mapper(componentModel = "spring", uses = {})
public interface UniversityMapper extends EntityMapper<UniversityDTO, University> {


    @Mapping(target = "standards", ignore = true)
    @Mapping(target = "removeStandard", ignore = true)
    University toEntity(UniversityDTO universityDTO);

    default University fromId(Long id) {
        if (id == null) {
            return null;
        }
        University university = new University();
        university.setId(id);
        return university;
    }
}
