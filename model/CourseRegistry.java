package com.example.Course.Registration.System.model;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.*;

@Entity
public class CourseRegistry {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;//no need to provide the value
    private String name;
    private String emailId;
    private String courseName;


    public CourseRegistry(String name, String emailId, String courseName) {
        this.name = name;
        this.emailId = emailId;
        this.courseName = courseName;
    }

    public CourseRegistry() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmailId() {
        return emailId;
    }

    public void setEmailId(String emailId) {
        this.emailId = emailId;
    }

    public String getCourseName() {
        return courseName;
    }

    public void setCourseName(String courseName) {
        this.courseName = courseName;
    }


}
