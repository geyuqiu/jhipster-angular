package com.soprasteria.lfi_erfassung_backend.service;

import com.soprasteria.lfi_erfassung_backend.domain.University;
import com.soprasteria.lfi_erfassung_backend.repository.UniversityRepository;
import com.soprasteria.lfi_erfassung_backend.service.dto.UniversityDTO;
import com.soprasteria.lfi_erfassung_backend.service.mapper.UniversityMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.LinkedList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

/**
 * Service Implementation for managing {@link University}.
 */
@Service
@Transactional
public class UniversityService {

    private final Logger log = LoggerFactory.getLogger(UniversityService.class);

    private final UniversityRepository universityRepository;

    private final UniversityMapper universityMapper;

    public UniversityService(UniversityRepository universityRepository, UniversityMapper universityMapper) {
        this.universityRepository = universityRepository;
        this.universityMapper = universityMapper;
    }

    /**
     * Save a university.
     *
     * @param universityDTO the entity to save.
     * @return the persisted entity.
     */
    public UniversityDTO save(UniversityDTO universityDTO) {
        log.debug("Request to save University : {}", universityDTO);
        University university = universityMapper.toEntity(universityDTO);
        university = universityRepository.save(university);
        return universityMapper.toDto(university);
    }

    /**
     * Get all the universities.
     *
     * @return the list of entities.
     */
    @Transactional(readOnly = true)
    public List<UniversityDTO> findAll() {
        log.debug("Request to get all Universities");
        return universityRepository.findAll().stream()
            .map(universityMapper::toDto)
            .collect(Collectors.toCollection(LinkedList::new));
    }

    /**
     * Get one university by id.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    @Transactional(readOnly = true)
    public Optional<UniversityDTO> findOne(Long id) {
        log.debug("Request to get University : {}", id);
        return universityRepository.findById(id)
            .map(universityMapper::toDto);
    }

    /**
     * Delete the university by id.
     *
     * @param id the id of the entity.
     */
    public void delete(Long id) {
        log.debug("Request to delete University : {}", id);
        universityRepository.deleteById(id);
    }
}
