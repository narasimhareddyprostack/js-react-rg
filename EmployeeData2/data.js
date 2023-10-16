let users=[{"id":1,"name":"Luca","email":"laxel0@printfriendly.com","gender":"Male"},
{"id":2,"name":"Bealle","email":"bceillier1@networkadvertising.org","gender":"Genderfluid"},
{"id":3,"name":"Alyss","email":"adutnall2@si.edu","gender":"Polygender"},
{"id":4,"name":"Iain","email":"ifrohock3@independent.co.uk","gender":"Male"},
{"id":5,"name":"Mackenzie","email":"mgrainge4@spiegel.de","gender":"Male"},
{"id":6,"name":"Anetta","email":"aknott5@squidoo.com","gender":"Female"},
{"id":7,"name":"Caroljean","email":"ccadagan6@ning.com","gender":"Female"},
{"id":8,"name":"Amara","email":"asille7@senate.gov","gender":"Female"},
{"id":9,"name":"Trumaine","email":"tosichev8@freewebs.com","gender":"Male"},
{"id":10,"name":"Kaleb","email":"kbeauchop9@bravesites.com","gender":"Male"},
{"id":11,"name":"Ame","email":"awindebanka@vinaora.com","gender":"Female"},
{"id":12,"name":"Tailor","email":"timosb@miibeian.gov.cn","gender":"Male"},
{"id":13,"name":"Dori","email":"dogroganec@youtu.be","gender":"Female"},
{"id":14,"name":"Beale","email":"bblasid@theglobeandmail.com","gender":"Male"},
{"id":15,"name":"Zonda","email":"zchazottee@paypal.com","gender":"Female"},
{"id":16,"name":"Ardella","email":"asabatif@go.com","gender":"Female"},
{"id":17,"name":"Rhodia","email":"rmarlowg@miibeian.gov.cn","gender":"Female"},
{"id":18,"name":"Alberik","email":"agatleyh@yahoo.co.jp","gender":"Male"},
{"id":19,"name":"Madelin","email":"mgarratti@bloglines.com","gender":"Female"},
{"id":20,"name":"Krishnah","email":"kgoeringj@slashdot.org","gender":"Male"},
{"id":21,"name":"Julietta","email":"jmcclevertyk@army.mil","gender":"Bigender"},
{"id":22,"name":"Andy","email":"aseebornel@springer.com","gender":"Male"},
{"id":23,"name":"Carmelle","email":"cstrussm@infoseek.co.jp","gender":"Female"},
{"id":24,"name":"Gradey","email":"gdunkleen@hibu.com","gender":"Male"},
{"id":25,"name":"Estevan","email":"erydero@cbslocal.com","gender":"Male"},
{"id":26,"name":"Ronnica","email":"rdochertyp@fema.gov","gender":"Female"},
{"id":27,"name":"Teodoro","email":"tcaraherq@paginegialle.it","gender":"Male"},
{"id":28,"name":"Wynn","email":"wruppeler@kickstarter.com","gender":"Male"},
{"id":29,"name":"Jemimah","email":"jminshaws@rakuten.co.jp","gender":"Female"},
{"id":30,"name":"Cassandra","email":"cworrellt@accuweather.com","gender":"Female"},
{"id":31,"name":"Franklyn","email":"fchastelu@go.com","gender":"Male"},
{"id":32,"name":"Marthe","email":"mcottamv@nasa.gov","gender":"Female"},
{"id":33,"name":"Royal","email":"rpeacopw@foxnews.com","gender":"Bigender"},
{"id":34,"name":"Brockie","email":"bmeekinx@hexun.com","gender":"Male"},
{"id":35,"name":"Valenka","email":"vhobbeny@biglobe.ne.jp","gender":"Female"},
{"id":36,"name":"Jeane","email":"jcayettez@jugem.jp","gender":"Agender"},
{"id":37,"name":"Jereme","email":"jgerwood10@time.com","gender":"Male"},
{"id":38,"name":"Rosemaria","email":"rwillimot11@cdbaby.com","gender":"Female"},
{"id":39,"name":"Ashleigh","email":"asweeney12@blinklist.com","gender":"Female"},
{"id":40,"name":"L;urette","email":"lobell13@columbia.edu","gender":"Female"},
{"id":41,"name":"Dallis","email":"dsandcroft14@webmd.com","gender":"Male"},
{"id":42,"name":"Blakelee","email":"bebrall15@blogger.com","gender":"Bigender"},
{"id":43,"name":"Sigismond","email":"starpey16@redcross.org","gender":"Genderqueer"},
{"id":44,"name":"Roanne","email":"rwhitrod17@census.gov","gender":"Genderqueer"},
{"id":45,"name":"Philippine","email":"ppatman18@intel.com","gender":"Agender"},
{"id":46,"name":"Robers","email":"rcandie19@economist.com","gender":"Male"},
{"id":47,"name":"Dexter","email":"dlampet1a@bloomberg.com","gender":"Male"},
{"id":48,"name":"Panchito","email":"pdedomenicis1b@live.com","gender":"Male"},
{"id":49,"name":"Freddie","email":"fstrivens1c@wikia.com","gender":"Female"},
{"id":50,"name":"Caressa","email":"cclutton1d@ocn.ne.jp","gender":"Female"}]

function display_Users(){
 let rows=""
 for(let i=0;i<=users.length-1;i++){
    rows+=`<tr>
            <td>${users[i].id}</td>
            <td>${users[i].name}</td>
            <td>${users[i].email}</td>
            <td>${users[i].gender}</td>
    
           </tr>`
 }


  document.getElementById('user_data').innerHTML=rows
}