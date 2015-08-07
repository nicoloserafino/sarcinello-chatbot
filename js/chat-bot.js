function chatBot() {
	
	// current user input
	this.input;
	
	/**
	 * respondTo
	 * 
	 * return nothing to skip response
	 * return string for one response
	 * return array of strings for multiple responses
	 * 
	 * @param input - input chat string
	 * @return reply of chat-bot
	 */
	this.respondTo = function(input) {
	
		this.input = input.toLowerCase();
		
		if(this.match('(hi|hello|hey|hola|ciao)(\\s|!|\\.|$)'))
			return "Ciao :)";
		
		if(this.match('come sta') || this.match('come va'))
			return "Benone. Tu?";
			if (this.match('ben'))
				return "Wow, mi fa piacere!";
			if (this.match('male'))
				return "Mi dispiace :(";
		
		if(this.match('lucilla'))
			return "Lucilla ti guarda.";
		
		if(this.match('comandi'))
			return ["Digita una di queste parole chiave :)", "NODBIS - SEGRETERIA - ADE - TASSE - ISCRIZIONE - ISEE - ADISU - PROGRAMMI"];
		
		if(this.match('segreteria'))
			return "La segreteria è aperta dal Lunedi al Venerdi mattina dalle 10 alle 12. Martedi e Giovedi pomeriggio dalle 15 alle 17.";
		
		if(this.match('ade'))
			return "Si tratta di Attività Didattiche Elettive (ADE), cioè seminari, tutoriali, corsi monografici, partecipazioni certificate a convegni e congressi e internati elettivi, anche al di fuori dei periodi di attività didattica. Ogni studente sceglie autonomamente le ADE a cui partecipare, da svolgersi in orari tali da non interferire con le altre forme di attività didattica. Al termine delle attività vengono rilasciati degli attestati da registrare sull'apposito modulo ADE, da presentare alle docenti Carratù (corso AB) e Pezzolla (corso CD) entro il 30 settembre. La proff.ssa Carratù riceve presso Farmacologia, al primo piano degli Istituti Biologici. La prof.ssa Pezzolla riceve il martedì dalle 10 alle 12 presso Chirurgia Bonomo, al quarto piano del padiglione Asclepios. I moduli firmati dalle docenti vanno consegnati in segreteria entro il 30 ottobre.";
		
		if(this.match('iscrizione'))
			return "Le iscrizioni agli anni successivi al primo sono aperte dal 1 agosto al 30 novembre. Prima e seconda rata sono calcolate esclusivamente su dato ISEE. Poichè l'ultima fascia di contribuzione è quella con ISEE superiore a 399mila, consiglio a TUTTI di richiederlo presso un CAF convenzionato. L'ISEE per prestazioni universitarie va richiesto al CAF. Successivamente l'uniba lo recupera telematicamente, quindi non c'è alcuna documentazione da consegnare in segreteria. Per effettuare l’iscrizione, lo studente dovrà: accedere alla segreteria on line ESSE3, inserire i dati richiesti dalla procedura web, stampare il MAV dalla sezione Pagamenti ed effettuare il pagamento relativo alla prima rata (se dovuta). Per una guida dettagliata segui questo link http://goo.gl/kXvjae";
		
		if (this.match('nodbis'))
			return "Su nostra richiesta il regolamento NODBIS è stato modificato, eliminando i quattro voti più bassi dal calcolo della media aritmetica per il voto di laurea.";
		
		if(this.match('tasse'))
			return "Puoi scaricare il nuovo Simulatore Tasse by StudentiPer seguendo questo link https://db.tt/mnS2uJZr";
		
		if (this.match('isee') || this.match('iseu'))
			return "L'ISEE per prestazioni universitarie va richiesto al CAF. Successivamente l'uniba lo recupera telematicamente, quindi non c'è alcuna documentazione da consegnare in segreteria. Per informazioni sull'iscrizione agli anni successivi digita ISCRIZIONE.";
		
		if (this.match('programmi'))
			return ["Digita una di queste espressioni", "PROGRAMMA MEDICINA - PROGRAMMA BEMS - PROGRAMMA ODONTOIATRIA"];
			if (this.match('programma') && this.match('medicina'))
				return "Segui questo link http://goo.gl/v69OQt";
			if (this.match('programma') && this.match('bems'))
				return "Segui questo link http://goo.gl/bQfKEb";
			if (this.match('programma') && this.match('odonto'))
				return "Segui questo link http://goo.gl/DAtXqs";			
		
		if (this.match('adisu'))
			return "Se rientri nei requisiti economici e di merito dell'A.D.I.S.U., puoi fare domanda per richiedere agevolazioni su tasse, alloggio e ottenere una borsa di studio. Visita il sito web dell'ente e leggi il bando.";
		
		else
			return input + "? Scrivi meglio il comando.";
	}
	
	/**
	 * match
	 * 
	 * @param regex - regex string to match
	 * @return boolean - whether or not the input string matches the regex
	 */
	this.match = function(regex) {
	
		return new RegExp(regex).test(this.input);
	}
}
