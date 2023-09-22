package com.banking.teamone.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import java.util.List;


@Getter
@Entity
@Table(name="customerIb")
@NoArgsConstructor
@AllArgsConstructor
public class CustomerIb {
    // TODO Auto-generated method stub
    @Getter
    @Id
    @Column(nullable = false,name = "username")
    @Pattern(regexp = "^(?!.*\\.\\.)(?!.*\\.$)[A-Za-z0-9_.]{8,20}$")
    private String username;

    // TODO Auto-generated method stub
    @Getter
    @Column(nullable = false,name = "password")
//    @Pattern(regexp = "^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{12,}$")
    private String password;


    public void setRole(CRole role) {
        this.role = role;
    }

    @Enumerated(EnumType.STRING)
    private CRole role;

    public void setUsername(String username) {
        this.username = username;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setAccountNo(String account_no) {
        this.accountNo = account_no;
    }

   // @Pattern(regexp = "^\\d{9,18}$")
    @Column(name="acc_no",nullable = false)
    private String accountNo;

    @Column
    private Boolean isActive=true;

}
