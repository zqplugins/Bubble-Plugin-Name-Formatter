function(instance, properties, context) {
  const first = properties.first_name;
  const last = properties.last_name;
    
  var person = new NameOfPerson({ firstName: first, lastName: last });
  
  instance.publishState("full", person.full());
  instance.publishState("familiar", person.familiar());
  instance.publishState("abbreviated", person.abbreviated());
  instance.publishState("sorted", person.sorted());
  instance.publishState("possessive", person.possessive());
  instance.publishState("initials", person.initials());
}