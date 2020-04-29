package com.soprasteria.lfi_erfassung_backend.repository;

import com.soprasteria.lfi_erfassung_backend.domain.University;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the University entity.
 */
@SuppressWarnings("unused")
@Repository
public interface UniversityRepository extends JpaRepository<University, Long> {
}
