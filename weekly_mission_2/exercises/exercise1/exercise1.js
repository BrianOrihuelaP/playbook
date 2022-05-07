const repo = {
    name: "LaunchX",
    author: "carlogilmar",
    language: "JavaScript",
    numberOfCommits: 100,
    stars: 199,
    forks: 299,
    issues_open: 10,
    issues_close: 10,
    getTotalIssues: function () {
        return this.issues_open + this.issues_close
    },
    getGeneralInfo: function () {
        return `This repository ${this.name} was created by ${this.author}`
    }
}
console.log("Nombre del repo:" + repo.name)
console.log("Issues totales: " + repo.getTotalIssues())
console.log(repo.getGeneralInfo())
console.log();
/* Segundo Ejercicio ---------------------------------*/
const issue = {
    title: "How to make functions in Class",
    repositoryNameAssociated: "Class and Objects whit Node-JS",
    status: "open",
    numberOfComments: "6",
    labels: "2",
    author: "Ulises",
    dateCreated: "14/04/2022",
    lastUpdate: "01/05/2022",
    getTitleAndAuthor: function () {
        return this.title + " " + "By  " + this.author
    },
    getGeneralInfo: function (){
        return `This issue ${this.title} was created by ${this.author} on ${this.dateCreated}`
    }
}
console.log("Nombre del issue:" + issue.title)
console.log("Issue: " + issue.getTitleAndAuthor())
console.log(issue.getGeneralInfo())
console.log();
/* Tercer Ejercicio ---------------------------------*/
const PullRequest = {
    title: "Uploading_For_First_Time",
    branchName: "main",
    dateCreated : "14/04/2022",
    status: "sync",
    repositoryNameAssociated : "Class and Objects whit Node-JS",
    getStatus: function (){
        return this.status;
    },
    getTitle: function () {
        return this.title
    }
}
console.log("Nombre del pull_request:" + PullRequest.title)
console.log("PullRequest: " + PullRequest.getTitle())
console.log(PullRequest.getStatus())
console.log();

/* modelar objetos de las siguientes plataformas = Twitter, Facebook, Uber, puedes desarrollar esto como tu gustes, ve a cada app y mira la información 
que puedes modelar. (Tu determinas los valores de cada llave, son meramente didacticos): */

const Twitter = {
    user: "Brian",
    trending_topic: "Never stop dancing",
    hashtag: "#BorisBrejcha",
    twittedBy: "@borisBrejcha",
    getTwit: function (){
        return this.twittedBy + " " + this.hashtag;
    }
}

const Facebook = {
    user: "Uli Volt",
    post: "about me",
    biography: "I'm lover of the technology, I'm 23 years old and I'm a software engineer",
    date : "01/05/2022",
    getProfile : function (){
        return this.user + " " + this.biography;
    }
}

const Uber = {
    user: "Brian",
    numberTravels: "12",
    registerSince: "15/05/2019",
    lastTravel: "01/05/2022",
    getProfile: function (){
        return this.user + " " + this.registerSince;
    }
}

console.log(Twitter.getTwit());
console.log();
console.log(Facebook.getProfile());
console.log();
console.log(Uber.getProfile());


