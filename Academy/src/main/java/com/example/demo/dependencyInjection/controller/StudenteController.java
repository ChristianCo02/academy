package com.example.demo.dependencyInjection.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.dependencyInjection.model.Studente;
import com.example.demo.dependencyInjection.service.StudenteService;

@RestController
@RequestMapping("/api/studente")
@CrossOrigin
public class StudenteController {

	@Autowired
	StudenteService studenteService;
	
	@PostMapping("/inserisciStudente")
	public Studente inserisciStudente(@RequestBody Studente studente) {
		
		return studenteService.inserisciStudente(studente);
		
	}
	
	@PatchMapping("/inserisciCv")
	public void inserisciCv(@RequestParam("cv") MultipartFile cv,@RequestParam Long id) throws IOException {
		
		studenteService.inserisciCv(cv,id);
		
	}
	
	@PutMapping("/modificaStudente")
	public Studente modificaStudente(@RequestBody Studente modificheStudente,@RequestParam Long id) {
		
		return studenteService.modificaStudente(modificheStudente,id);
		
	}
	
	@GetMapping("/visualizzaTuttiStudenti")
	public List<Studente>visualizzaTuttiStudenti(){
		
		return studenteService.visualizzaTuttiStudenti();
		
	}
	
	@GetMapping("/visualizzaStudente")
	public Studente visualizzaStudente(@RequestParam Long id) {
		
		return studenteService.visualizzaStudente(id);
		
	}
	
	
}
