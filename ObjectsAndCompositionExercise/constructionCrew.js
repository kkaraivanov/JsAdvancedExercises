function constructionCrew(args){
    if(args.dizziness){
        const obj = Object.assign(args);
        const h = (+obj.weight * .1) * +obj.experience;
        obj.levelOfHydrated += h;
        obj.dizziness = false;

        return obj;
    }

    return args;
}

console.log(constructionCrew(
    { weight: 120,
        experience: 20,
        levelOfHydrated: 200,
        dizziness: true }
      
  ));