const { Octokit } = require("@octokit/rest");
const fs = require("fs");

// ** tested and works
const octokit = new Octokit({
  // auth: "416c1583cf597ffa71f25e922072f562f6c65796"
auth: "asdasdasdasd"
}
);

const lineReader = require('line-reader');

let counter = 0, repoName = '';

lineReader.eachLine('students.txt', function (line) {

  if (counter == 0) {

    repoName = line.trim()
  }
  counter++;
  console.log(counter, line);
  addCollaborator(line, repoName)
});


async function addCollaborator(student, repoName) {

  octokit.repos.addCollaborator({
    owner: "judylipinski",
    repo: repoName,
    username: student
  })
    .then(
      (response) => {
        if (response.error) {
          console.log('response :', response);
          console.log('student :>> ', student);
        }
      }
    )
    .catch((error) => { console.log('error :', error); });

}


