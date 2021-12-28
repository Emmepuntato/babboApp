function main (){
    const gruppo = ["aldo","bea","carlo","daria","ennio","flavia"]; //array di default di riferimento
    let pool = gruppo.map(x=>x); //array dal quale levare il babbo ad ogni sorteggio (per poi reinserirlo) e anche chi è gia stato sorteggiato
    let senzaBabbo = gruppo.map(x=>x); //array temporaneo per sorteggio senza l'utente connesso
    let statusBab = gruppo.map(x=>x); //per debugging
    let target = ''; //il sorteggiato a caso dall'array pool escludendo il babbo natale connesso
    let rndArr=[]; //per debugging
    let j=0; //contatore iterazioni in caso di errori
    let i=(pool.length)-1; //contatore delle iterazioni, diminuisce insieme all'array dei sorteggiati per non indicare posizioni 
    let lista = {};//risultato finale con gli accoppiamenti, forse di non facile accesso??
    
    function getRndNum () {
        return num= Math.floor(Math.random()*((senzaBabbo.length)-1));
    }
    function check() {
        let babbo = Object.keys(lista);
        babbo.forEach((key)=>{
            if(lista[key]===key || lista[key]===undefined){
                console.log(`errore ${key}`);
                j++;
                console.log(`${Object.keys(lista).length} ${lista}`);
                throw err;
            } else {
                console.log(`ok ${key}`);
            }
        });
    }
    function assign (rnd, actUser){
        // let actUser = document.getElementById("test1").value;
            senzaBabbo= pool.filter(x=> x!==actUser);
            if (senzaBabbo[rnd]===undefined) {rnd--}
            target = senzaBabbo[rnd];
            lista[actUser] = target;
            pool=pool.filter(x=>x!==target);
            statusBab=statusBab.filter(x=> x!==actUser);
            rndArr.push(rnd);
            i--;
            error=check();
            //qui un po' di log per il debugging
                                    if(target){}else{console.log(`\n\n errore target undefined \n\n`)}
            console.log(`LOG Babbo attuale ${actUser};
            destinatario regalo: ${target} ${rnd}
            Riassunto:${JSON.stringify(lista)} /// 
            rimanenti da pescare: ${pool} /// 
            babbi natale rimanenti ${statusBab}
            num rimanenti: ${pool.length}(${pool}) rnd ${senzaBabbo[rnd]} contatore ${i} ///
            random usciti ${rndArr}
            `);
                                    if(target){}else{console.log(`\n\n errore target undefined \n\n`)}
            //fine debugging                        
        return pool;
    }
    
    function print () {
        console.log(`Lista finale:  Babbo:      Destinatario:
                    Aldo          ${lista.aldo}
                    Bea           ${lista.bea}
                    Carlo         ${lista.carlo}
                    Daria         ${lista.daria}
                    Ennio         ${lista.ennio}
                    Flavia        ${lista.flavia}`)
    }
    
    //QUI INPUT DEL BABBO NATALE SEGRETO
    //let utente = gruppo[getRndNum()];
    
        try {
                for(let i=0; i<gruppo.length; i++) {
                pool=assign(getRndNum(), statusBab[getRndNum()]);
                print();
                };
    
        } catch(err){
            console.log("C'è stato un errore... riavvio");
            setTimeout(()=>{
                    main();
                    console.log(`Ci sono stati ${j} errori ma tutto risolto`)
            },3000)
            } 
    }
    
    main(); //tutta questa funzione deve essere eseguita non appena si preme il tasto START

    //in seguito, vengono creati dei tasti con i nomi delle persone e al click di questi viene fatta
    //Una ricerca nell'oggetto lista{} per restituire il compagno abbinato.
