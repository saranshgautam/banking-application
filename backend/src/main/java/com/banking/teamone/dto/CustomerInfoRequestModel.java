package com.banking.teamone.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CustomerInfoRequestModel {
    @NotBlank
    private String title;
    @NotBlank
    private String first_name;
    private String middle_name;
    @NotBlank
    private String last_name;

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getFirst_name() {
        return first_name;
    }

    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }

    public String getMiddle_name() {
        return middle_name;
    }

    public void setMiddle_name(String middle_name) {
        this.middle_name = middle_name;
    }

    public String getLast_name() {
        return last_name;
    }

    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }

    public String getFather_name() {
        return father_name;
    }

    public void setFather_name(String father_name) {
        this.father_name = father_name;
    }

    public String getMobile_no() {
        return mobile_no;
    }

    public void setMobile_no(String mobile_no) {
        this.mobile_no = mobile_no;
    }

    public String getEmail_id() {
        return email_id;
    }

    public void setEmail_id(String email_id) {
        this.email_id = email_id;
    }

    public String getAadhar_card_no() {
        return aadhar_card_no;
    }

    public void setAadhar_card_no(String aadhar_card_no) {
        this.aadhar_card_no = aadhar_card_no;
    }

    public Date getDate_of_birth() {
        return date_of_birth;
    }

    public void setDate_of_birth(Date date_of_birth) {
        this.date_of_birth = date_of_birth;
    }

    public String getResidential_address_line_1() {
        return residential_address_line_1;
    }

    public void setResidential_address_line_1(String residential_address_line_1) {
        this.residential_address_line_1 = residential_address_line_1;
    }

    public String getResidential_address_line_2() {
        return residential_address_line_2;
    }

    public void setResidential_address_line_2(String residential_address_line_2) {
        this.residential_address_line_2 = residential_address_line_2;
    }

    public String getResidential_landmark() {
        return residential_landmark;
    }

    public void setResidential_landmark(String residential_landmark) {
        this.residential_landmark = residential_landmark;
    }

    public String getResidential_city() {
        return residential_city;
    }

    public void setResidential_city(String residential_city) {
        this.residential_city = residential_city;
    }

    public String getResidential_pincode() {
        return residential_pincode;
    }

    public void setResidential_pincode(String residential_pincode) {
        this.residential_pincode = residential_pincode;
    }

    public String getPermanent_address_line_1() {
        return permanent_address_line_1;
    }

    public void setPermanent_address_line_1(String permanent_address_line_1) {
        this.permanent_address_line_1 = permanent_address_line_1;
    }

    public String getPermanent_address_line_2() {
        return permanent_address_line_2;
    }

    public void setPermanent_address_line_2(String permanent_address_line_2) {
        this.permanent_address_line_2 = permanent_address_line_2;
    }

    public String getPermanent_landmark() {
        return permanent_landmark;
    }

    public void setPermanent_landmark(String permanent_landmark) {
        this.permanent_landmark = permanent_landmark;
    }

    public String getPermanent_city() {
        return permanent_city;
    }

    public void setPermanent_city(String permanent_city) {
        this.permanent_city = permanent_city;
    }

    public String getPermanent_pincode() {
        return permanent_pincode;
    }

    public void setPermanent_pincode(String permanent_pincode) {
        this.permanent_pincode = permanent_pincode;
    }

    public String getOccupation_type() {
        return occupation_type;
    }

    public void setOccupation_type(String occupation_type) {
        this.occupation_type = occupation_type;
    }

    public String getSource_of_income() {
        return source_of_income;
    }

    public void setSource_of_income(String source_of_income) {
        this.source_of_income = source_of_income;
    }

    public Double getGross_annual_income() {
        return gross_annual_income;
    }

    public void setGross_annual_income(Double gross_annual_income) {
        this.gross_annual_income = gross_annual_income;
    }

    @NotBlank
    private String father_name;
    @NotBlank
    private String mobile_no;
    @Email
    private String email_id;
    @NotBlank
    private String aadhar_card_no;
    @JsonFormat(shape=JsonFormat.Shape.STRING, pattern="dd/MM/yyyy")
    private Date date_of_birth;

    @NotBlank
    private String residential_address_line_1;
    private String residential_address_line_2;
    private String residential_landmark;
    @NotBlank
    private String residential_city;
    @NotBlank
    private String residential_pincode;
    @NotBlank
    private String permanent_address_line_1;
    private String permanent_address_line_2;
    private String permanent_landmark;
    @NotBlank
    private String permanent_city;
    @NotBlank
    private String permanent_pincode;
    @NotBlank
    private String occupation_type;
    @NotBlank
    private String source_of_income;
    @NotNull
    private Double gross_annual_income;

}
