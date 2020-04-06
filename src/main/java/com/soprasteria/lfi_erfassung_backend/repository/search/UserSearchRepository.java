package com.soprasteria.lfi_erfassung_backend.repository.search;

import com.soprasteria.lfi_erfassung_backend.domain.User;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the User entity.
 */
public interface UserSearchRepository extends ElasticsearchRepository<User, String> {
}
