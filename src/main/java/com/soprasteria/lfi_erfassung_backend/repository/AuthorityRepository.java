package com.soprasteria.lfi_erfassung_backend.repository;

import com.soprasteria.lfi_erfassung_backend.domain.Authority;

import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Spring Data JPA repository for the {@link Authority} entity.
 */
public interface AuthorityRepository extends JpaRepository<Authority, String> {
}
