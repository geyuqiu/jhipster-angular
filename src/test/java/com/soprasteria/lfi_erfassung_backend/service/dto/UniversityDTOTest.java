package com.soprasteria.lfi_erfassung_backend.service.dto;

import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;
import com.soprasteria.lfi_erfassung_backend.web.rest.TestUtil;

public class UniversityDTOTest {

    @Test
    public void dtoEqualsVerifier() throws Exception {
        TestUtil.equalsVerifier(UniversityDTO.class);
        UniversityDTO universityDTO1 = new UniversityDTO();
        universityDTO1.setId(1L);
        UniversityDTO universityDTO2 = new UniversityDTO();
        assertThat(universityDTO1).isNotEqualTo(universityDTO2);
        universityDTO2.setId(universityDTO1.getId());
        assertThat(universityDTO1).isEqualTo(universityDTO2);
        universityDTO2.setId(2L);
        assertThat(universityDTO1).isNotEqualTo(universityDTO2);
        universityDTO1.setId(null);
        assertThat(universityDTO1).isNotEqualTo(universityDTO2);
    }
}
