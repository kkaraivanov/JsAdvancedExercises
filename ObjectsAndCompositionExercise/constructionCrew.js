function constructionCrew(obj){
    if(obj.dizziness){
        obj.levelOfHydrated += obj.weight * 0.1 * obj.experience;
        obj.dizziness = false;
    }

    console.log(obj)
}

constructionCrew({ weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true }
  );